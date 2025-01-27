import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { PiDeviceMobileCamera } from "react-icons/pi";
import { DataTable } from "../custom/DataTable";
import { useGetSpecificUserAnalytics } from "@/api/user";
import { useParams } from "react-router-dom";
import { CustomPagination, EmptyState, TableSkeleton } from "../custom";

export type Payment = {
  id: string;
  device: string;
  deviceType: "Mobile" | "PC";
  date: string;
  time: string;
  action: string;
};

export const columns: ColumnDef<UserActivitiesType>[] = [
  {
    accessorKey: "device",
    header: "Device",
    cell: ({ row }) => {
      return (
        <div className="flex items-start gap-1 w-full text-sm max-w-[200px] ">
          <div className="mt-1 text-subtle_text">
            <PiDeviceMobileCamera />
            {/* {row.original.deviceType === "Mobile" ? (
            ) : (
              <PiDesktop />
            )} */}
          </div>
          <div className="font-light ">
            <p className="uppercase line-clamp-1 text-ellipsis text-[#414141] p-0 m-0 ">
              {row.original.user_agent}
            </p>
            {/* <p className="text-[#8F8F8F] ">{row.original.device}</p> */}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Time",
    cell: ({ row }) => {
      return (
        <div className="font-light ">
          <p className="uppercase text-[#414141] p-0 m-0 ">
            {new Date(row.original.createdAt).toDateString()}
          </p>
          <p className="text-[#8F8F8F] ">
            {new Date(row.original.createdAt).toLocaleTimeString()}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="font-light">
          <p className="text-[#8F8F8F] capitalize ">
            {row.original.activity_type}
          </p>
        </div>
      );
    },
  },
];

export default function UserActivities() {
  const [tableData, setTableData] = useState<UserActivitiesType[]>([]);
  const [page, setPage] = useState(1);
  const { userId } = useParams();

  const { data, isLoading } = useGetSpecificUserAnalytics({
    id: userId!,
    page,
  });

  useEffect(() => {
    if (data) {
      setTableData(data?.activities);
    }
  }, [data]);
  return (
    <div>
      <div className="py-4 border-b border-t border-[#F0F0F0] text-dark">
        Activity
      </div>
      {isLoading ? (
        <TableSkeleton />
      ) : data ? (
        <>
          <DataTable columns={columns} data={tableData} />
          <CustomPagination
            page={page}
            setPage={setPage}
            paginationData={data?.meta}
          />
        </>
      ) : (
        <EmptyState height="70vh" />
      )}
    </div>
  );
}
