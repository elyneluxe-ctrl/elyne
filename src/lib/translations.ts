export interface Translations {
  nav: {
    men: string;
    boys: string;
    collections: string;
    ourStory: string;
    contact: string;
    currency: string;
    langToggle: string;
    searchPlaceholder: string;
    searchLabel: string;
    accountLabel: string;
    bagLabel: string;
    tagline: string;
  };
  megaMenu: {
    moroccanHooded: string;
    moroccanNoHood: string;
    moroccanHalfSleeve: string;
    emiratiThobes: string;
    halfSleeveThobes: string;
    kidsThobes: string;
    newArrivals: string;
    bestSellers: string;
    premiumThobes: string;
    modernThobes: string;
    thasbihRing: string;
    viewAll: string;
    featuredPiece: string;
    handTailoredEmirati: string;
  };
  hero: {
    brandName: string;
    tagline: string;
    headlinePart1: string;
    headlinePart2: string;
    subtitle: string;
    cta: string;
    scrollText: string;
  };
  brandIntro: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    paragraph: string;
  };
  collections: {
    menBadge: string;
    menEyebrow: string;
    menTitle: string;
    menDesc: string;
    menCta: string;
    boysBadge: string;
    boysEyebrow: string;
    boysTitle: string;
    boysDesc: string;
    boysCta: string;
  };
  kids: {
    eyebrow: string;
    title: string;
    desc: string;
    cta: string;
    features: {
      comfort: string;
      comfortDesc: string;
      tailoring: string;
      tailoringDesc: string;
      tradition: string;
      traditionDesc: string;
    };
  };
  bestSellers: {
    eyebrow: string;
    title: string;
    subtitle: string;
    quickView: string;
    addToBag: string;
    colors: string;
  };
  craftsmanship: {
    eyebrow: string;
    title: string;
    desc: string;
    pillars: {
      collar: { title: string; desc: string };
      stitching: { title: string; desc: string };
      fabric: { title: string; desc: string };
      cuff: { title: string; desc: string };
    };
  };
  campaign: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    desc: string;
    cta: string;
  };
  newsletter: {
    eyebrow: string;
    title: string;
    desc: string;
    placeholder: string;
    button: string;
    disclaimer: string;
  };
  footer: {
    tagline: string;
    shop: string;
    about: string;
    customerCare: string;
    connect: string;
    shipping: string;
    returns: string;
    privacy: string;
    terms: string;
    rightsReserved: string;
    region: string;
  };
  cart: {
    title: string;
    empty: string;
    emptyDesc: string;
    startShopping: string;
    subtotal: string;
    checkout: string;
    shippingNote: string;
    remove: string;
    qty: string;
  };
  search: {
    title: string;
    placeholder: string;
    suggestions: string;
    trending: string[];
    noResults: string;
  };
  ourStory: {
    heroEyebrow: string;
    heroTitle: string;
    heroDesc: string;
    heroCta: string;
    heritageEyebrow: string;
    heritageTitle: string;
    heritageDesc: string;
    pillars: {
      fabrics: { title: string; desc: string };
      craft: { title: string; desc: string };
      comfort: { title: string; desc: string };
      style: { title: string; desc: string };
    };
    philosophyEyebrow: string;
    philosophyTitle: string;
    philosophyDesc: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    desc: string;
    form: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      submit: string;
      success: string;
    };
    conciergeTitle: string;
    hoursTitle: string;
    hoursDesc: string;
    locationTitle: string;
    locationDesc: string;
  };
}

