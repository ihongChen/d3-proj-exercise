module.exports= {
  getData : function(req,res){
    getData(req,res);
  }
}

function getData(req,res){
  console.log('api querying...');

  var query = req.query;
  var id = query.id;

  if (id!=null) {
    switch (id){
      case '1':
        var sqlparams = 'GDP';
        break;
      case '2':
        var sqlparams = 'iris';
        break;
    }
    var sql=`select * from ${sqlparams};`

    pool.query(sql,function(err,rows){
      if (err){
        throw err;
      }
      res.send(rows);
      res.end()
    });
  }else {
    console.log('not valid query...')
  }

}
