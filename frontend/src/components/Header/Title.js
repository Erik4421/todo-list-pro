import "./../../static/header/title.css";

export default function Title({page}) {
  return (
    <h1>
        <b>TodoList:</b>
        &nbsp;
        <p>{page}</p>
    </h1>
  )
}
