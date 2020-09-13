import React from 'react';

export default SchemaScript = ({ title, description, url, criacao, keywords }) => {
  let ratingValue = Math.random() * (5.0 - 3.0) + 3.0;
  let reviewCount = Math.random() * (60 - 5) + 5;

  const organizationJSON = () => {
    let data = {
      "@context" : "http://schema.org",
      "@type" : "Organization",
      "name" : "Carpede",
      "url" : `"${url}"`,
      "sameAs" : [
        "https://www.instagram.com/carpededelivery",
        `"${url}"`,
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Particular, 56",
        "addressRegion": "Guarulhos, São Paulo",
        "postalCode": "07075-171",
        "addressCountry": "BR"
      }
    };

    return JSON.stringify(data);
  }

  const corporationJSON = () => {
    let data = {
      "@context": "http://www.schema.org",
			"@type": "Corporation",
			"name": "Carpede",
			"url": `"${url}"`,
			"logo": "https://www.carpede.com/images/logo-carpede.png",
			"image": "https://www.carpede.com/images/card.jpg",
			"telephone": "55",
			"email": "suporte@carpede.com",
			"description": `"${description}"`,
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Rua Particular, 56",
				"addressLocality": "Guarulhos, SP",
				"addressRegion": "SP",
				"addressCountry": "BR"
			},
		
			"aggregateRating": {
				"@type": "aggregateRating",
				"ratingValue": `"${ratingValue}"`,
				"reviewCount": `"${reviewCount}"`,
			}
    };

    return JSON.stringify(data);
  }

  const localBusiness = () => {
    let data = {
      "@context": "https://schema.org",
		  "@type": "LocalBusiness",
		  "name": "Carpede",
		  "image": "https://www.carpede.com/images/card.jpg",
		  "@id": `"${url}"`,
		  "url": `"${url}"`,
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
		  "sameAs": [
        "https://www.instagram.com/carpededelivery",
        `"${url}"`,
      ]
    };

    return JSON.stringify(data);
  }

  const webSite = () => {
    let data = {
      "@context": "http://www.schema.org",
			"@type": "WebSite",
			"name": "Carpede",
			"url": `"${url}"`,
			"description": `"${description}"`,
			"publisher": "Carpede"
    }

    return JSON.stringify(data);
  }

  const product = () => {
    let data = {
      "@context": "http://www.schema.org",
			"@type": "product",
			"brand": "Carpede",
			"logo": "https://www.carpede.com/images/card.jpg",
			"name": `"${title}"`,
			"category": "Widgets",
			"image": "https://www.carpede.com/images/card.jpg",
			"description": `"${description}"`,
			"aggregateRating": {
				"@type": "aggregateRating",
				"ratingValue": `"${ratingValue}"`,
				"reviewCount": `"${reviewCount}"`
      }
    }

    return JSON.stringify(data);
  }

  const recipe = () => {
    let data = {
      "@context": "http://schema.org/",
			"@type": "Recipe",
			"mainEntityOfPage": `"${url}"`,
			"name": `"${title}"`,
			"image": "https://www.carpede.com/images/card.jpg",
			"author": {
				"@type":"Person",
				"name":"Carpede"
			},
			"datePublished": `"${criacao}"`,
			"description": `"${description}"`,
			"aggregateRating": {
				"@type": "AggregateRating",
				"ratingValue": `"${ratingValue}"`,
				"reviewCount": `"${reviewCount}"`
			},
			"publisher": {
				"@type": "Organization",
				"name": "Carpede",
				"logo": "https://www.carpede.com/images/card.jpg"
			}
    }

    return JSON.stringify(data);
  }

  const techArticle = () => {
    let data = {
      "@context": "https://schema.org",
		  "@type": "TechArticle",
		  "url": `"${url}"`,
		  "name": `"${title}"`,
		  "description": `"${description}"`,
		  "mainEntityOfPage": `"${url}"`,
		  "headline": `"${title}"`,
		  "alternativeHeadline": `"${title} - Carpede"`,
		  "proficiencyLevel": "Expert",
		  "datepublished": `"${criacao}"`,
    	"datemodified": `"${criacao}"`,
    	"keywords": `"${keywords}"`,
    	"genre": "empresa aplicativo delivery online, empresa de aplicativo delivery",
		  "inLanguage": "pt_BR",
		  "publisher": {
		      "@context": "https://schema.org",
		      "@type": "Organization",
		      "url": `"${url}"`,
		      "name": "Carpede",
		      "alternateName": `"${title} - Carpede"`,
		      "description": `"${description}"`,
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
		          "url": `"${url}"`,
		          "name": "Carpede",
		          "description": `"${description}"`
		      }
		  ],
		  "image": [
		      {
		          "@context": "https://schema.org",
		          "@type": "ImageObject",
		          "url": "https://www.carpede.com/images/card.jpg",
		          "width": 200,
		          "height": 200
		      }
		  ]
    }

    return JSON.stringify(data);
  }

  const breadcrumbList = () => {
    let data = {
      "@context": "https://schema.org/",
			"@type": "BreadcrumbList",
			"itemListElement": [{
				"@type": "ListItem",
				"position": 1, 
				"name": "Carpede",
				"item": "https://www.carpede.com/"
			},{
				"@type": "ListItem",
				"position": 3,
				"name": `"${title}"`,
				"item": `"${url}"`
			}]
    }

    return JSON.stringify(data);
  }

  return (
    <>
      <Helmet>
        <script className='structured-data-list' type="application/ld+json">{organizationJSON}</script>
      </Helmet>
      <Helmet>
        <script className='structured-data-list' type="application/ld+json">{corporationJSON}</script>
      </Helmet>
      <Helmet>
        <script className='structured-data-list' type="application/ld+json">{corporationJSON}</script>
      </Helmet>
      <Helmet>
        <script className='structured-data-list' type="application/ld+json">{localBusiness}</script>
      </Helmet>
      <Helmet>
        <script className='structured-data-list' type="application/ld+json">{webSite}</script>
      </Helmet>
      <Helmet>
        <script className='structured-data-list' type="application/ld+json">{product}</script>
      </Helmet>
			<Helmet>
        <script className='structured-data-list' type="application/ld+json">{recipe}</script>
      </Helmet>
      <Helmet>
        <script className='structured-data-list' type="application/ld+json">{techArticle}</script>
      </Helmet>
      <Helmet>
        <script className='structured-data-list' type="application/ld+json">{breadcrumbList}</script>
      </Helmet>
    </>
  )
}