import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`https://crud-mongo-db-git-main-barzdev.vercel.app/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed  to fetch Topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  // await getTopicById(id)
  const { topic } = await getTopicById(id); //diubah jadi variable "topic"
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
