import "../styles/globals.css"
import { Amplify } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import awsExports from "../src/aws-exports"
import type { AppProps } from "next/app"
import { config } from "process"

Amplify.configure({ ...config, ssr: true })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <Component {...pageProps} />
        </div>
      )}
    </Authenticator>
  )
}

export default MyApp
