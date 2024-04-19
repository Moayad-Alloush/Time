export const ErrorElement = (props) => {
  return (
    <div>
      <p>error</p>
      <p>
      {JSON.stringify(props)}
      </p>
    </div>
  )
}