import Layout from '../components/Layout'

const Home: React.FC = () => {
  return (
    <Layout title="Portfolio">
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight">
            Harry Kim
          </h1>
          <div className="flex mt-4 mx-6">
            <div className="w-32 h-1 rounded-full bg-yellow-400 inline-flex"></div>
          </div>
        </div>
        <div className="text-base leading-relaxed px-12 mx-2 text-xl">
          1989. 10. 21. / Seoul, Korea
          <br />
          Tel. 010-8**6-2**3
          <br />
          Email. harrykim14@korea.ac.kr
          <br />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight">
            Education
          </h1>
          <div className="flex mt-4 mx-6">
            <div className="w-32 h-1 rounded-full bg-indigo-400 inline-flex"></div>
          </div>
        </div>
        <div className="text-base leading-relaxed px-12 mx-2 text-xl">
          2015.03 ~ 2017.03 Korea Univ. (All but dissertation)
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight">
            Introduce
          </h1>
          <div className="flex mt-4 mx-6">
            <div className="w-32 h-1 rounded-full bg-gray-400 inline-flex"></div>
          </div>
        </div>
        <div className="text-base leading-relaxed px-12 mx-2 text-xl">
          Learned Java as the first programming language since Feb 2020 through country supported IT bootcamp. <br/>
          After bootcamp, interests was shifted to Javascript and started to learn front-end knowledge. <br/>
          Fully immersed at web programming, mainly front-end technology. 
        </div>
      </div>
    </Layout>
  )
}
export default Home
