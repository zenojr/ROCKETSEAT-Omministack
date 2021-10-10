import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';

const repository = {
  name: 'React',
  desciption: 'Form in react',
  link: 'http://github.com',

  name: 'Angular',
  desciption: 'Form in angular',
  link: 'http://github.com'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem repository={repository}></RepositoryItem>
        <RepositoryItem repository={repository}></RepositoryItem>
        <RepositoryItem repository={repository}></RepositoryItem>
        <RepositoryItem repository={repository}></RepositoryItem>
      </ul>
    </section>
  )
}