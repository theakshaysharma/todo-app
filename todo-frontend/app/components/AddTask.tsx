function AddTask(props: any) {
  const { handleSubmit, title, setTitle, description, setDescription } = props;
  return (
    <form className="text-white flex gap-1 w-full mb-4">
      <label htmlFor="todo" className="flex-1 mr-1">
        <span className="hidden">Todo</span>
        <input
          className="w-full text-inherit px-1 py-2 border-0 border-b border-white bg-transparent outline-0"
          type="text"
          name="todo"
          placeholder="Add Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className="w-full text-inherit px-1 py-2 border-0 border-b border-white bg-transparent outline-0"
          type="text"
          name="todo"
          placeholder="Add Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
    </form>
  );
}

export default AddTask;
