import secrets from '../untracked/secrets';

/**
 *
 */
class Envs {
  ENV_PROFILE = 'prod_envs';
  SAME = this.ENV_PROFILE;
  SECRETS_TEST = process.env.SECRETS_TEST || secrets.SECRETS_TEST;
}

export default new Envs();