export const translations: Record<"EN" | "AR", Translations> = {
  EN: {
    nav: {
      men: "MEN",
      boys: "BOYS",
      collections: "COLLECTIONS",
      ourStory: "OUR STORY",
      contact: "CONTACT",
      currency: "AED",
      langToggle: "العربية",
      searchPlaceholder: "Search collections...",
      searchLabel: "Search",
      accountLabel: "Account",
      bagLabel: "Bag",
      tagline: "A SIGNATURE OF ELEGANCE"
    },
    megaMenu: {
      moroccanHooded: "Moroccan Hooded Thobes",
      moroccanNoHood: "Moroccan Thobes Without Hood",
      moroccanHalfSleeve: "Moroccan Half-Sleeve Thobes",
      emiratiThobes: "Emirati Thobes",
      halfSleeveThobes: "Half-Sleeve Thobes",
      kidsThobes: "Kids' Thobes",
      newArrivals: "New Arrivals",
      bestSellers: "Best Sellers",
      premiumThobes: "Premium Thobes",
      modernThobes: "Modern Thobes",
      thasbihRing: "Thasbih Ring",
      viewAll: "VIEW ALL",
      featuredPiece: "FEATURED ATELIER PIECE",
      handTailoredEmirati: "Hand-tailored in Dubai with pure Toyobo Japanese fabric"
    },
    hero: {
      brandName: "ELYNE LUXE",
      tagline: "A SIGNATURE OF ELEGANCE",
      headlinePart1: "HERITAGE MEETS",
      headlinePart2: "MODERN ELEGANCE",
      subtitle: "The definitive Emirati Kandura, meticulously hand-tailored with generational artisanship and contemporary refinement.",
      cta: "DISCOVER THE COLLECTION",
      scrollText: "SCROLL TO DISCOVER"
    },
    brandIntro: {
      eyebrow: "THE SARTORIAL PHILOSOPHY",
      headlinePart1: "HERITAGE MEETS",
      headlinePart2: "MODERN ELEGANCE.",
      paragraph: "ELYNE LUXE brings traditional Emirati craftsmanship together with contemporary tailoring, offering exceptional quality, lasting comfort, and timeless style for every generation."
    },
    collections: {
      menBadge: "MEN'S ATELIER",
      menEyebrow: "SIGNATURE COUTURE",
      menTitle: "MEN",
      menDesc: "Tailored Emirati Kanduras crafted for timeless distinction and effortless comfort.",
      menCta: "EXPLORE MEN",
      boysBadge: "JUNIOR ATELIER",
      boysEyebrow: "NEXT GENERATION",
      boysTitle: "BOYS",
      boysDesc: "Refined heritage silhouettes thoughtfully designed for young gentlemen.",
      boysCta: "EXPLORE BOYS"
    },
    kids: {
      eyebrow: "LITTLE GENTLEMEN",
      title: "MINIATURE ELEGANCE",
      desc: "Designed with the same artisanal precision as our men's collection, our boys' Kanduras embody Emirati grace, softness, and durability for cherished family occasions.",
      cta: "SHOP BOYS' COLLECTION",
      features: {
        comfort: "ULTRA-SOFT TEXTILES",
        comfortDesc: "Hypoallergenic, breathable weaves crafted for all-day playful comfort.",
        tailoring: "ARTISANAL PROPORTIONS",
        tailoringDesc: "Cut specifically for ease of movement with traditional Tarboosh detailing.",
        tradition: "SHARED HERITAGE",
        traditionDesc: "Matching father-and-son aesthetics celebrating timeless family legacy."
      }
    },
    bestSellers: {
      eyebrow: "CURATED SELECTION",
      title: "OUR BEST SELLERS",
      subtitle: "The signature silhouettes preferred by discerning gentlemen across the United Arab Emirates and the Gulf.",
      quickView: "QUICK VIEW",
      addToBag: "ADD TO BAG",
      colors: "Colors Available"
    },
    craftsmanship: {
      eyebrow: "EXQUISITE ARTISANSHIP",
      title: "DETAILS DEFINE ELEGANCE",
      desc: "Every ELYNE LUXE Kandura requires over 14 hours of master cutting, single-needle precision stitching, and hand-finished finishing.",
      pillars: {
        collar: {
          title: "STAND COLLAR",
          desc: "Architecturally structured with soft internal fusing for comfortable all-day hold."
        },
        stitching: {
          title: "SINGLE-NEEDLE STITCH",
          desc: "Ultra-fine seam density engineered for clean, invisible lines and durability."
        },
        fabric: {
          title: "JAPANESE TOYOBO",
          desc: "Silky-smooth, breathable cotton blends selected for fluid drape and wrinkle resistance."
        },
        cuff: {
          title: "FRENCH & TRADITIONAL CUFFS",
          desc: "Finished with bespoke mother-of-pearl buttons and discreet hand-turned hems."
        }
      }
    },
    campaign: {
      eyebrow: "2026 COUTURE CAMPAIGN",
      titlePart1: "TIMELESS BY",
      titlePart2: "TRADITION",
      desc: "Captured amidst the architectural harmony of modern sandstone arches and Dubai desert light.",
      cta: "EXPLORE THE CAMPAIGN"
    },
    newsletter: {
      eyebrow: "VIP ATELIER ACCESS",
      title: "JOIN THE ELYNE LUXE CIRCLE",
      desc: "Receive private invitations to seasonal releases, bespoke sizing trunk shows, and editorial previews.",
      placeholder: "Enter your email address...",
      button: "SUBSCRIBE",
      disclaimer: "By subscribing you accept our Privacy Policy. Unsubscribe anytime."
    },
    footer: {
      tagline: "Heritage meets modern elegance.",
      shop: "SHOP",
      about: "ABOUT",
      customerCare: "CUSTOMER CARE",
      connect: "CONNECT WITH US",
      shipping: "Shipping & Delivery",
      returns: "Returns & Exchanges",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      rightsReserved: "All rights reserved.",
      region: "UAE | AED"
    },
    cart: {
      title: "YOUR SHOPPING BAG",
      empty: "YOUR BAG IS EMPTY",
      emptyDesc: "Explore our signature collection of handcrafted Emirati Kanduras.",
      startShopping: "START SHOPPING",
      subtotal: "SUBTOTAL",
      checkout: "PROCEED TO CHECKOUT",
      shippingNote: "Complimentary courier delivery across the United Arab Emirates.",
      remove: "Remove",
      qty: "Qty"
    },
    search: {
      title: "SEARCH THE ATELIER",
      placeholder: "Search Kanduras, fabrics, or accessories...",
      suggestions: "POPULAR SEARCHES",
      trending: ["Classic White Kandura", "Moroccan Hooded Thobe", "Boys Sand Beige", "Toyobo Fabric Thobe"],
      noResults: "No results found matching your inquiry."
    },
    ourStory: {
      heroEyebrow: "OUR STORY",
      heroTitle: "A SIGNATURE OF ELEGANCE",
      heroDesc: "Rooted in Emirati heritage and crafted for today, ELYNE LUXE redefines the Kandura with a modern perspective, honouring tradition while embracing contemporary style.",
      heroCta: "EXPLORE OUR COLLECTION",
      heritageEyebrow: "OUR HERITAGE",
      heritageTitle: "HERITAGE MEETS MODERN ELEGANCE",
      heritageDesc: "At ELYNE LUXE, we preserve the timeless essence of Emirati tradition while bringing a refined, modern touch to men's and boys' Kanduras. Every piece reflects our commitment to quality, craftsmanship and enduring style.",
      pillars: {
        fabrics: {
          title: "PREMIUM FABRICS",
          desc: "Carefully selected for superior quality and comfort."
        },
        craft: {
          title: "EXPERT CRAFTSMANSHIP",
          desc: "Precision tailoring with refined finishing."
        },
        comfort: {
          title: "LASTING COMFORT",
          desc: "Designed for effortless wear, every day."
        },
        style: {
          title: "TIMELESS STYLE",
          desc: "A modern expression of Emirati tradition."
        }
      },
      philosophyEyebrow: "OUR PHILOSOPHY",
      philosophyTitle: "TRADITION IN EVERY DETAIL",
      philosophyDesc: "More than clothing, our Kanduras represent identity, pride and a way of life — thoughtfully designed for today and for generations to come."
    },
    contact: {
      eyebrow: "ATELIER CONCIERGE",
      title: "CONNECT WITH ELYNE LUXE",
      desc: "Our private tailoring specialists and client concierge are at your service for sizing inquiries, bespoke orders, and luxury gifting.",
      form: {
        name: "FULL NAME",
        email: "EMAIL ADDRESS",
        phone: "PHONE NUMBER",
        subject: "SUBJECT",
        message: "MESSAGE",
        submit: "SEND INQUIRY",
        success: "Thank you. An ELYNE LUXE atelier specialist will contact you shortly."
      },
      conciergeTitle: "PRIVATE CLIENT ADVISOR",
      hoursTitle: "ATELIER HOURS",
      hoursDesc: "Monday – Saturday: 10:00 AM – 10:00 PM (GST)",
      locationTitle: "FLAGSHIP LOCATION",
      locationDesc: "Dubai Design District (d3), United Arab Emirates"
    }
  },
  AR: {
    nav: {
      men: "رجال",
      boys: "أولاد",
      collections: "التشكيلات",
      ourStory: "قصتنا",
      contact: "تواصل معنا",
      currency: "د.إ",
      langToggle: "English",
      searchPlaceholder: "ابحث في التشكيلات الفاخرة...",
      searchLabel: "بحث",
      accountLabel: "حسابي",
      bagLabel: "الحقيبة",
      tagline: "بصمة الأناقة"
    },
    megaMenu: {
      moroccanHooded: "كنادير مغربية بطاقية",
      moroccanNoHood: "كنادير مغربية بدون طاقية",
      moroccanHalfSleeve: "كنادير مغربية نصف كم",
      emiratiThobes: "كنادير إماراتية أصيلة",
      halfSleeveThobes: "كنادير نصف كم",
      kidsThobes: "كنادير للأولاد",
      newArrivals: "وصل حديثاً",
      bestSellers: "الأكثر طلباً",
      premiumThobes: "كنادير فاخرة",
      modernThobes: "كنادير عصرية",
      thasbihRing: "خاتم التسبيح الذكي",
      viewAll: "عرض كافة التصاميم",
      featuredPiece: "إصدار الأتيليه الحصري",
      handTailoredEmirati: "خياطة يدوية في دبي باستخدام أرقى أقمشة التويوبو اليابانية"
    },
    hero: {
      brandName: "إيلين لوكس",
      tagline: "بصمة الأناقة",
      headlinePart1: "أصالة تلتقي",
      headlinePart2: "بالأناقة العصرية",
      subtitle: "الكندورة الإماراتية الراقية، مفصلة بإتقان وحرفية تتوارثها الأجيال برؤية معاصرة استثنائية.",
      cta: "اكتشف التشكيلة",
      scrollText: "اسحب للاكتشاف"
    },
    brandIntro: {
      eyebrow: "فلسفة الخياطة الراقية",
      headlinePart1: "أصالة تلتقي",
      headlinePart2: "بالأناقة العصرية.",
      paragraph: "تجمع إيلين لوكس بين الحرفية الإماراتية المتوارثة والتفصيل المعاصر، لتقدم جودة استثنائية وراحة تدوم وأناقة خالدة لكل جيل."
    },
    collections: {
      menBadge: "أتيليه الرجال",
      menEyebrow: "خياطة متميزة",
      menTitle: "رجال",
      menDesc: "كنادير إماراتية مفصلة بعناية لتمنحك حضوراً رفيعاً وراحة تدوم طوال اليوم.",
      menCta: "استكشف تشكيلة الرجال",
      boysBadge: "أتيليه الفرسان",
      boysEyebrow: "جيل الغد",
      boysTitle: "أولاد",
      boysDesc: "تصاميم أصيلة ومريحة صُممت بعناية لتناسب أناقة فرسان الغد الصغار.",
      boysCta: "استكشف تشكيلة الأولاد"
    },
    kids: {
      eyebrow: "الفرسان الصغار",
      title: "أناقة تليق بالجيل القادم",
      desc: "صُممت كنادير الأولاد بنفس دقة وحرفية تشكيلة الرجال، لتجسد الفخامة الإماراتية برقة وأقمشة ناعمة تلائم بهجة المناسبات العائلية.",
      cta: "تسوق تشكيلة الأولاد",
      features: {
        comfort: "أقمشة فائقة النعومة",
        comfortDesc: "حياكة خفيفة تسمح بمرور الهواء وتضمن الراحة التامة طوال اليوم.",
        tailoring: "تفصيل مريح وحركي",
        tailoringDesc: "قَصّات خاصة تسهل الحركة مع تفاصيل الطربوش الإماراتي الأصيل.",
        tradition: "توارث الأناقة",
        traditionDesc: "تناغم مثالي بين إطلالة الأب والابن للاحتفاء بروابط العائلة الأصيلة."
      }
    },
    bestSellers: {
      eyebrow: "مختارات فاخرة",
      title: "الأكثر طلباً وتميزاً",
      subtitle: "التصاميم الأكثر تفضيلاً واختياراً لدى رواد الذوق الرفيع في دولة الإمارات والخليج العربي.",
      quickView: "نظرة سريعة",
      addToBag: "أضف إلى الحقيبة",
      colors: "ألوان متوفرة"
    },
    craftsmanship: {
      eyebrow: "حرفية متوارثة",
      title: "التفاصيل تصنع الفخامة",
      desc: "تتطلب كل كندورة من إيلين لوكس أكثر من 14 ساعة عمل من القص المتقن والخياطة بالإبرة الفردية واللمسات اليدوية الماهرة.",
      pillars: {
        collar: {
          title: "الياقة القائمة",
          desc: "بنية هندسية متوازنة مع بطانة داخلية ناعمة تحافظ على استقامتها براحة مطلقة."
        },
        stitching: {
          title: "خياطة الإبرة الفردية",
          desc: "كثافة غرز دقيقة للغاية تمنح الحواف مظهراً انسيابياً ومتانة استثنائية."
        },
        fabric: {
          title: "أقمشة تويوبو اليابانية",
          desc: "خلطات قطنية حريرية فائقة النعومة ومقاومة للتجعد مع انسيابية ملكية."
        },
        cuff: {
          title: "الأكمام الفرنسية والتقليدية",
          desc: "مُحلاة بأزرار صدفية طبيعية متلألئة وحواشٍ مطوية بحرفية يدوية بارعة."
        }
      }
    },
    campaign: {
      eyebrow: "حملة أزياء 2026 الفاخرة",
      titlePart1: "أصالة تتوارثها",
      titlePart2: "الأجيال",
      desc: "صُوّرت في قلب العمارة الإماراتية المعاصرة وتناغم الأقواس مع أشعة شمس دبي الذهبية.",
      cta: "شاهد الحملة الكاملة"
    },
    newsletter: {
      eyebrow: "عضوية الأتيليه الخاصة",
      title: "انضم إلى نخبة إيلين لوكس",
      desc: "احصل على دعوات حصرية للاطلاع على التشكيلات الموسمية وعروض التفصيل المخصص ومستجدات الدار.",
      placeholder: "أدخل بريدك الإلكتروني...",
      button: "اشتراك",
      disclaimer: "باشتراكك توافق على سياسة الخصوصية الخاصة بنا. يمكنك إلغاء الاشتراك في أي وقت."
    },
    footer: {
      tagline: "أصالة تلتقي بالأناقة العصرية.",
      shop: "التسوق",
      about: "عن الدار",
      customerCare: "خدمة العملاء",
      connect: "تواصل معنا",
      shipping: "الشحن والتوصيل",
      returns: "الاستبدال والاسترجاع",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      rightsReserved: "جميع الحقوق محفوظة.",
      region: "الإمارات | د.إ"
    },
    cart: {
      title: "حقيبة التسوق الخاصة بك",
      empty: "حقيبتك فارغة حالياً",
      emptyDesc: "استكشف تشكيلاتنا الفاخرة من الكنادير الإماراتية المفصلة بحرفية يدوية.",
      startShopping: "ابدأ التسوق",
      subtotal: "المجموع الفرعي",
      checkout: "متابعة إتمام الطلب",
      shippingNote: "توصيل سريع مجاني لجميع مناطق دولة الإمارات العربية المتحدة.",
      remove: "إزالة",
      qty: "الكمية"
    },
    search: {
      title: "ابحث في الأتيليه",
      placeholder: "ابحث عن الكنادير، الأقمشة، أو الملحقات...",
      suggestions: "عمليات البحث الشائعة",
      trending: ["كندورة بيضاء كلاسيكية", "كندورة مغربية بطاقية", "كندورة أولاد بيج رملي", "كندورة قماش تويوبو"],
      noResults: "لم يتم العثور على نتائج تطابق استفسارك."
    },
    ourStory: {
      heroEyebrow: "قصتنا",
      heroTitle: "بصمة الأناقة",
      heroDesc: "متجذرة في التراث الإماراتي ومصممة للحاضر، تعيد إيلين لوكس صياغة الكندورة برؤية عصرية تحتفي بالأصالة وتعانق الأناقة الراقية.",
      heroCta: "استكشف التشكيلة",
      heritageEyebrow: "تراثنا العريق",
      heritageTitle: "أصالة تلتقي بالأناقة العصرية",
      heritageDesc: "في إيلين لوكس، نحافظ على الجوهر الخالد للتراث الإماراتي مع إضفاء لمسة راقية ومعاصرة على كنادير الرجال والأولاد. كل قطعة تعكس التزامنا الأبدي بالجودة والحرفية والأناقة الخالدة.",
      pillars: {
        fabrics: {
          title: "أقمشة فاخرة",
          desc: "منتقاة بعناية بالغة لتوفير أعلى درجات الجودة والراحة."
        },
        craft: {
          title: "حرفية متقنة",
          desc: "تفصيل هندسي فائق الدقة بلمسات نهائية رفيعة المستوى."
        },
        comfort: {
          title: "راحة تدوم",
          desc: "مُصممة لتمنحك ارتداءً سهلاً وانسيابياً في كل لحظة."
        },
        style: {
          title: "أناقة خالدة",
          desc: "تعبير عصري راقٍ ينبض بجوهر التراث الإماراتي."
        }
      },
      philosophyEyebrow: "فلسفتنا",
      philosophyTitle: "الأصالة في أدق التفاصيل",
      philosophyDesc: "أكثر من مجرد رداء، تمثل كناديرنا الهوية والاعتزاز وأسلوب حياة متفرداً — صُممت بعناية للحاضر وللأجيال القادمة."
    },
    contact: {
      eyebrow: "خدمة كبار العملاء",
      title: "تواصل مع إيلين لوكس",
      desc: "مستشارو الخياطة الخاصة وخدمة العملاء في خدمتكم للإجابة على استفسارات المقاسات، والطلبات الخاصة، والهدايا الفاخرة.",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        subject: "الموضوع",
        message: "الرسالة",
        submit: "إرسال الاستفسار",
        success: "شكراً لك. سيتواصل معك أحد مستشاري إيلين لوكس قريباً."
      },
      conciergeTitle: "مستشار الخياطة الخاصة",
      hoursTitle: "أوقات العمل في الأتيليه",
      hoursDesc: "من الإثنين إلى السبت: 10:00 صباحاً – 10:00 مساءً (توقيت الإمارات)",
      locationTitle: "الموقع الرئيسي",
      locationDesc: "حي دبي للتصميم (d3)، دولة الإمارات العربية المتحدة"
    }
  }
};

export function getTranslations(lang: "EN" | "AR"): Translations {
  return translations[lang] || translations.EN;
}
