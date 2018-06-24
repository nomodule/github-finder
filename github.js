
class Github {
  constructor() {
    this.client_id = 'a6b0f24c04832cb9915f';
    this.client_secret = 'ac12bd8d87163cd2f517f0abd3827e6a5679b0d3';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';

  }

  async getUser(user) {

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}