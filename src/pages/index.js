import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function Feature({ imgUrl, title, description, reverse }) {
  return (
    <div className={clsx('row', styles.feature, reverse && styles.featureReverse)}>
      <div className="col col--6 text--center">
        <img className={styles.featureImage} src={useBaseUrl(imgUrl)} alt={title} />
      </div>
      <div className={clsx('col col--6', styles.featureContent)}>
        <div>
          <h3>{title}</h3>
          <div>{description}</div>
        </div>
      </div>
    </div>
  )
}


function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={siteConfig.tagline} description={siteConfig.tagline}>
      <main>
        <div className="hero">
          <div className="container text--center">
            <div className={styles.heroLogoWrapper}>
              <img className={styles.heroLogo} src={useBaseUrl('img/logo.svg')} alt="Reader Copilot" />
            </div>
            <h1 className={clsx('hero__title', styles.heroTitle)}>
              <Translate id="siteConfig.title">{siteConfig.title}</Translate>
            </h1>
            <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
              <Translate id="siteConfig.tagline">{siteConfig.tagline}</Translate>
            </p>
          </div>
        </div>

        <div className="hero-divider" />

        <div className="hero">
          <div className="container">
          <Feature
              imgUrl="img/read-book.svg"
              title={<Translate id="home.aggregatedread">Aggregated reading</Translate>}
              description={
                <>
                <p>
                  <Translate id="home.aggregatedread.1">
                  More than just reading, Reader Copilot cover the main channels through which people gained knowledge in the 80s: 
                  reading book, looking newspapers, listening to the radio. However, in the Internet era, we also have a new carrier.
                  </Translate>
                </p>
                <ul>
                    <li>
                      <Translate id="home.aggregatedread.2">
                        E-Book: Supports EPUB, TXT (conversion required) and PDF
                      </Translate>
                    </li>
                    <li>
                      <Translate id="home.aggregatedread.3">
                        RSS: Support local, Google Reader API, Inoreader, NewsBlur and Feedbin
                      </Translate>
                    </li>
                    <li>
                      <Translate id="home.aggregatedread.4">
                        Podcast: Manage podcasts locally and support iTunes to query podcasts
                      </Translate>
                    </li>
                    <li>
                      <Translate id="home.aggregatedread.5">
                        Collection: Support for Pocket, Instapaper and Wallabag as read-later services (valid in RSS)
                      </Translate>
                    </li>
                  </ul>
                </>
              }
            />
            <Feature
              imgUrl="img/novel-plugin.svg"
              title={<Translate id="home.bookplugin">Book Source Plugin</Translate>}
              description={
                <p>
                  <Translate id="home.plugin.1">
                    Allowing developers to write book source plugins in a variety of languages (which only need to be packaged as Web APIs) can greatly expand your reading sources.
                    The app also provides a basic book source plugin (currently only supports Chinese web novels).
                  </Translate>
                </p>
              }
              reverse={true}
            />
            <Feature
              imgUrl="img/ai.svg"
              title={<Translate id="home.ai">AI Copilot</Translate>}
              description={
                <p>
                  <Translate id="home.ai.1">
                    The Reader Copilot works closely with the Richasy Assistant,
                    you can configure your AI key in the Richasy Assistant,
                    and the Reader Copilot will be able to use the AI function to provide you with machine translation,
                    neural speech, semantic query and other functions
                  </Translate>
                </p>
              }
            />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
