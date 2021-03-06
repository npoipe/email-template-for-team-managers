import { winnerStyles as stls } from './winnerStyles'
import { Container, Row, Column, Image } from 'postonents'
import {
  getMonthFromNum,
  getCurrentMonthNum,
  toNumberWithSpaces,
  getBestManagerResult
} from '../../helpers'

const Winner = ({ data }) => {
  const dataTeamOne = data.filter(
    item =>
      item &&
      (item.name === 'Бурыкина Кристина' ||
        item.name === 'Барыкина Юлия' ||
        item.name === 'Салтыкова Юлия' ||
        item.name === 'Сабуров Равшан')
  )
  const dataTeamTwo = data.filter(
    item =>
      item &&
      (item.name === 'Абдукодиров Санжар' ||
        item.name === 'Жучкова Дарья' ||
        item.name === 'Сычев Константин' ||
        item.name === 'Голованов Дмитрий' ||
        item.name === 'Захаров Артём')
  )

  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <h2 style={stls.title}>
            Премия за лучший результат <br /> группы,{' '}
            <span style={stls.highlight2}>мотивация + 0.1%</span>
          </h2>
          <p style={stls.info}>
            Все участники группы, которая станет{' '}
            <span style={stls.highlight}>ЛИДЕРОМ МЕСЯЦА НОЯБРЬ</span>, получают
            дополнительные <span style={stls.highlight}>0,1%</span> <br /> к
            мотивации
          </p>
          <p style={stls.subtitle}>Лидер гонки из первой группы </p>
          <p style={stls.leader}>
            {dataTeamOne.sort((a, b) => b.result - a.result)[0].name}
          </p>
          <p style={stls.subtitle}>Лидер гонки из второй группы </p>
          <p style={stls.leader}>
            {dataTeamTwo.sort((a, b) => b.result - a.result)[0].name}
          </p>
        </Column>
      </Row>
    </Container>
  )
}

export default Winner
