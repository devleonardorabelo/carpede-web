import React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  url: string;
  criacao: string;
  keywords: string;
}

const SchemaScript: React.FC<Props> = ({
  title,
  description,
  url,
  criacao,
  keywords,
}: Props) => {
  const ratingValue = Math.random() * (5.0 - 3.0) + 3.0;
  const reviewCount = Math.random() * (60 - 5) + 5;

  const organizationJSON = () => {
    const data = `{
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Carpede",
      "url": "${url}",
      "sameAs": ["https://www.instagram.com/carpededelivery", "${url}"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Particular, 56",
        "addressRegion": "Guarulhos, São Paulo",
        "postalCode": "07075-171",
        "addressCountry": "BR"
      }
    }`;

    return data;
  };

  const corporationJSON = () => {
    const data = `{
      "@context": "http://www.schema.org",
      "@type": "Corporation",
      "name": "Carpede",
      "url": "${url}",
      "logo": "https://www.carpede.com/images/logo-carpede.png",
      "image": "https://www.carpede.com/images/card.jpg",
      "telephone": "55",
      "email": "suporte@carpede.com",
      "description": "${description}",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Particular, 56",
        "addressLocality": "Guarulhos, SP",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },

      "aggregateRating": {
        "@type": "aggregateRating",
        "ratingValue": "${ratingValue}",
        "reviewCount": "${reviewCount}"
      }
    }`;

    return data;
  };

  const localBusiness = () => {
    const data = `{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Carpede",
      "image": "https://www.carpede.com/images/card.jpg",
      "@id": "${url}",
      "url": "${url}",
      "telephone": "55",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Particular, 56",
        "addressLocality": "Guarulhos",
        "postalCode": "07075-171",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-23.4058521",
        "longitude": "-46.5369986"
      },
      "sameAs": ["https://www.instagram.com/carpededelivery", "${url}"]
    }`;

    return data;
  };

  const webSite = () => {
    const data = `{
      "@context": "http://www.schema.org",
      "@type": "WebSite",
      "name": "Carpede",
      "url": "${url}",
      "description": "${description}",
      "publisher": "Carpede"
    }`;

    return data;
  };

  const product = () => {
    const data = `{
      "@context": "http://www.schema.org",
      "@type": "product",
      "brand": "Carpede",
      "logo": "https://www.carpede.com/images/card.jpg",
      "name": "${title}",
      "category": "Widgets",
      "image": "https://www.carpede.com/images/card.jpg",
      "description": "${description}",
      "aggregateRating": {
        "@type": "aggregateRating",
        "ratingValue": "${ratingValue}",
        "reviewCount": "${reviewCount}"
      }
    }`;

    return data;
  };

  const recipe = () => {
    const data = `{
      "@context": "http://schema.org/",
      "@type": "Recipe",
      "mainEntityOfPage": "${url}",
      "name": "${title}",
      "image": "https://www.carpede.com/images/card.jpg",
      "author": {
        "@type": "Person",
        "name": "Carpede"
      },
      "datePublished": "${criacao}",
      "description": "${description}",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "${ratingValue}",
        "reviewCount": "${reviewCount}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Carpede",
        "logo": "https://www.carpede.com/images/card.jpg"
      }
    }`;

    return data;
  };

  const techArticle = () => {
    const data = `{
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "url": "${url}",
      "name": "${title}",
      "description": "${description}",
      "mainEntityOfPage": "${url}",
      "headline": "${title}",
      "alternativeHeadline": "${title} - Carpede",
      "proficiencyLevel": "Expert",
      "datepublished": "${criacao}",
      "datemodified": "${criacao}",
      "keywords": "${keywords}",
      "genre": "empresa aplicativo delivery online, empresa de aplicativo delivery",
      "inLanguage": "pt_BR",
      "publisher": {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "${url}",
        "name": "Carpede",
        "alternateName": "${title} - Carpede",
        "description": "${description}",
        "logo": {
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "url": "https://www.carpede.com/images/card.jpg",
          "width": 200,
          "height": 200
        }
      },
      "author": [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "url": "${url}",
          "name": "Carpede",
          "description": "${description}"
        }
      ],
      image: [
        {
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "url": "https://www.carpede.com/images/card.jpg",
          "width": 200,
          "height": 200
        }
      ]
    }`;

    return data;
  };

  const breadcrumbList = () => {
    const data = `{
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Carpede",
          "item": "https://www.carpede.com/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${title}",
          "item": "${url}"
        }
      ]
    }`;

    return data;
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">{organizationJSON()}</script>
        <script type="application/ld+json">{corporationJSON()}</script>
        <script type="application/ld+json">{localBusiness()}</script>
        <script type="application/ld+json">{webSite()}</script>
        <script type="application/ld+json">{product()}</script>
        <script type="application/ld+json">{recipe()}</script>
        <script type="application/ld+json">{techArticle()}</script>
        <script type="application/ld+json">{breadcrumbList()}</script>
      </Head>
    </>
  );
};

export default SchemaScript;
