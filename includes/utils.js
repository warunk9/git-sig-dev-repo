function null_if_string(string_cl) {
    return `nullif(trim(${string_cl}),'') as ${string_cl}`;
  }

  function parse_date(date_field) {
    return `PARSE_DATETIME('%Y-%m-%d %H:%M:%E*S UTC', nullif(TRIM(${date_field}),''))`;
  }

  function declareFn(val) {
    declare({
      database: constants.PROJECT_ID,
      schema: dataform.projectConfig.vars.bronze_Schema,
      name: val
    })
  }

  module.exports = {
    null_if_string,
    parse_date,
    declareFn
  };
