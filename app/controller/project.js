'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'project, egg';
  }

  // 获取项目或者组件的项目模板
  getTemplate() {
      const { ctx } = this;
      ctx.body  = [{ a: 1, h: 2 }];
  }
}

module.exports = ProjectController;
