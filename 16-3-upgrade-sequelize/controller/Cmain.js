const { Player, Profile, Team } = require('../models');
const { search } = require('../routes');
// sequelize에서 지원하는 연산자 불러오기
// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
const { Op } = require('sequelize');

//] TODO: 컨트롤러

exports.index = (req, res) => {
  res.render('index');
};

//) findAll()
// sequelize 메소드 : 시간이 걸리는 작업 --> async-await 사용
exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.send(players);
  } catch (err) {
    console.log(err);
    res.send('Internet Server Error!!!');
  }
};

exports.getPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const player = await Player.findOne({
      where: { player_id },
    });
    res.send(player);
  } catch (err) {
    console.log(err);
    res.send('Internet Server Error!!!');
  }
};

exports.postPlayer = async (req, res) => {
  try {
    const { name, age, team_id } = req.body;
    const newPlayer = await Player.create({
      name: name,
      age: age,
      team_id: team_id,
    });
    res.send(newPlayer);
  } catch (err) {
    console.log(err);
    res.send('Internet Server Error!!!');
  }
};

exports.patchPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const { team_id } = req.body;

    const updatedPlayer = await Player.update(
      { team_id: team_id },
      {
        where: { player_id: player_id },
        // params에 있는 player_id를 player_id로 바꾸겠다
      }
    );

    res.send(updatedPlayer);
  } catch (err) {
    console.log(err);
    res.send('Internet Server Error!!!');
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const { player_id } = req.params;

    const isDeleted = await Player.destroy({
      where: { player_id: player_id },
    });

    console.log('isDeleted >>>', isDeleted); // 성공 시 1, 실패 시 0

    if (isDeleted) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  } catch (err) {
    console.log(err);
    res.send('Internet Server Error!!!');
  }
};

exports.getTeams = async (req, res) => {
  try {
    // 쿼리 스트링 꺼내오기 (req.query)
    //.. api.http
    // GET {{server}}/teams?sort=name_asc
    const { sort, search } = req.query;
    console.log(sort); //
    let teams;

    //) sort 키가 있으면, name 기준 오름차순 정렬
    if (sort === 'name_asc') {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        order: [['name', 'asc']], // name 속성 기준 오름차순
      });
    } else if (search) {
      // search key에 대한 값이 있다면
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        where: {
          name: {
            // LIKE '%search%'
            // sequelize의 like 연산자 사용
            [Op.like]: `%${search}%`,
          },
        },
        // select * from teams where name = "%KT%";
      });
    } else {
      // 없으면 findAll()
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
      });
    }

    res.send(teams);
  } catch (err) {
    console.log(err);
    res.send('Internet Server Error!!!');
  }
};

exports.getTeam = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      attributes: ['team_id', 'name'],
      where: { team_id: team_id },
    });
    res.send(team);
  } catch (err) {
    console.log(err);
    res.send('Internet Server Error!!!');
  }
};

exports.getTeamPlayers = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      where: { team_id: team_id },
      // include: JOIN
      include: [{ model: Player }],
    });
    res.send(team);
  } catch (err) {
    console.log(err);
    res.send('Internet Server Error!!!');
  }
};
