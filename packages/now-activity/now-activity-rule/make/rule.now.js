import { sandboxStore } from '@now-design/sandbox'
import React,  { Component } from 'react'
import Rule  from '../src/index.js'

export default class RuleWraper extends Component {
  state = {
    show: true
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const {
      show
    } = this.state

    const buttonStyle = {
      margin: 10
    }

    const ruleList = [
        {
            subTitle: '活动时间：',
            subContent: '2017年4月10号~2017年4月15号'
        },
        {
            subTitle: '活动规则',
            subContent: '活动规则文案描述'
        },
        {
            subTitle: '奖励规则',
            subContent: '奖励规则描述文案'
        },
        {
            subTitle: '注意事项',
            subContent: '用户只能用一个账号绑定一个手机参加活动，官方认定的违规用户，将取消活动的参与资格；本活动的最终解释权归Now直播所有，如有任何疑问，可进行反馈。'
        }
    ];

    return (
      <div>
        <Rule title="活动细则"
              ruleList={ruleList}
            />
      </div>
    )
  }
}

sandboxStore.add('activity-rule', RuleWraper)
