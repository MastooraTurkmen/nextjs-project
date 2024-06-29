'use client'
import { editTask } from "@/utils/action";

const EditeForm = ({ task }) => {
    const {id, completed, content} = task
    console.log(task);
  return (
      <form action={editTask} className="max-w-sm p-12 border border-base-300 rounded-lg">
          <input type="hidden" name="id" value={id} />
          {/* content */}
          <input type="text"
              defaultChecked={content}
              required
              name="content"
              className="input input-bordered w-full"
          />
          {/* completed  */}
          <div className="form-control my-4">
              <label htmlFor="completed" className="label cursor-pointer">
                  <span className="labl-text">completed</span>
                  <input
                      type="checkbox"
                      defaultChecked={completed}
                      name="completed"
                      id="completed"
                      className="checkbox checkbox-primary checkbox-sm"
                  />
                  <button type="submit" className="btn btn-primary btn-block btn-sm">edit</button>
              </label>
          </div>
    </form>
  )
}

export default EditeForm