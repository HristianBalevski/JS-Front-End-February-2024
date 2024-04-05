function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commitsList = document.getElementById('commits');

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} (Not Found)`);
            }
            return response.json();
        })
        .then(data => {
            commitsList.innerHTML = '';
            data.forEach(commit => {
                const commitItem = document.createElement('li');
                commitItem.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                commitsList.appendChild(commitItem);
            });
        })
        .catch(error => {
            const errorItem = document.createElement('li');
            errorItem.textContent = error.message;
            commitsList.innerHTML = '';
            commitsList.appendChild(errorItem);
        });
}
