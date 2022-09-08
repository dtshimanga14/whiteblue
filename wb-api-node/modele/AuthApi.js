const { RESTDataSource } = require('apollo-datasource-rest');

class AuthApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8081/';
  }
  async getUser(username, password) {
    return this.post("login",{ username, password });
  }
}
exports.AuthApi = AuthApi;
