    
    
 /* step-1 */   
 




/* step-2 */  



  function declareFn(val) {
    declare({
      database: constants.PROJECT_ID,
      schema: dataform.projectConfig.vars.bronze_Schema,
      name: val
    })
  }

const table = ["stg_products","stg_orders"]

table.forEach(declareFn)




