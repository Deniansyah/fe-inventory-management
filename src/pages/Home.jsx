import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Banner from "../assets/image/home/banner.jpg"

import { useSelector } from "react-redux";

const Home = () => {
  const currentPath = window.location.pathname;
  const auth = useSelector((state) => state.auth)
  console.log(auth);

  return (
    <div className="bg-gray-200 relative">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <div className="flex">
        {/* side navbar */}
        <SideBar path={currentPath} />
        {/* Main Section */}
        <div className="ml-24 mt-20 p-10 basis-[93%]">
          <h1 className="text-3xl font-bold mb-5">
            Selamat Datang, {auth.role === 1 ? "Admin" : "Operator" } {auth.name}
          </h1>
          <div className="bg-white w-full min-h-[70%] p-5 flex flex-col gap-6">
            <img src={Banner} alt="banner" />
            <div className="absolute right-0 mr-48 mt-16">
              <h1 className="text-4xl w-32 font-bold mb-5">
                Inventory Management System
              </h1>
              <h2 className="text-xl">control your inventory</h2>
            </div>
            <p>
              Apa itu inventory? Arti Inventory, secara harfiah adalah
              persediaan. Sementara itu, sistem manajemen inventaris atau
              inventory management system artinya adalah pengaturan persediaan
              barang, dan berkaitan dengan aktivitas serta informasi logistik
              sebuah perusahaan
            </p>
            <p>
              Apabila Anda selaku pemilik usaha, maka Anda perlu memperhatikan
              inventory management system yang baik agar bisa terus mampu dalam
              pemenuhan permintaan konsumen.
            </p>
            <p>
              Jika tidak begitu, maka bisnis Anda akan kesulitan dalam
              memperoleh keuntungan. Akibatnya, bisnis Anda pun juga akan sulit
              untuk maju dan berkembang.
            </p>
            <p>
              Bagi Anda yang belum terbiasa dengan manajemen inventaris, tentu
              hal ini menjadi tantangan tersendiri dalam operasional bisnis
              sehari-hari.
            </p>
            <p>
              Oleh karena itulah, website ini akan membantu serba-serbi tentang
              sistem manajemen inventaris ( inventory management ), mulai dari
              definisi, metode, hingga peranannya dalam suatu bisnis!
            </p>
            <h2 className="text-xl font-bold">Apa itu Inventory?</h2>
            <p>
              Arti dari inventory adalah barang yang dikelola oleh perusahaan
              dengan tujuan untuk dijual.
            </p>
            <p>
              Inventory dapat berupa bahan mentah yang dibeli dan diubah menjadi
              sesuatu yang sama sekali baru.
            </p>
            <p>
              Selain itu bisa juga berupa produk massal yang diuraikan menjadi
              bagian-bagian penyusunnya dan jual secara terpisah.
            </p>
            <p>
              Bahkan bisa menjadi sesuatu yang sama sekali tidak berwujud:
              perangkat lunak, misalnya.
            </p>
            <p>
              Sedangkan beberapa pengertian inventory menurut para ahli adalah:
            </p>
            <p>
              <span className="font-bold">Handoko (2015)</span> menjelaskan
              bahwa arti persediaan (inventory) adalah suatu istilah umum yang
              menunjukan segala sesuatu atau sumber daya-sumber daya organisasi
              yang disimpan dalam antisipasinya terhadap pemenuhan permintaan.
            </p>
            <p>
              Dari teori ini penulis menyimpulkan persediaan adalah suatu sumber
              daya yang dapat disimpan untuk mengantisipasi adanya permintaan
              yang tinggi dari konsumen.
            </p>
            <p>
              <span className="font-bold">Menurut Sofyan Assauri</span>, arti
              inventory atau persediaan adalah sebagai suatu aktiva lancar yang
              meliputi barang – barang milik perusahaan dengan maksud untuk
              dijual dalam suatu periode usaha normal atau persediaan barang –
              barang yang masih dalam pekerjaan proses produksi ataupun
              persediaan bahan baku yang menunggu penggunaanya dalam suatu
              proses produksi.
            </p>
            <p>
              <span className="font-bold">Zaki Badridwan</span>, menerangkan
              bahwa arti inventory secara umum adalah istilah persediaan barang
              dipakai untuk menunjukan item yang dimiliki untuk dijual kembali
              atau digunakan untuk memproduksi barang-barang yang akan dijual.
            </p>
            <p>
              <span className="font-bold">Selain itu M. Munandar</span>{" "}
              menerangkan bahwa pengertian inventory adalah sebagai persediaan
              item (bahan – bahan) yang menjadi objek usaha pokok perusahaan.
            </p>
            <h2 className="text-xl font-bold">
              Apa itu Inventory Management System Atau Sistem Inventory
              Manajemen?
            </h2>
            <p>
              Inventory management biasa juga dikenal sebagai manajemen
              inventaris adalah suatu proses pencarian, penyimpanan, dan menjual
              persediaan—baik bahan mentah ( baku ) dan barang jadi (produk)
              yang dilakukan secara sistematis.
            </p>
            <p>
              Dalam istilah bisnis, manajemen persediaan berarti pengelolaan
              persediaan yang tepat, pada tingkat, tempat, waktu, dan pada biaya
              serta harga yang tepat pula.
            </p>
            <p>
              Tujuannya adalah untuk mengetahui di mana inventaris Anda berada
              pada waktu tertentu dan berapa banyak yang Anda miliki untuk
              mengelola tingkat inventaris dengan benar.
            </p>
            <p>
              Beberapa perusahaan mungkin memilih untuk mengukur inventaris
              melalui pemindai barcode untuk meningkatkan efisiensi selama
              proses pengelolaan berlangsung.
            </p>
            <p>
              Usaha Kecil Menengah ( UKM ) sering menggunakan Excel, Google
              Spreadsheet, atau alat manual lainnya untuk melacak database
              inventaris dan mengelola orderan yang masuk.
            </p>
            <p>
              Jika Anda tidak memperhatikan waktu memesan ulang, jumlah
              pemesanan yang tepat, metode stokis yang baik, dan sebagainya
              dapat menjadikan proses lebih rumit di kemudian hari.
            </p>
            <p>
              Hal ini dapat berakibat pada beralihnya sebagian besar bisnis
              berkembang terhadap penggunaan aplikasi, guna mempermudah
              pengerjaan
            </p>
            <p>
              Pastinya aplikasi, perangkat lunak, atau sistem inventory atau
              manajemen inventaris persediaan ( management inventory system )
              harus memiliki kemampuan di luar basis data dan formula manual
              dengan bantuan sistem.
            </p>
            <p>
              Akun persediaan umumnya digolongkan menjadi empat kategori, antara
              lain:
            </p>
            <ul className="list-disc ml-5">
              <li>
                Bahan mentah merupakan berbagai bahan yang dibeli perusahaan
                untuk proses produksinya. Bahan-bahan ini akan melalui
                serangkaian proses yang signifikan sebelum perusahaan dapat
                mengubahnya menjadi barang jadi yang siap untuk dijual.
              </li>
              <li>
                Bahan dalam proses ( juga dikenal sebagai barang setengah jadi )
                mewakili bahan mentah dalam proses diubah menjadi produk jadi.
              </li>
              <li>
                Barang jadi merupakan produk jadi yang sudah siap untuk dijual
                kepada calon konsumen.
              </li>
              <li>
                Merchandise atau barang dagangan yaitu barang jadi yang dibeli
                perusahaan dari supplier untuk dijual kembali di masa mendatang.
              </li>
            </ul>
            <h2 className="text-xl font-bold">
              Manfaat Sistem Inventaris (Inventory Management System)
            </h2>
            <p>
              Sistem inventory berguna untuk menentukan jumlah persediaan yang
              optimal dengan biaya total yang minimal.
            </p>
            <p>
              Persediaan atau inventory meliputi bahan mentah atau bahan baku,
              bahan pembantu, bahan dalam proses atau work in process, suku
              cadang, dan barang jadi atau finished good, karena timbulnya
              ketidakpastian permintaan, ketidakpastian pasokan supplier, dan
              ketidakpastian waktu pemesanan.
            </p>
            <p>
              Dalam manajemen persediaan adanya sistem inventory (inventory
              management system)ini memiliki beberapa manfaat, apa saja itu?
            </p>
            <ul className="list-disc ml-5">
              <li className="font-bold">Menghindari Kekurangan Bahan (Out Of Stock)</li>
              <p>
                Jika pelanggan datang untuk membeli barang dagangan, kemudian
                perusahaan tidak mempunyai item tersebut artinya tidak adanya
                sistem inventory management yang baik, maka perusahaan akan
                kehilangan kesempatan untuk memperoleh keuntungan.
              </p>
              <p>
                Untuk menghindari situasi tersebut, perusahaan harus mempunyai
                persedian stok barang yang terkontrol dengan cara melakukan
                restock yang sesuai juga.
              </p>
              <li className="font-bold">Meningkatkan Pemasaran</li>
              <p>
                Jika perusahaan mempunyai persediaan barang dagangan yang
                lengkap, maka pelanggan/calon pelanggan akan terkesan dengan
                kelengkapan barang dagangan yang Anda tawarkan.
              </p>
              <p>
                Reputasi perusahaan bisa meningkat. Disamping itu, jika
                perusahaan selalu mampu memenuhi keinginan pelanggan pada saat
                dibutuhkan, maka kepuasan pelanggan semakin baik dan perusahaan
                semakin untung.
              </p>
              <li className="font-bold">Peningkatan Pelayanan</li>
              <p>
                Pelanggan tidak hanya meminta kecepatan pengantaran, tetapi juga
                ketepatan dan kepercayaan.
              </p>
              <p>
                Adanya pengintegrasian stok barang dengan penjualan melalui
                sistem inventory management adalah akan memungkinkan otomatisasi
                untuk memenuhi permintaan dengan mudah.
              </p>
              <p>
                Hal ini menjamin bahwa produk yang benar berada di tempat yang
                benar pada waktu yang tepat.
              </p>
              <p>
                Perusahaan akan dapat merespon permintaan pelanggan secara cepat
                karena otomatis akan selalu terhubung dengan adanya ketersediaan
                item di gudang maupun di toko.
              </p>
              <li className="font-bold">Kontrol Persediaan & Ambil Keputusan</li>
              <p>
                Sistem inventory management memungkinkan adanya fleksibilitas
                dari distribusi dan penyimpanan barang-barang secara menyeluruh
                sehingga adalah memungkinkan perusahaan untuk memantau dan
                mengontrol persediaan sesuai dengan bisnis mereka.
              </p>
              <p>
                Adanya akses instan terhadap data-data penting meliputi
                ketersediaan persediaan, jumlah yang ada, jumlah yang harus
                dipesan lag
              </p>
              <p>
                Dan biaya yang dapat diketahui pada saat itu juga terhadap
                persediaan, akan mempermudah perusahaan mengambil keputusan
                terkait persediaan barang yang harus mereka miliki dan besarnya
                biaya yang harus dibayarkan.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
