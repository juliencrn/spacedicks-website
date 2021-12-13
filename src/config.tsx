const isDev = process.env.NODE_ENV === "development"

export const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

export const API_URL = isDev ? "http://localhost:3001" : process.env.NEXT_PUBLIC_API_URL
export const title = "SpaceDicks"
export const description = '10,000 unique NTFs with proof of ownership living on the Polygon blockchain and following the ERC-721 standard, but yeah, these are DICKs.'

// From tailwind defaults
export const mediaQueries = {
  "sm": "640px",
  "md": "768px",
  "lg": "1024px",
  "xl": "1280px",
  "2xl": "1536px",
}

export const openSeaCollectionUrl = process.env.NEXT_PUBLIC_OPENSEA_LINK

export const githubUrl = "https://github.com/juliencrn/spacedicks-contract"
export const twitterUrl = "https://twitter.com/SpaceDicks_NFT"
export const polygonScanUrl = `https://polygonscan.com/token/${contractAddress}` // mumbai.polygonscan.com for testnet