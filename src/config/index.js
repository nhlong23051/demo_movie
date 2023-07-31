import Develop from './dev'
import Production from './prod'

const getEnv = (_env) => {
    if (_env) {
        return _env
    }

    return 'development'
};

const env = process.env.NODE_EVN;

const config = {
    development:{
        ...Develop
    },
    production:{
        ...Production
    }
}

export default config[getEnv(env)]