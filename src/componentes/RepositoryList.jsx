import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'unform2';

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}