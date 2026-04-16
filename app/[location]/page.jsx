import Clientlocation from "./Clientlocation";
import { notFound } from "next/navigation";


const cities = [
  "Ajmer","Aligarh","Ambala","Ayodhya","Alwar","Bahadurgarh","Bareilly","Bathinda",
  "Bengaluru","Bharatpur","Bhiwani","Bhiwadi","Bhopal","Bhubaneswar","Bihar","Bikaner",
  "Bulandshahr","Chandigarh","Chennai","Chhattisgarh","Daman","Dehradun","Delhi",
  "Delhi NCR","Faizabad","Faridabad","Gandhinagar","Ghaziabad","Goa","Greater Noida",
  "Gujarat","Gurdaspur","Gurgaon","Guwahati","Gwalior","Hardoi","Haridwar","Haryana",
  "Himachal Pradesh","Hoshiarpur","Howrah","Hooghly","Hyderabad","Indore","Jabalpur",
  "Jaipur","Jammu & Kashmir","Jhajjar","Jhansi","Jharkhand","Jind","Jodhpur","Kanpur",
  "Kapurthala","Karnal","Karnataka","Kerala","Kolkata","Kota","Kundli","Kurukshetra",
  "Leh","Lucknow","Ludhiana","Madhya Pradesh","Madurai","Maharashtra","Manali",
  "Manesar","Mathura","Meerut","Mohali","Moradabad","Mumbai","Murshidabad",
  "Muzaffarpur","Nadia","Nagpur","Noida","Odisha","Panipat","Panchkula","Patiala",
  "Patna","Puducherry (Pondicherry)","Pune","Punjab","Raipur","Rajasthan","Rajkot",
  "Ranchi","Rewari","Rohtak","Roorkee","Rudrapur","Shahjahanpur","Shimla","Sikkim",
  "Sirsa","Sonipat","Srinagar","Surat","Tamil Nadu","Telangana","Thiruvananthapuram",
  "Uttar Pradesh","Uttarakhand","Vadodara","Varanasi","West Bengal","Yamuna Nagar",
  "Ahmedabad","Vishakhapatnam","Agra","Gurugram","Jalandhar","Amritsar","Coimbatore",
  "Tiruchirappalli","Kozhikode","Kochi","Madgaon","Nashik","Aurangabad","Udaipur",
  "Jammu","Dhanbad","Jamshedpur","Rourkela","Bhilai","Bokaro","Prayagraj","Gorakhpur",
  "Agartala","Shillong","Imphal","Aizawl","Dimapur","Bilaspur","Ujjain","Rajahmundry",
  "Tirupati","Salem","Warangal","Vijayawada","Amaravati","Mysore","Thane","Navi Mumbai",
  "Panvel","Kolhapur","Jalgaon","Bhavnagar","Bhiwandi","Kalyan","Tirunelveli","Sikar",
  "Erode","Hubballi-Dharwad","Belgaum"
];

/* ✅ CONSTANT PREFIX (LOWERCASE) */
const PREFIX = "bar-bending-machine-supplier-in";

/* ✅ SLUG FUNCTION (IMPORTANT) */
const formatCity = (city) =>
  city
    .toLowerCase()
    .trim()
    .replaceAll(" & ", "-and-")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll(" ", "-");

/* ✅ PRE-COMPUTED SLUG LIST */
const citySlugs = cities.map(formatCity);

/* ================= METADATA ================= */
export async function generateMetadata({ params }) {
  const { location } = await params;

  if (!location?.startsWith(PREFIX)) {
    return {
      title: "Page Not Found",
      description: "Invalid page",
    };
  }

  const citySlug = location.replace(`${PREFIX}-`, "");

  if (!citySlugs.includes(citySlug)) {
    return {
      title: "Page Not Found",
      description: "Invalid page",
    };
  }

  const cityName = cities[citySlugs.indexOf(citySlug)];

  return {
    title: `Bar Bending Machine Supplier in ${cityName} | Shree Shakti Infratech`,
    description: `Looking for bar bending machine supplier in ${cityName}? High quality machines with fast delivery.`,
  };
}

/* ================= PAGE ================= */
export default async function Page({ params }) {
  const { location } = await params;

  if (!location?.startsWith(PREFIX)) {
    notFound();
  }

  const citySlug = location.replace(`${PREFIX}-`, "");

  if (!citySlugs.includes(citySlug)) {
    notFound();
  }

  return <Clientlocation location={location} />;
}