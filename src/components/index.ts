import Icon from './choosIcon'
import Time from './chooseTime'
import Area from './chooseArea'
import Menu from './menu'
import AvatarGroup from './avatarGroup'
import Comment from './comment'
import CountDown from './countdown'
import DataList from './dataList'
import RotateVerify from './rotateVerify'
import SlideVerify from './slideVerify'
import Split from './split'
import Statistic from './statistic'
import Segmented from './segmented'
import Text from './text'
import ResizeBox from './resizeBox'
import checkCard from './checkCard'
import Card from './card'
import List from './list'
import Skeleton from './skeleton'
import StatisticCard from './statisticCard'
import Trend from './trend'
import Grid from './grid'
import type { App } from 'vue'

const components = [
  Icon,
  Time,
  Area,
  Menu,
  AvatarGroup,
  Comment,
  CountDown,
  DataList,
  RotateVerify,
  SlideVerify,
  Split,
  Statistic,
  Segmented,
  Text,
  ResizeBox,
  checkCard,
  Card,
  List,
  Skeleton,
  StatisticCard,
  Trend,
  Grid,
]

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c)
    })
  },
}
