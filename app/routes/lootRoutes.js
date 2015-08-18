exports.show = function showLoot(req,res) {
  var id = req.params.id;

  res.render('loot/show', {lootID: id});
};
