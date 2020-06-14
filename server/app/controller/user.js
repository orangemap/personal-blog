'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getMmergencypassportList() {
    let res = await this.ctx.service.user.getMmergencypassportList()
    this.ctx.body = res
  }
}

module.exports = UserController;
