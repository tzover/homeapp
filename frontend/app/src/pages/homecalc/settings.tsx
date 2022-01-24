import * as fs from 'fs'
import * as path from 'path'
import Layout from '../../components/templates/Layout.tsx'
import SubTitle from '../../components/atoms/SubTitle'
import PageBackButton from '../../components/atoms/PageBackButton'
import ButtonActionContainer from '../../components/templates/ButtonActionContainer'
import { GetStaticProps } from 'next'
import { CalcSettingsIF } from '../../models/calcSettings'

interface Props {
  setting: CalcSettingsIF[]
}

function Settings(props: Props) {
  const { setting } = props

  console.log(setting)
  return (
    <Layout title={'Home Calc | Settings'} appName={'Home Calc App'}>
      <SubTitle title='Settings' />
      <div className='my-14'>
        <div>固定費</div>
        <div>家計割合</div>
        <div>家計項目</div>
        <div>買いたいものリスト</div>
      </div>

      <ButtonActionContainer isForm={false}>
        <PageBackButton pagePath='/homecalc' />
      </ButtonActionContainer>
    </Layout>
  )
}

export default Settings

export const getStaticProps: GetStaticProps = async (context) => {
  const jsonPath = path.join(process.cwd(), 'src', 'contexts', 'settings.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const setting: CalcSettingsIF = JSON.parse(jsonText)

  return {
    props: { setting },
  }
}
