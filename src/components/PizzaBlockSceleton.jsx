import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="120" r="120" /> 
    <rect x="3" y="261" rx="10" ry="10" width="280" height="30" /> 
    <rect x="0" y="308" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="411" rx="10" ry="10" width="100" height="30" /> 
    <rect x="157" y="407" rx="20" ry="20" width="120" height="40" />
  </ContentLoader>

)

export default Sceleton