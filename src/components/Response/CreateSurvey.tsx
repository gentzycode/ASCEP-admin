import { Form } from "../ui/form";
import { CategoriesMultiSelect, FormInput, SDGMultiSelect } from "../custom";
import { createSurveySchema } from "@/schemas/userSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { useState } from "react";
import FormTextArea from "../custom/FormTextArea";

interface CreateSurveyProps {
  isOpen: boolean;
  onClose: () => void;
  openNext: () => void;
}

export default function CreateSurvey({
  isOpen,
  onClose,
  openNext,
}: CreateSurveyProps) {
  const [selectedCategories, setSelectedCategories] = useState<
    CollectionData[]
  >([]);
  const [selectedSDGs, setSelectedSDGs] = useState<SDGData[]>([]);

  const form = useForm<z.infer<typeof createSurveySchema>>({
    resolver: zodResolver(createSurveySchema),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = () => {
    openNext();
    onClose();
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="min-w-[700px]"
        style={{ borderRadius: 40, padding: 32 }}
      >
        <h4 className="pb-3 border-b border-dark/10 ">Create Survey</h4>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center justify-between ">
              <p className="text-subtle_text">Title</p>
              <div className=" w-full max-w-[350px]">
                <FormInput
                  control={control}
                  name="title"
                  placeholder="Title"
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex items-center justify-between ">
              <p className="text-subtle_text">Category</p>
              <div className=" w-full max-w-[350px]">
                <CategoriesMultiSelect
                  selected={selectedCategories}
                  setSelected={setSelectedCategories}
                />
              </div>
            </div>
            <div className="flex items-center justify-between ">
              <p className="text-subtle_text">Link to SDG (Optional)</p>
              <div className=" w-full max-w-[350px]">
                <SDGMultiSelect
                  selected={selectedSDGs}
                  setSelected={setSelectedSDGs}
                />
              </div>
            </div>

            <div className="flex items-center justify-between ">
              <p className="text-subtle_text">Description</p>
              <div className=" w-full max-w-[350px]">
                <FormTextArea
                  control={control}
                  name="description"
                  placeholder="Title"
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex items-center justify-between ">
              <p className="text-subtle_text">Start - End Date</p>
              <div className=" w-full max-w-[350px]">
                <FormInput
                  control={control}
                  name="dateRange"
                  placeholder="Title"
                  errors={errors}
                  type="date"
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <Button>Next</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
