import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'React',
  desciption: 'Form in react',
  link: 'http://github.com'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem repository={repository}></RepositoryItem>
        <RepositoryItem></RepositoryItem>
        <RepositoryItem></RepositoryItem>
        <RepositoryItem></RepositoryItem>
      </ul>
    </section>
  )
}