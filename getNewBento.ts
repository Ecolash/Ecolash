const apiUrl = "https://opbento.vercel.app/api/bento?n=Tuhin%20Mondal&g=Ecolash&x=Tuhin_011&l=tuhin018&i=https%3A%2F%2Fraw.githubusercontent.com%2FEcolash%2FEcolash%2Frefs%2Fheads%2Fmain%2FImages%2Fbanner-pic.png&p=&z=2666d";

interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string | null> => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return null;
    }

    const data: BentoResponse = await response.json();
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    return null;
  }
};

fetchBentoUrl(apiUrl);
