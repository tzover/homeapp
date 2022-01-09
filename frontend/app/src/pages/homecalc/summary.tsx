import Layout from '../../components/templates/Layout.tsx'
import SubTitle from '../../components/atoms/SubTitle'
import PageBackButton from '../../components/atoms/PageBackButton'
import ButtonActionContainer from '../../components/templates/ButtonActionContainer'

function Summary() {
  return (
    <Layout title={'Home Calc | Summary'} appName={'Home Calc App'}>
      <SubTitle title='Summary' />
      <div className='my-14'>
        <div>Month Area</div>
        <div>Summary</div>
        <div>en graph</div>
        <div>shosai</div>
      </div>

      <ButtonActionContainer isForm={false}>
        <PageBackButton pagePath='/homecalc' />
      </ButtonActionContainer>
    </Layout>
  )
}

export default Summary
