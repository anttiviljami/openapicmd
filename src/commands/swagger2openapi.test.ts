import { expect, test } from '@oclif/test';
import { resourcePath } from '../test-utils';
import 'chai';

const COMMAND = 'swagger2openapi';

describe(COMMAND, () => {
  test
    .stdout()
    .command([COMMAND, resourcePath('swagger.json')])
    .it('converts json swagger to openapi v3', (ctx) => {
      expect(ctx.stdout).to.contain('openapi: 3');
      expect(ctx.stdout).to.contain('My API');
    });

  test
    .stdout()
    .command([COMMAND, resourcePath('swagger.yml')])
    .it('converts yaml swagger to openapi v3', (ctx) => {
      expect(ctx.stdout).to.contain('openapi: 3');
      expect(ctx.stdout).to.contain('My API');
    });

  test
    .stdout()
    .command([COMMAND, resourcePath('swagger.json'), '--json'])
    .it('converts swagger to openapi v3 json', (ctx) => {
      expect(ctx.stdout).to.contain('{');
      expect(ctx.stdout).to.contain('"openapi": "3');
      expect(ctx.stdout).to.contain('My API');
      expect(ctx.stdout).to.contain('}');
    });
});
