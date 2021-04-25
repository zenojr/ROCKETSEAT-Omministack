export function RepositoryItem(props) {
  return(
    <li>
      <strong> { props.repository?.name ?? 'Null' } </strong>
      <p> { props.repository?.description } </p>
      <a href={props.repository?.link}>Access Repo </a>
    </li>
  )
}