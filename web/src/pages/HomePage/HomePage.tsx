const HomePage = () => {
  return (
    <>
      <h1 className='className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl"'>
        Env Var Audit
      </h1>

      <p className="mt-4 text-xl mb-1">Defined in .env.defaults</p>
      <span className="text-gray-500">DOT_ENV_DEFAULTS: </span>
      {process.env.DOT_ENV_DEFAULTS ? '✅ Exists' : '⛔️ Does NOT Exist'}
      <p className="mt-1 text-l text-gray-500">
        process.env.DOT_ENV_DEFAULTS: {process.env.DOT_ENV_DEFAULTS}
      </p>
      <p className="mt-1 text-l text-gray-500">
        TypeOf: {typeof process.env.DOT_ENV_DEFAULTS}
      </p>

      <p className="mt-4 text-xl mb-1">Defined in .env</p>
      <span className="text-gray-500">DOT_ENV: </span>
      {process.env.DOT_ENV ? '✅ Exists' : '⛔️ Does NOT Exist'}
      <p className="mt-1 text-l text-gray-500">
        process.env.DOT_ENV: {process.env.DOT_ENV}
      </p>
      <p className="mt-1 text-l text-gray-500">
        TypeOf: {typeof process.env.DOT_ENV}
      </p>

      <p className="mt-4 text-xl mb-1">Not Defined</p>
      <span className="text-gray-500">UNDEFINDED_ENV: </span>
      {process.env.UNDEFINDED_ENV ? '✅ Exists' : '⛔️ Does NOT Exist'}
      <p className="mt-1 text-l text-gray-500">
        process.env.UNDEFINDED_ENV: {process.env.UNDEFINDED_ENV}
      </p>
      <p className="mt-1 text-l text-gray-500">
        TypeOf: {typeof process.env.UNDEFINDED_ENV}
      </p>

      <p className="mt-4 text-xl mb-1">Defined in TOML Array</p>
      <span className="text-gray-500">TOML_ARRAY: </span>
      {process.env.TOML_ARRAY ? '✅ Exists' : '⛔️ Does NOT Exist'}
      <p className="mt-1 text-l text-gray-500">
        process.env.TOML_ARRAY: {process.env.TOML_ARRAY}
      </p>
      <p className="mt-1 text-l text-gray-500">
        TypeOf: {typeof process.env.TOML_ARRAY}
      </p>

      <p className="mt-4 text-xl mb-1">Defined via Prefix</p>
      <span className="text-gray-500">REDWOOD_ENV_PREFIX: </span>
      {process.env.REDWOOD_ENV_PREFIX ? '✅ Exists' : '⛔️ Does NOT Exist'}
      <p className="mt-1 text-l text-gray-500">
        process.env.REDWOOD_ENV_PREFIX: {process.env.REDWOOD_ENV_PREFIX}
      </p>
      <p className="mt-1 text-l text-gray-500">
        TypeOf: {typeof process.env.REDWOOD_ENV_PREFIX}
      </p>
    </>
  )
}

export default HomePage
