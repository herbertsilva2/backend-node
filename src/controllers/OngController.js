const connection = require('../database/connection');
const crypto = require('crypto');

index = async (request, response) => {
  const ongs = await connection('ongs').select('*');
  return response.json(ongs);
}

create = async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;

  const id = crypto.randomBytes(4).toString('HEX');

  await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
  });
  return response.json({ id });
}

module.exports = {
  index,
  create
};