import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary padding-vert--xl', styles.heroBanner)}>
      <div className="container padding-vert--xl">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/overview">
            See docs
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/img/iphone_signup_draft_light.png"
            alt="First iPhone draft"
            className={styles.image}
          />
          <img
            src="/img/iphone_signup_draft_dark.png"
            alt="Second iPhone draft"
            className={styles.image}
          />
          <img
            src="/img/iphone_settings_draft_light.png"
            alt="Third iPhone draft"
            className={styles.image}
          />
          <img
            src="/img/iphone_settings_draft_dark.png"
            alt="Fourth iPhone draft"
            className={styles.image}
          />
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={siteConfig.title} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
