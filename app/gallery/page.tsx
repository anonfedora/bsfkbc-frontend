import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import Image from "next/image";

interface GalleryItemProps {
  imageUrl: string;
  title: string;
  date: string;
}

function GalleryItem({ imageUrl, title, date }: GalleryItemProps) {
  return (
    <Card className="overflow-hidden bg-white">
      <div className="relative group">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </Card>
  );
}

export default function GalleryPage() {
  const galleryItems = [
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/486138250_664417159609801_3061242768304579367_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG35LBr3WJFyXWnxLtYtOO1XF7iGEkef15cXuIYSR5_Xv3dWpR5-uvREoQ0pEN5SvCqLpBpGrdl0gosWtC0VKr_&_nc_ohc=01GqnrIAgfUQ7kNvwHzjx-K&_nc_oc=AdnHGt0DzAH-Dagk2YND2fFFVJ5uPHuAzPXHszTFk_42sUlUHH3nGlOsOFmu_4ihOzI&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=GFyCWL2KriLiIMAfWcAncw&oh=00_AfGsFXIQDxVC4ouP0HLvHYM6dKmovDrywT0kg3oLUfiSnQ&oe=6804508C",
      title: "New Year Praise Night",
      date: "January 19, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489822700_676424978409019_2286318064618864593_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEgSlyAqUm0i2vbEEmyBkj0jXex0F_og3qNd7HQX-iDepyC2_dV9UiSqk7-kFh7fPnt0wg9ikHTG1GGBMBE6cIH&_nc_ohc=le8yQ5rU9_wQ7kNvwFnzV0N&_nc_oc=Adl_rRfFFxJKZYgiwOLAVLDrb0BQ8u8MbgX6Jd_WdInp2Mt_QdOPAvfFzFgzuF2nLhk&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=CZRogNc1ws6QM10wdK3c9g&oh=00_AfE20hIXIyiQbrTQ3vFRa1myZZKLYe2K16psUJ_BCiq2HA&oe=68054648",
      title: "Youth Conference",
      date: "November 13, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489674381_676422395075944_5404512004159338138_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGIh4qtOsV6WZFNCsfV0qdyz40zaiVOvcjPjTNqJU69yDeDNHiysC-DQBOhJrRdy2zerHHeJ_ltw2Vjy2v1vC7i&_nc_ohc=3k__o1Sj_4YQ7kNvwGnR-4J&_nc_oc=AdkXeQspVqKhGJt3NdGo89vp5RJS2u0XVLHyblca0BfkUTjCVOuhQnzzd6XgktoxN-s&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=JCUa-WLQkdEE6s6BzVEJIw&oh=00_AfFR-A-RM7Cdll0Mx7jGoBmCIY3ZuaJAvVf_K6Y6X_3p8A&oe=680552A7",
      title: "Missionary Summit",
      date: "December 13, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490042243_676425275075656_5571393341531137461_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFIc7fWNgZNQoe3NeqHgrChDAx1M6wHhg8MDHUzrAeGDyW5P8jaQ_1HMM3P4s5PCjdX87Dw5k85-YOGy5Jbhonn&_nc_ohc=-5VrsbxWFzkQ7kNvwFRK5Jh&_nc_oc=AdkTLgljzsLZoLa1s_hT21m3Vb2YlS-GmPJ-_fS-Ieo84IH76INyfunNvxOy70GUhL8&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=KEaPinw1NcZv8j4j5cY87w&oh=00_AfE68Tzru_S4TuxEukQ1LpB0wv2iQiOB1zv-ahEjEMEqUg&oe=6805631E",
      title: "Annual Convention",
      date: "January 4, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489699813_676421988409318_5351681358009892613_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEvxF1-cEuLQRdtyhvWeWVLP4vO4csAqhI_i87hywCqEjknYLN9xR9rCrRe6PMw8-GocpboiH-pmHJTbcozYaRu&_nc_ohc=AWS28mzuUaMQ7kNvwH8YfO5&_nc_oc=Adl6weVi0wA0X4DLQNdYc88Qu6No7_8-zx2669QWz5epx3TiaC_PbjhphLoZP1Nv8KE&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=o4aQQPNKMJnQJ_tS-LMOBw&oh=00_AfEfRJO6kwr2WKJtk77LjQ1GyxCjChnhMROuOZoPhzcCnQ&oe=6805610B",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489785775_676424835075700_7319742759826009632_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHqLdGx_k9JYDN8Px2hFRplHPuTz8Xrogcc-5PPxeuiB4I6Kyhqesovj30b0N0qgUwUWnNVxNVaTLgyfItVCQWV&_nc_ohc=HZPaRAx6pIwQ7kNvwHW1Xak&_nc_oc=AdlEFF_GOd5vP3tPbaWmzjcvcvdO-JP52l4xOmVDulOHUSxnZVJW1Dq4U-67FncZc9w&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=8OI9FLV-PWUa9tMY2kRdVg&oh=00_AfEL9Tm0KMgCNqVEw3rg-e1B_gr3hfzk0uqmqeMiC-zGCA&oe=68055811",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490117719_676421238409393_5473915424548058200_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGB_iuyHbi03b9LnPmGvtTmhWW4JTxoB7uFZbglPGgHuyPdshuzY_6FC7kgqMSJ6Sp70Lq0PFNR6Fg5YVzC7MZO&_nc_ohc=FAA068JJ380Q7kNvwHvqDdo&_nc_oc=Adnnb5e5pIFW7b7XZpNUOPfTDPqITihtfDYw17yn8XwrC7p4XqEndwKL1RjeR5ce7gI&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=mhxVvCNTvGr8azAglfIZ1A&oh=00_AfGWbtXkMVySglK7sGFdLjcD-ejw1j1Wbent9cTjqoSbdA&oe=680542A9",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489760218_676418571742993_8109476247721111413_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFHT25uG97Aun0-fBkqd9LwsSUhI4yvpYOxJSEjjK-lgy4l-GpGNMYY-BSC_uTGuD7aYm09SrWPcDVmrmHBt8xB&_nc_ohc=FP6RxnDe290Q7kNvwFeBKkn&_nc_oc=Adn4wol8yfTJRtE7MEe62YFuFHTHPgzSLRNGw8YzyL5Es5OaRJiKuEKmTM_4KK4QAYc&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=rZ-_cixQ0-oEbo74uoVFaA&oh=00_AfFEXHynbo4I7FWFAplnpCU6_5zAWsNMIY4V7TXOTKDIbQ&oe=68056966",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490340542_676422168409300_2120080814495681116_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHByZKeNXkqIKgNGmzxlvV1fZNM5wUJraN9k0znBQmto4ABIZAXF1kp25fI0284Ywe4T0JRVC3VzY5BVWicutkj&_nc_ohc=aPiBbmrGQ34Q7kNvwHJj3wI&_nc_oc=Adljvn8qqIbsMEofycglUa1sRZgJzy56LOvePTaTk48fU6r6r-zynMalO3WMKxa-WD8&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=yUunfkBuSZRij17K7wNWjw&oh=00_AfGFBOa3PV9PIfRqw52o-Vg8m_-pYQ40BbMHp_9b3INWXQ&oe=68056DBD",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489906260_676421675076016_6367148398255861315_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPibVCrYZT-MPxghGONwXUJ5RSbD74NTYnlFJsPvg1NvUSkxrrLb8lvexnW_g3KUQ1ZILlWcZfkpYispjdZU5J&_nc_ohc=FOtDvfo--x4Q7kNvwEuL51k&_nc_oc=AdmOIu0eX6x401U78nhtWpySKzUbY9dBeCv_SWigzUqyorik5dQ4QGe-uJY6f7H2Q-8&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=Mtg3960Xv2GZYq09_x9Jsw&oh=00_AfHLV8xe_vXwVmDngtgl8hPBQGkXg-gUBmW1-J8k9qgX5w&oe=68054608",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489828082_676423335075850_4830026194607509893_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG9Dq-Xc0KWhDMuuPqvEy277RwHDbvPchHtHAcNu89yEfLRzM_97-dIW9cu5bnf3mERN3QiAbD9T1rTUyGu9JNY&_nc_ohc=SQDRHyGFlL0Q7kNvwEOShR5&_nc_oc=Adlg14nPT5yuGJUE2DWEOcF3H0CQR6VlmMEMAhg_qcCIuUOJXT6n_1sOAEv17UdvwPw&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=EhbRXG5_NoWbIr8kn6y2bQ&oh=00_AfFrYQ3hOFAWnnBhGEfvweAqA3nQCKU3KfcpLvhHszbfpg&oe=68057797",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490224224_676422615075922_6782555919497119254_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF9Of1oAdHlQVSRZn6SWc5xRLhiuZmcG61EuGK5mZwbrb8UY0AFdvxqMd0UyuKSJEv5fvMKWJlUwCZCtma3fIRm&_nc_ohc=19wf-AqC3YUQ7kNvwHc4hv3&_nc_oc=AdmWDS0jVYgHUM7Dm2qg-wf9ZA5DC8E-sx78KosPfE0kbUktAZll4-P1m90xnLigbms&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=sQYgp9rekKOZHu_zhzrjkg&oh=00_AfEXvIrDKfg6a5VRUyzephIQQdEdDR_3Rf8KRSqx78z-qQ&oe=68055C00",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490373881_676421541742696_406521870394711565_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFxF8y_0jfSiKhAFat34oPpsPDaITiA81iw8NohOIDzWPIt9jTJxes0ZFXC5sHHcDVkCLRFpfPVYC9F-yC2R4m6&_nc_ohc=EgzmUo5cG2UQ7kNvwGXWSdp&_nc_oc=Adm4TYSWeCmYZLmZxVLH2igotq4z6a4edJNujqqwA8LxeG2hRgE2Ciz1XLADvHKT-yE&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=8Zo62eE0rrVt9rHePos73Q&oh=00_AfHANx80376pdbRwGRrYDf9YWAL3LEolq3HNH3B9s8BfvQ&oe=68056368",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489669383_676422445075939_2925286721631416089_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGJjscHxZLGhb-hSLiQlH2HTd30dEcBc7dN3fR0RwFzt6mfmlDolcceaIwrDzgxA4jGOKc5FAH72GZp_qW4JOb-&_nc_ohc=0AQfskPyb-0Q7kNvwFqrzah&_nc_oc=AdkkmNfu7Vc6_JvYZ-LEJ3GtRW4V5NjM2rPPtDT1ZIkflz6PdYJflXInNfZgSHsn3yE&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=buZWnYDkHO_5iILO_P85gQ&oh=00_AfGSBW_hFgZJlEdQf-GLEcJla5BBLBz8BD3r90D6z_uDkQ&oe=68056FEA",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490328426_676420365076147_8339133495359547439_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFLX7Op3BXmDjesAuQE9i2t8b9sOA2CdF3xv2w4DYJ0XYG9zd7mhErIYXjG8cbCgwAxTQWw3NPYWARq6LDWDGZ8&_nc_ohc=JRfxkv8K2wIQ7kNvwEYYAcA&_nc_oc=AdnhVvFX4OjjSdJUSeXulYgrKXxCMGw0yhTDKJJbsDP3bTxrhmDKWZ3fDSbTfv1tB8E&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=MS_mSCVm4eyu7pUNuzyN4Q&oh=00_AfGsRdZLZeKOcNPB2-q4TdxWDnMMmgKFu5az4xiORFuvaQ&oe=6805604B",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490080092_676418945076289_3315705632005105776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHErczYtznr2SI_NqVye0vaqEjxMeu-Kg2oSPEx674qDd1ZggB2a4eBL_z9nM2PZdcEISDcM15lJy5eCHsGEB1N&_nc_ohc=5V7hNahlm5QQ7kNvwEHzgCM&_nc_oc=AdlLRZAPNJsEsJTZGrD1WU_gTdHGGkSDSOSgy4KVWcByhVR8t0lwAYikB-7-siV5GM8&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=6b7S8WmcZFungL7DKWx7jg&oh=00_AfE3-21Bw4bhxI_aN_Nd5n9uZZjpwwgfTJeT6hzkeaBaIg&oe=680562B3",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489476738_676417328409784_4735997883729655223_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEqy5XYHmBQs71zn6z-_AiJ0qxQ3gluT17SrFDeCW5PXp96raBmM-N43uYWbgsEKZf-zMlq45mJhA1_w3N4cuu9&_nc_ohc=JwzjxSJAqYAQ7kNvwENlgfR&_nc_oc=AdloO12UETZME7XRX5Wn4vtjQiAeH8w49hnUgbclFhzu8P1MF51rC1SWsLKMaaEX7SA&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=oVaURJuvEz37zQplCfdrsA&oh=00_AfHiNNUzjFZNK2EFYgWxd1LsdgkleO3s7Ogz_C9iobI7Tg&oe=68056D22",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490263912_676416881743162_6750149004347736898_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFnp42os3ywSkqBJB4Si4nYu4mLKCpPDgC7iYsoKk8OAAPUZ2QibWrjYJbukCOwldJILsb4RiYCEAI8I3XPotX2&_nc_ohc=YiEK51mA3RAQ7kNvwGZuJTs&_nc_oc=AdmsUwSqpTAdowvh4T7WqVp09Z-WIrZygaA2SU4YKdHF--yLNcc6kJl5bLyHAJ_uRWI&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=qDzNc8IIIWMbw9yUyqKvyg&oh=00_AfEqNfnjqggvfcAqbSDZzUnV5mKmhbf3pV--yf3Eh0kDCw&oe=68055654",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489883623_676415925076591_8700252220937686887_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF20fgPY_5ocb9-MEy_sHxtvZa-yKtBzjG9lr7Iq0HOMZet27KJVSLp1s_Ir1LZMOs335wSHsLFQFAg0cuIFDbj&_nc_ohc=cm17vM8w72YQ7kNvwFY2Wsb&_nc_oc=AdmRhICOF77DYgyQY9jdJuDRPf10MJ3p7TGrc9M-CRKCUXZcJiUce7_QIxs_aUN_0wI&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=8NqMo3_HUqVs8nxw7iv4oQ&oh=00_AfEqUiGxyBPPQRWY4NYq4cFtBhwz4GalmDMvUiJFP6RKAA&oe=6805740A",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489628034_676413928410124_828605849735505054_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG6uof5L6BSuT2l6gjjYfLCwv_N2X1gcP3C_83ZfWBw_Q8KfjdR-jm9V4Ux4juhGKdHWwmdCSXYR3ji4Wjn3F_I&_nc_ohc=mwLwutwQAmsQ7kNvwHm0K6K&_nc_oc=AdlSONos-Jyeepa4TvVTdCQJ7h3dikvzAIAiwVnJcfB2OmOk-MY9KaSN942XHsSD-Os&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=L1XBJ6izemZTtVuKjyvW5g&oh=00_AfF6DQAQmmqbCQqGei4e-q1Oh7IIqkoVLuGIguR7p3EXgg&oe=6805552D",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489932250_676417498409767_6822001801003686264_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHG1LNssCD1O8LZ9m1Cl8J6bXdjBLFJ-VNtd2MEsUn5U3A811V2GrjWzgTQiqO-GBFSC71ZjCeZgpliMlouY5l9&_nc_ohc=L7g6Lwcl5wcQ7kNvwHXgWH4&_nc_oc=Adkm_K8wK3ytSk338fkG2f0SGJB-dK5UmN_gq3YMbO7Uw318FVdozNu58GWsnC_jcJg&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=mqAwRzP04YN-1bxZq6I75A&oh=00_AfE-z-s8yPOv1AT31Oh_th1vLTtIOlifXOQ30b7YB5QOVw&oe=680564BB",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489917354_676414555076728_5071286575756185348_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFeDr7UDOD32GEHyOs6HXZ7TR_FlBu4HSlNH8WUG7gdKXsyOTdv2HpJpwUwxbNrvcL8fvQcQtejMaFlfkpXODZS&_nc_ohc=5HzakLjsxlUQ7kNvwH-2m_f&_nc_oc=Adl__e9ygb-rTMMmGwyfqF3g_idc6ERMA5q4nINjElkMwOU_tH-wlCDMhi2r4iLCCY8&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=sCbNO46meScxjdxrZMRJ-g&oh=00_AfFyLk66-HTrZZEQmLOG3TAMz6oZhuTZwmPpwTClWQOZpw&oe=68057302",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489956062_676417808409736_2754879897144593003_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEa_t8ijcV3QHoop-TD6NgqLP1Bm0yGApYs_UGbTIYCloKytfli25Bdy4Lr-sa_T2qR94fdm-mdW0kfrmOXOziO&_nc_ohc=6H4BhK0F2HwQ7kNvwGeruot&_nc_oc=Adnva9Eofxc-XYcBxiH2ukXLnxrOSqXD5ejbKKmbCu2w9Z0HOrMaxMNzkrrQCHUM_o4&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=UCtvmLWTZpn8KHP5xCUHMg&oh=00_AfH4m50ClsmU2Dy-R-YMV2eIj8ELVXKk5Ph0Q0SMAFTzUw&oe=68054AFD",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489957105_676413721743478_2946780709925089503_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmLWvsq1vFC7OzipTZ_WWoMNZZ3KEAxIEw1lncoQDEgUJ6sgQTBQxLhqrRzKNEfaonBj1bJcGLxkFOoJwu3gqH&_nc_ohc=XiXBrtl01XMQ7kNvwHRpVq-&_nc_oc=AdnFUEzsgIA0CG3lIXFYDIzi-dB6ycnb8Ij_M8I07xQwQeGW1rzLact1pyFrQBQkH44&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=pB4PtruX-dFRmS55xqwxvg&oh=00_AfGNgOPCX05jHR9XZNElAR-pv_ODSwj6kHC2bMsZcDLfWA&oe=6805570C",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490112817_676413871743463_7677598346322906564_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGzW3ogCjFclgmhZTiKKPw8IdQnDb83ayoh1CcNvzdrKrn-GWXAHLq86EnERnOsG1RB6U7MUkKNmebDssp3ogcM&_nc_ohc=9yNSCZlz5csQ7kNvwHxvT4R&_nc_oc=Adk_PCgugLWUGLmkBw7ou_BRY1kNdXMTolAs-uZKQ3pjg0ghY3fNZYZUXycX7MmK-cc&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=Ihw33zrr-Bb_PLbfLDIFHA&oh=00_AfFZyoON1JJ8zruz-q-Mx0Ozltyep-GudbaCif5AtjSiFQ&oe=68055835",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489673036_676413201743530_7353071248397928292_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEP4BM7_nBpKeJnOwAT_gmAhbGbgywHeuWFsZuDLAd65WUYzKtAUHTiY9QuBxl0NkUKYMES_kNTQ4qA_7_Z062V&_nc_ohc=8cDAHXwFlmQQ7kNvwFnlLw3&_nc_oc=Adk7rfkAXX1NFig6r3TTgmtAdl1ziVSDc2KmhwIRnCp4UiExqu4exoiVwga3YeLUtY0&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=jvM7KSSvMQPI2RDFSVc4mA&oh=00_AfEfj7q4BNM1csnP9-48HOMo1s7lwuQEo0SJ4CimnDO9bg&oe=68054B08",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490377296_676415141743336_453525591471782162_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHebtR7NEfDLh5yLStaAro7AjkUMGJYbTsCORQwYlhtO-zUDjRNm6P0Od6dA7XylrPpEVaFQHxqIDqzdLq7tT6H&_nc_ohc=ZlR5K3OSHCIQ7kNvwEyoJ4_&_nc_oc=AdkIsIAAmD7wKMHPLWIJtRb96rrufFBC8LPHsodu81EQE4PO0lN5Xd1hdGWaozgZw68&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=S-izmuCPwF569JeXWugAaw&oh=00_AfGO5wsVvhjbo8d3wgS8sEyajgD1iaSvH0-rKhhnXfGmSw&oe=68056F38",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489830963_676417211743129_1824944850527078464_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH2duQSeyuiS1olYS8n5yB2dSKcoOPrCgR1Ipyg4-sKBBWs7HzA8ahUWCTS502A-4W7Bgm3Du12IwDoFDDmA8Ky&_nc_ohc=KdyrRwXhJJAQ7kNvwHJbs9r&_nc_oc=AdmYss-Aix7YsG48rM2CKA_cuMaoC4dIduSaL25vdJaXuUMYc83WuFV2gpKLa2-4njc&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=s_GT967pAwZR1aPWvHvM9g&oh=00_AfEqkA56cbZm453gSM4AVn-57-KArGnjXbhZfOek0uk23g&oe=6805416B",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489944988_676414528410064_1291050321773303626_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEC0HIGVk9iIhlKJCAy7PhYKpiskVKOmm4qmKyRUo6abiXdXcqHNx2j826HrpVRgZ7IqERJBu3BncCgw7HqpHaD&_nc_ohc=LScVtlLF7dgQ7kNvwEAGFow&_nc_oc=AdlIqZqplkqeQGrOlDpISZc97Ug5clDLiR4HixqqVik1kATw-cpUYQ8jeDsMB1RvklY&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=wFhrCaJ5KKPzWtY0FfTS5g&oh=00_AfHmuz7bXUPjEDQDKnSnvk3Wx5YoMX2taTUrRhDGBERE3Q&oe=6805423B",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490129006_676414765076707_7961981568489457238_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHbRRCYPipXjETQR3YepWpSSPWIbqcM1l5I9YhupwzWXjwJ4GB620maCz6XCQ7FIN7PPTiTmVTuHviGfamekfgN&_nc_ohc=DBYknVFZS8kQ7kNvwHOHGcP&_nc_oc=AdlIxJ4nwsUAKLwgwOu1rLnIBk8bR63aURkpmgHBMGXnlNmluzkkR9lEsEcnXTWtCmE&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=Nmqfxue_wrNwgaWp9SLtfw&oh=00_AfH6tFsuqwdP0ONa0G3VuS2_g047IRZPVrgRdkY253_k4g&oe=68054B86",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490300413_676413321743518_1766587074000232040_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFZQTx8ZWXKPeqdUqjXwoSetQ972A1jXa21D3vYDWNdrX340uW5SCyH2V_9nPL6CCu7ChKeiSYLsIn2-A2FlXlx&_nc_ohc=9y454V3by94Q7kNvwF_qekb&_nc_oc=Adk5BWOJGkdIhDrCwkBrLoLj9xbbm8TVn3rYtC_nPSYF8bSgjD0L0kU_Zd0Y0i8vWq0&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=5ILQu1hjkj9YoIAIQ3N_Eg&oh=00_AfEQVKke8ES4Nnt1frYGT0YgILAextkwNDfOYQV5-TreaA&oe=68054AEA",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490220275_676413458410171_9146506889149270453_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGEKPuDC3WTweBI6IxhjswB1417g5Ch16vXjXuDkKHXq8mWSpIaqpa_ArbV9BhPuaG25PvJuZq3bmG8UE66MNqK&_nc_ohc=8T6u2_5mNqgQ7kNvwEJFSUs&_nc_oc=AdnjEaXP5jwga1FXfDH0xqogPSfLvO2CeE535wlESsUix58BwX38fpqPDRX7po5KnqM&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=9D3tE3xgjORnDAJNzQ5TQQ&oh=00_AfEpedgsm66UE0uEOqVINEAE9SIUcQow8OaJDMci4w4TIw&oe=68057239",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489924056_676413818410135_7935642715504468665_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHP-663UkUassfKDRW5MVa-14xu3ZWW6WPXjG7dlZbpY_eLUBidVUZM34e4BpMvLiyfLrnB3zHDZy7aWUMu942D&_nc_ohc=g4ejKFf9cacQ7kNvwFzyFsC&_nc_oc=AdmerDLTLgPkhRWaqdFBsjzvwnrTw4UqqBhmrmRoyNUgMmhKMS1j8YAzw5LiQcixWAo&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=ZUFtKMzcEZ-k_DYx0krWPQ&oh=00_AfEbfXgQ6xAsXkLkG1kHTX8J0Bo2ZvjGWkJALECsSv4W1Q&oe=680570BC",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490238551_676413655076818_8890929253247840243_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFOqIxN12CpQFjbYAhBi27Nj8G_7BLIRgSPwb_sEshGBNDMt1lmdys41fTokSC2iewD1MNx63KlfaqAzsVv79WY&_nc_ohc=sjpRGeFn6qMQ7kNvwHou0Nz&_nc_oc=Admt6f-eITa7YHQM6NvUQ6BDjFYlF6VFU3YDS8hJ_KWauvVa65CGHqMZx7vqE4jFSqY&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=kSXUgT2romhYFhDug29g0A&oh=00_AfFS_gBc8-IVfl10QiXHH8TdS67847TAs68HCnt3reGZ4Q&oe=680560F6",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489785211_676410485077135_6098845857546859618_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHadUARWm9KBuVaxmymYfNUrpyu3n9KJgCunK7ef0omAKsef-ePccRnRCd61jEjRsIsi9IlbMwvnZFZ7KC2Wlhp&_nc_ohc=KW5jty50V0UQ7kNvwHIR25S&_nc_oc=Adk7qIjw2tr29IZGm_uf4FNmJPfgfiCSiYFv7haRaxfay1GCk3e4ZvEXfCAegSxZnDQ&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=iTO0lJ7-WYmztIQsuoOuNQ&oh=00_AfGWnG_NyB8UdvlXbLTGuLt2YUgEy0qYt9-36GApwpKZcw&oe=68054B0D",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490346553_676409791743871_6752133842970886875_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEQ8Z9r_v378ZGtsN6DpE7wAsr4XzBoNroCyvhfMGg2upe4z0TiRzAB6AHlLy9wshq9gVq3Ur7MBYRj6zZP4eda&_nc_ohc=Ny7VNrmioysQ7kNvwGAaA5Z&_nc_oc=AdneYY8KiF7FyLUb3ctVidukcUipsZs8qRH-zIWpek17g0g_xxFy0IEe-z3lN4UVAvo&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=O7saiP-DsP1X4UbOT933Sw&oh=00_AfElis7ctA_ILumMp-99oWRm7JjM-gBWcpHWajnyEKkf9A&oe=680558A7",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490177151_676409705077213_3632770830100765848_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFA3j88JFGWG0U6QfdeYhXAhud5JJ9borWG53kkn1uitcIdUEQO1rCrWJihKPTENY8jMeDiiDoz8p2FxTM-k6kl&_nc_ohc=AUfHz__TxJUQ7kNvwHTXdSJ&_nc_oc=Adl_ROj7idtGjHvDIieMLosnvej0pBd9wY5FJYrze7pXixWwja1A6AFANhkXXeY81q0&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=CpOwEPCpjf8XL-dp9-Pvqg&oh=00_AfHVwUfpsL5RtrSG7SOmgklZunVyuTHR2SFrQFNGg24QtQ&oe=6805516B",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489753481_676407608410756_8130401556932068407_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFRX-VCU3j0Qh4iWL5h3RAdmkVxiO5DdIyaRXGI7kN0jA-kIZG3cwqxfyjfE9Z1HLTK25tKXNyGJm5JF5i5QrOu&_nc_ohc=014T9v4BcMwQ7kNvwGkH67b&_nc_oc=AdmmtnbE9e59eoTU4L6_XrvDWtnHUt_qkHoMRobBCJr9GEYwHMhvYfQvOh5f3xDbK5g&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=dTxhISvT90euexn_lAHmkQ&oh=00_AfGUVRR0ghKTbMvU9XTxHJ1XPWefYgiImJTtbsrn6vhdwA&oe=68057704",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489777012_676407428410774_1936686824479814343_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFK8e8z5NxErdvvreq5jf031rXoYpmrR3jWtehimatHeNKgdzkKQBIf0lUF4GQJPprHhR7m9cqUdiCOfO6MbUbn&_nc_ohc=i3p24AGs2asQ7kNvwFP0_N_&_nc_oc=AdlkuNAEjg_ltNfTktr1KY4BjpnlSRF4iHHn1bX6NspdNJXDJa_8UD9SvpNA1rkejTw&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=iUlffvKhxDB8ml-A7tjxCQ&oh=00_AfEHSGcbqwgLPv8jP6hYt6S41rOlc1KYpwFNox70FcoLFQ&oe=680562AC",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489452372_676409561743894_2557768057837416198_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHrMk5M9BToINz2m9joQzB7FPpj0TZzJvcU-mPRNnMm9-hilqlZADX-ZhWQIcOh6KKF9J5FPf5bq_Z8tUmQigmF&_nc_ohc=D4guNpfuZtgQ7kNvwHjwe73&_nc_oc=AdnuAMCOACAQkMSjIXjV16-c2ZV-rNMYjaxvK4EZgdZCm3Rqt85LQ8nWWs72fzkZZto&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=pmBWxVkwHREhAV488vAHYg&oh=00_AfGnW4EF3W56TLNOsUz2XuDJAPVfqFwzUW5vJgzESErU1Q&oe=6805702E",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489559719_676404575077726_9146163921259807220_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHu5kORB0BRegjOmEWy4RtQmJDw613JadCYkPDrXclp0GIuVvRO_VRAlXtu5PSgtQzdBNA4ZYMd0LRLb0YZpjFo&_nc_ohc=-irvjxAQw4cQ7kNvwFyymQ8&_nc_oc=AdnLz3g3ZCqvRsC4Y0Bjb0OfImbjE2-t-vE21Q0GPMVqf1dICHIS-IVXVmcUEb_LosY&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=JEA2xLHXIKdYZX0dJ9V_WQ&oh=00_AfGutq3-vnDR85neLJgwzpuhF3mlZE2mtcEajYFFdT-G3A&oe=6805582A",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490303757_676422728409244_4152942309447468698_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEMp6IkTbbBlPR_nBUe5kwIKdsBQK1OCzUp2wFArU4LNYuXMxmna6RZ0xx-szbtqEBMizHHP8iNAFkms6slBApx&_nc_ohc=a6RH2fKXPIYQ7kNvwEejjyG&_nc_oc=Adl0_QmRd6zFF7t_JA0jY_eBYFxNwX045WBrlnlOoE6HOR9ir7EhIUys_t2Je6U1PKI&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=q2mhCDUmy754PoBk48c4BQ&oh=00_AfFr65Jvex6OgiZw1jUTIEEMiNFANYficNtzls2aOZFbNQ&oe=68055D64",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489699813_676421988409318_5351681358009892613_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEvxF1-cEuLQRdtyhvWeWVLP4vO4csAqhI_i87hywCqEjknYLN9xR9rCrRe6PMw8-GocpboiH-pmHJTbcozYaRu&_nc_ohc=AWS28mzuUaMQ7kNvwH8YfO5&_nc_oc=Adl6weVi0wA0X4DLQNdYc88Qu6No7_8-zx2669QWz5epx3TiaC_PbjhphLoZP1Nv8KE&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=o4aQQPNKMJnQJ_tS-LMOBw&oh=00_AfEfRJO6kwr2WKJtk77LjQ1GyxCjChnhMROuOZoPhzcCnQ&oe=6805610B",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489568073_676420258409491_6727063254822632924_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEWJNgAnOW3KSiuFt73cKK-I0ymIshnBacjTKYiyGcFpzSQN6cH9b0vQ1i3jTlWPxdZzq3zGf4lYYjxwaxu5B9C&_nc_ohc=c3xZvznntF8Q7kNvwENN4Yd&_nc_oc=AdlPor2j-gBsjlX2kkBO87gVt4cC1v0V2ZM5ZQ_VK3_kRBaJM9MZlZaOi-1ks7SvS4I&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=pm2O1k1L5jZ0VORkhvx2tQ&oh=00_AfHhsYFfu9An7Uk12Njw2CNm4KqRUiQvIC65oI6cCtNftA&oe=68044F7B",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490117719_676421238409393_5473915424548058200_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGB_iuyHbi03b9LnPmGvtTmhWW4JTxoB7uFZbglPGgHuyPdshuzY_6FC7kgqMSJ6Sp70Lq0PFNR6Fg5YVzC7MZO&_nc_ohc=FAA068JJ380Q7kNvwHvqDdo&_nc_oc=Adnnb5e5pIFW7b7XZpNUOPfTDPqITihtfDYw17yn8XwrC7p4XqEndwKL1RjeR5ce7gI&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=EAgv4_W1IVXO8A-W_b9hNw&oh=00_AfHlB6XxrACDb8O-L0ClZbvYqBIgrv1wE0XGCcYHULdwEA&oe=68057AE9",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490134572_676421995075984_5056812300523148368_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpHtvo_BK-RzxfCpdIXfNe1WvDMpUXILHVa8MylRcgseDRtYFkY1UueUZO9eGL5af6YJ3CdTepp3dMs4uQok5k&_nc_ohc=xJ6DIYOFg5IQ7kNvwGvdLf_&_nc_oc=Adlk0NG93am3kCmOdPmm2RqHMLzt6ZEyl1Jj9zQFQEHtjVZx_ikBq4VaYAmrYutisHE&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=ZqQFJaobIZBEMwKMU-rjrg&oh=00_AfFlpCe3oDZYYUpYszY59FNJgY5deJ6Nom4ltXnOASUQYA&oe=680563A1",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489288205_676423085075875_6223134287641830265_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHu1kaecsYCBBByR2fbLKPiCvNQCiupxFIK81AKK6nEUjcB0WgVHGKdLVGvM30qO3t9-yNHUrKb7Fbn3fj0q3v1&_nc_ohc=0H9bFkLqvn8Q7kNvwGxX4tp&_nc_oc=AdmeAf5aKT93ZsYXPB3LKJlhQa_CsfTiwBlNjgggAOB4pK8JPWW4tCnNb_GbWWI9NzA&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=ytuh35Z7v2ycA9ejOaicrg&oh=00_AfHwMWrJRX2LbVvXiwye0zBXtLNcpTWt6KpjqoDrA4xKfQ&oe=68057023",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490358176_676422908409226_3697860773497962968_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHFO3q14ypoIY4IajLCEqoypokSdYfClmmmiRJ1h8KWaaio12d23xvSDn8j3vP1Y13cDfyzudMc3Gt5dlhS0HEO&_nc_ohc=_ZgFsTvA0xwQ7kNvwF-kA5N&_nc_oc=AdlTPs67iKaO5uShSEljMQArt8XE5sf0hEAMlZ9T5Jf5QUut2NJRsKQjjF9PR2S_eB8&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=Pbzyc0KLpi48WkbxguMwWw&oh=00_AfFE4rMPfv5C83bxDXiHgA99OjyL1_1ssDe9mWP97W8sOw&oe=68056D57",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489785704_676407405077443_5167140397539550917_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGns4zUaebQmflyM-evVF4fy5PUwOu98eLLk9TA673x4n2CZj7kI4WS0w4NxBoIgA6NEfNdXkN2q7n47NGXo4xK&_nc_ohc=ASIsqA5iKFoQ7kNvwEwWMKi&_nc_oc=AdmHpbkxM39OWZLNSB5CdmZI9_Zm7p41Ef1vhKvg4uuAEo4jThG9GvmTWaBa4nmuHn8&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=2-Wyo765tisYO02i02GCqw&oh=00_AfGR3S1san34jJrGZMopiaGvigwH4VLNnBp7nNGJChfQfg&oe=68057F1A",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489529778_676402751744575_4079074783742716080_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHt2BVjOKF6wUvueNwMPHP8X0cJCzp_IslfRwkLOn8iySdPHuz9DjT8dHSMFfrYf3IUXbYg8OY7XwyC_FymJMQn&_nc_ohc=PRxxU-qP5c8Q7kNvwFHV_gc&_nc_oc=AdndkP9s9r3M7dP5Cuu4pSSrgqXRLa2SiIaw5ZwHVzojvtoE3t2YwvmVDRfjc1nJoH8&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=z7UcUZvHE2uje_vAwA36uw&oh=00_AfEN-4ABiCntjfR_NmmVoke-lxVcpnGRlqsl35J9px9npQ&oe=6805A013",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489859228_676404911744359_5387152656290630548_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEj9cFLkh-W0Ut4w95CqmOTVB3yjHTxUOxUHfKMdPFQ7KsxcUZxJPiwSzQj1-SFabcNwd6lWMJMSFmPeFm0MQ4b&_nc_ohc=U_cW94J-YfoQ7kNvwF1LCku&_nc_oc=AdlURfEMZNFhrr0YK44PXAuKCq3M_-njLCR5dUjH1NUhu9kZRC8j7sSLyWNvPXmDQRo&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=MwSBFL7oat5GjnI12N-T2Q&oh=00_AfFKeYg_3UAYtIak7x9nvlQATGOegDgjjiE4C4Gig10aHA&oe=68058812",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/490064403_676402918411225_8295525187972665512_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFGU8TWWTMzJGBAe7JPXHBJpOrXgE49D4uk6teATj0PiwSgwhLPnQA21FM7z0uv5dKOMrDjdMZSwVgZ5n3firbn&_nc_ohc=wsY7MNV2ljUQ7kNvwE7V-kl&_nc_oc=AdlYX1jKfdoS44F8nF2MK6K3oqKm41tebCU3o3Rygbk4YyXU8hEp_oK2obzokW7dMOY&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=Wnfa5g5rcBrihIpvRzxwbQ&oh=00_AfGzCC_dHBQfA_-vTPkraJf3Kx6sBA_DZ3nceKXotfRnYg&oe=6805A920",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489888503_676403045077879_8959229462891392528_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHGcCLNwGyHuDkDnW_N0tLlUkyblFDCeX5STJuUUMJ5fqatF18W6OTzYIF42Or_cNH3lgowVETvtpfAlOwqHAyj&_nc_ohc=S9IeKmrj0sAQ7kNvwFGlyzr&_nc_oc=Adkiiq9bbZhuxeQaMHqiE5DzgmBsCpPBQEdEIXBtMi4IOrB8-ZaTt66Atxj7i6egwGg&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=VJmACGc7u-UkDecU2qIcLg&oh=00_AfGwI8mDiANP6kV4opigLz7ZorIf3gsGzENk1c43HGKWuA&oe=680590D4",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/490398264_676399818411535_8606469077666534033_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmrWJ55qh-wW8NwFznd0X-oOav2Xh25tqg5q_ZeHbm2vZAynNw8RirF3f6NRbkgqeyt8nrcTWiowj4gw-ms52O&_nc_ohc=T31OiUOeUJcQ7kNvwFhojlk&_nc_oc=AdnnFG6et-A9-ByesBLWB5935-eIcKgbx_jYiOJ3LqaahCQDKL0KPmvKcMXnmjgixBw&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=YVzNObR08yHsCdHWNmhang&oh=00_AfHcWKjqls8j_PXmvoCp-gsBISjEFahhyD0gv9uNOZ9tjA&oe=68058542",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/490224387_676400595078124_5565400863159813585_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHdbdwU79yX8yr9w4ZJw0JESGfPsMGMJrRIZ8-wwYwmtJ63He9y91upFrm-72z0gIASRQHxjNGPDd6DcbBcNqCF&_nc_ohc=Gkn-1QvQ710Q7kNvwH3IgNg&_nc_oc=AdnIguu9Rl0hqroyp0G25Gc-7KvD3ftZa0WmtyCOnY0q4zvihwpbPdM251J8-LeFWhI&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=1JlOBA0VdoM-vOxaBPsO3g&oh=00_AfHwoEc5KmrdAPgN-9xrEP1JWsww3ZYs2Rtidwt_qqbEHg&oe=68059545",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/490091459_676399321744918_4898261840457939707_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEZ-5Hst3pJP2ubHPI-_EQF9-reipRd60P36t6KlF3rQ-qXJgFBAkJEE8y09dhs8ghkuf6CwQL7KS5olABCsdJX&_nc_ohc=7w2LxGT5mxcQ7kNvwErFGH8&_nc_oc=Adn1oqo_2MV4TfIdY4ECzdR5MJbTvFTCbW3EeILob06hGA14Q0rWjrEAbaMwD4svwf8&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=YIgbqWByTBieCN3ML3ZxuQ&oh=00_AfHbet0cQPSOYAeheXlIJ_ypOFRVqobXuSkd-txt-cshWQ&oe=6805AAEE",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489784887_676399785078205_4107695679690418973_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF0zEoM2uQzQZThFko1Rp7w8dPd7MctVC7x093sxy1ULrNQ715nCZ5kZ_Dbu1o2XjUcDxtkwIlqkiO0O4oGJQc2&_nc_ohc=17nlmoG3gBUQ7kNvwE14Qeu&_nc_oc=AdlZeY9VwAfwf5iMZMPfgG2t8DXnryG-Yq_ZIZiWn8HuudvPmS7iVB0KBz6p2EUGwmc&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=zrNtiwYOCgh9nCDcdv0MJw&oh=00_AfE0tGAjGtOmU_7I0gXKVe9OW2RSZVUQwscrsYQGUISu8A&oe=6805A956",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489748956_676397675078416_1702173841321141653_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFCNvuXw6L1ZuNi_6RcHRU3zZqBbhOhYyjNmoFuE6FjKNGmYIbwP2dFmgyGgL3X5R0uOGuCH8oa18Q2TRYSbWO2&_nc_ohc=yFqzA0im4-cQ7kNvwF9f29i&_nc_oc=AdlO99wzWGu1724VqTFm_3a2rHwGQ1Y6TkTMY1ZlP75cCT2Cp5EbHqVj1-UvuoCgTTU&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=zd3ZnccjM_SZxT81i4oCSQ&oh=00_AfEvlhvxvEpk5eI2acPI49raO2WvyvIvaZwsi1EBDaA-pA&oe=6805AC84",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/490192865_676399811744869_1957353504802124549_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHcnvldzNxdq7bBH-AyzUrATFmCK7I_6qlMWYIrsj_qqQhO6RMUl1WOKch_Ya83lzXvMUfdCol58BwZjRcFB7cn&_nc_ohc=pmhKD6UkRrkQ7kNvwGDPSR8&_nc_oc=Adkk3rpUH6GoOwa5doLhG5unQfhCmC-FwCbzQvjE-Nk62TCeN1GrYGRWcCe5TiqabPQ&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=vnGdseCU_E7HbWHSacjckQ&oh=00_AfEfNTVDVLl0igylm4oLcQh2ySxnzoT8zu1K6RhqxIQkwA&oe=680580A5",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489589974_676397295078454_331284743971546555_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGl62mHhlU0-TZXjel7hIF8YzPOeAgYZbNjM854CBhlszrreWRfPMcmA5OX3iOcSP7xw6kQaeZLSjS_fFZSMFZb&_nc_ohc=F_h4dkmm6oAQ7kNvwFtw_O5&_nc_oc=Adl6jkrA7JDdcrkU7fejfLjj354yGbdeVYbjHY6cJVNZqp37RZCp9cfbVBVoRKOPk_0&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=i6hVWC1CK8U3HIhzmZs1Ew&oh=00_AfG8JLD-rw5cB8AZslaBTsjKV1OX6afK2G3mYChZCDu6mA&oe=6805A022",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/490079200_676391498412367_5288538446000123965_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHEPsh6RnObgvj-urEimpsnfrsYCmtCNrF-uxgKa0I2sYZs7NNvYAc6xJGbfGUyg6rqpwx6ujcNa2ECq01y-Uho&_nc_ohc=lXmf0q7nW6kQ7kNvwHIwUNI&_nc_oc=Adk6nwW7eZeh2sU7-CLPNY6uowjh7iWRo0fDCOQ6yLbO-X8Wj2qQpqRPS0ai-wpDMRk&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=0qSiZsz1X9TdjE5oY3y49g&oh=00_AfF89qd-1ejVibwDD-_KRbHTHUEXYsWMkzyDde7FZ6moJg&oe=6805B5DC",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489761933_676391071745743_5959260465264396823_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGb0g06rv5vgndzYdwqIKORa3ZEXPMBqCFrdkRc8wGoIa3dVad597YmNBTssT4mPssyJ1vC6qwC75mk8x1sZ_Y9&_nc_ohc=ko9tq5iSt2IQ7kNvwFxkqNK&_nc_oc=AdmJzBn5lQP9OFN3003JlpMQUYPYB6GGB-x66-PByOUngkZ_DFfRofEwaO_HtlKqZLU&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=hyHtRKEmUwgkfxVrmB5cCg&oh=00_AfEt-tQoDqTsg98jkaQKe_ZtA9IagaQ78eTgMLtf4YQnJQ&oe=68059A0A",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/490288529_676386355079548_4270315843291103452_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFYUMokWaIwTToRJUfSyUglzRC5MfUTWxrNELkx9RNbGmzA4Oygk5oFoi9qkNhmiYfc1WUPAo8geD8_rmg5pH8-&_nc_ohc=kWW98ddUy6IQ7kNvwF9gXek&_nc_oc=AdlM64UuRDGOQO1O4MbIwcD4htAbOgIy5A0ICYx8jaYzgaADsgh361CzsaTHdG4UXQY&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=7DbT8LJZ3nj8LjVaGjgMuA&oh=00_AfHXt5jIGBqPwRuSOiQjbn0ctSLUn6Ch0cakZZZbMAD5Ow&oe=6805B21B",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489530777_676419168409600_4874143111041904016_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEq6OC3llIgFErlWKDOf4nsuyUwBmqOcq27JTAGao5yrWyq-sO6D08HvzNwrKHuT2Q1fOFMG61YIxT-jCIulbQq&_nc_ohc=yfxogkfS4M4Q7kNvwF2LbAv&_nc_oc=AdnegLMrpHvTLLUrESP1qrDwfOdJxNN8-XJntLP61ntz6cVENB6cOSCWwn8ORWuInbQ&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=lZ72YvIaqh2__AlE4EN_Mw&oh=00_AfGD5HJ71Y2-znt6-j49rjDS4xuK3gb1_royc_lbDWDEIg&oe=68046EDD",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489158772_674201518631365_7568726674996577532_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEC9iP5zYra0qY-uH8ynPDRBMxJlI9szqIEzEmUj2zOolpm4oHAOCIRxesoSBQOxFdS-2W5vxC8qeGpO8uS5FLd&_nc_ohc=JN57UBLzgM8Q7kNvwEXUeNh&_nc_oc=AdnFj1eKqZfDu7U6TfFoZJ-PQMKf33HYdwJwQgkiAvZh1yrUWU8nugsaRmXLTlYxmwI&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=lLXjGhN71Aykva9-4_JmJA&oh=00_AfEmZ3gC32j6-CQ6de-_BMDUb6yLctERqYtbxqJVRqHHEA&oe=6805A135",
      title: "Missions 2025",
      date: "March, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483106064_654588850592632_4737212606026413573_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHa88Zwo1BekOND0Eu6YZBtsXtSknrVrS-xe1KSetWtL2M48667Eef1npwvR4dp1qSnvj-qEhCwyUCP5m6QRkCS&_nc_ohc=WWXOiBqKbvIQ7kNvwFqZ6Ab&_nc_oc=AdmcLIIqDOg_SusXczdHQ9wS0xCKPVK1AVOAG3X7LdTo0QgndaMvJUYNZl5uOtb-_hQ&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=VOEOp6uvG-rhQ6rZmu_cfg&oh=00_AfFRRrOlrBndCCtKp-sqtXbbPyAeE1roAdqwMRlVvCr8Dg&oe=680593A9",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484292102_654588610592656_8809341980365981391_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHhnhEDhdpYN8nOeB8fnu2lOoBYb8vWqjg6gFhvy9aqOJgHhbPI74-Vgj7JJqyQ5gG0y-tsx7jyCaNCl5OJfC3m&_nc_ohc=_SsTler9aXUQ7kNvwGx3TKw&_nc_oc=AdlRIYx2gfeOkHk9-vJh3WTG_jm6hptorZgi9Dw3B3NLuF1dHJ4VQCsIM3AJ6TV4HGM&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=EYpkl6S_pOJFQggBcV9wmw&oh=00_AfFHEI83zJn3UB529W96_BozRQH3D5xecezKT1M7uE2fmA&oe=68059DA3",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483065857_654588593925991_2742461241270871051_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH2QuDU5UbJn-ZyCJA0ix0RMCITEpvX9KowIhMSm9f0qonFx7tc5tBgcDKsWoobyFKuzVfR2bJpdmI_8Z2_vrIx&_nc_ohc=bwpDhJxBckoQ7kNvwF10-Ym&_nc_oc=AdkB1VqiLSP2ZC8mq6H1gyE_xo15La-zNJtSUY96hYkuQhXggaxagVreOljbgZwKRX8&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=Um4TBpx8epCnck9Sk9pUDQ&oh=00_AfGnupGBYsP49gMeeBn1kpNyxO7-AivD-WUBky9EmLl5Lg&oe=68059E40",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483101933_654588617259322_2965784406423751296_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFsH1MK9SR9vmZBqNS9EVDvzVhBajO4w1jNWEFqM7jDWMK9bnzuwzQ6Dr3-5geL9sQzNRd5h7eSPD763CBGOVv8&_nc_ohc=76Me_wKno3wQ7kNvwEwDQ2K&_nc_oc=Admm4MXPJ9GBnh5k2noT955H0szjy7G2eYHoi-RCsktrlhgKJsSpY1wEP_uJaOAso0Q&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=yDVm9GVa1-Qr_1yCyLCE5w&oh=00_AfEjOHY9UT7w4T5iDWLGHzhqM_XfQX_HCXc0Z2-1k4ZXQw&oe=6805BD04",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484307036_654588807259303_6388376709105674538_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFB9eQ9sgEZTs9oGX5A2lo0LOwdHnphOtYs7B0eemE61pEWMjG1We4AsSpuVszslUL8vy7b8TD1amZFCOLwClte&_nc_ohc=ab8H2X7_414Q7kNvwF9eqbs&_nc_oc=AdlVSeBVFk3wdOmS71g01zL3cSWh-0NA3bhwosgUL-OyWZqXSEvW8kx2lZx4Zu9HC-k&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=PNqmw6CHjOnTyCN_XCVRFA&oh=00_AfG5Hm3aBHcSN1OZ9m4ZrgBdxVuVpPCzB3eiq4HZ3ojUjA&oe=68059906",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483101676_654588943925956_7151683738468758073_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEbAHytgIxNbqUg1hTvvU_kyuUgpA22nZLK5SCkDbadks10dQSWFlmQB0BtU-A0IbCbfCj1_MINu9vsIUh5P6S2&_nc_ohc=lnVpoY5bYL8Q7kNvwEoLdrp&_nc_oc=Adno4LZNDpN-sbrOwmfC-dFapfc7AqMXu-8YwCWgMeRZcwbemdtQwSn26Kwt-8Phn4c&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=8f4HuzMroVF1TSkgrYsHBw&oh=00_AfHQi0KCbdv4vfKj3AoweYloKRfQ-ArWRlKoYAkGy4_Jxw&oe=6805978F",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484287808_654588817259302_8361264832186123771_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGWmuwuYVwC4rUinSuFJJdO-VwmWxLHshv5XCZbEseyG75TPtGfaP7piB87reO5TRWNzzp1Wm8rQJ97f-iz2SKR&_nc_ohc=HLb4clmCqlIQ7kNvwG1pXng&_nc_oc=AdlbirCiprr1X4DbHzgcQbyV54jveNYJYQNyReViApPClRlgL1JgBJ9HNIzNqaqQFHQ&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=lVsdsrAd12Fn3L9Z3ThfFg&oh=00_AfGzPncFCOnIk_pSKcp54M-wzum3v_apSEHFAeeY8puY4A&oe=68058FD4",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484544927_654589000592617_8677730181756780516_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFCLNlUYxeXMNDzqfJPANp5yGSg0sFzr8zIZKDSwXOvzKfNU_G-gzio5NnG7r3XRnJSBi_wTZvoG0lchggoOLtx&_nc_ohc=gIX1PjhTnTcQ7kNvwGHQb0w&_nc_oc=AdmQp5COuw1kckOhqJBLCHrxxEH28AyDSBxMlMY6Pz9LGLoMSSG7ostpfT7GJKO5yCY&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=wue35PTs_EsTVeyQ3lQqJw&oh=00_AfG6HAYeMFkUGXObNuIppozfABAmpVzuI5M-10StRt01YA&oe=680589DE",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484615283_654588947259289_9205012122382815759_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGnOw1CRM7J8Zo0t-3pMSuYVPyIzEiWkslU_IjMSJaSyUTsxd2LFFMQkzQ7cgG2vFUtn8auLiIGZ7MPn3DjTre7&_nc_ohc=_a76-DPAxnAQ7kNvwF7RzHY&_nc_oc=AdmEr3YiaogNn0O8QTlvUmLr5K3cNovx58XnjedEM7BiGi2X32N4DobJy1wYLD4b9xQ&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=oQm2xQH87TPGVtussbb_wQ&oh=00_AfH7aOeFOPwOs4u7vJcGKg5xWSFDaOoLCy6I0Dd57r2neA&oe=6805AA5B",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483099387_654588830592634_5053389212025049057_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHYB-CadhAmusg11Nm_w39EHMCT1NVIknEcwJPU1UiScQ_0u2DbPmFbFOGcH-XphZ1PHgmHExuu12rRgEgptNro&_nc_ohc=TsLqjCnx0xwQ7kNvwFdFBlm&_nc_oc=Adn1tNEWqFIlLc6BO-i_0GSrNo_VFnqlcWg9_upIz42yzCvgkRp-M5S5rHEql602q_g&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=cIIdsF6c-BqzVCIiwGRiRQ&oh=00_AfFSPqZMbDHVL7MSP3l5wGsnQrTZCJT3933E1PsfOkMk6g&oe=680592F4",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484437883_654588877259296_2063135140913944798_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGRxNjMNb-FO2-BcTjKNErFRZ9wiHgmFpNFn3CIeCYWk3Uq42HWCLOvfh2arIcAnHpybuAVxgz5Q9XQA5khDdvN&_nc_ohc=CYWt7mC3wqUQ7kNvwEmW3zT&_nc_oc=AdmKVG2q-f99BIdspWJsZVCwvLeYjy5aQMJO-_Jf-nMy6h2vUzkAJFWS1Vu5Os9SoWA&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=nPp7UzI0ZtCANuETwvazYA&oh=00_AfFcne1-7jAvBAMNVZnZ_nMC5Fx1kljydEiTYi0OG_beHA&oe=6805902C",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483100097_654588910592626_5193956133737237615_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFCg7nloTceep8banQXdoLCUxaWhuaWCTdTFpaG5pYJN2YZqFCHzXJ17vaspiODLiGUNa-LOsm_-3mBRG3ejtKF&_nc_ohc=n_Ew0S2hHIMQ7kNvwGovWZr&_nc_oc=AdmEuO7Y9DdZMM6awKvaKAr5c6y5zVDXPDonSHVJ0Q8IHnVdD6qAjc_i9RyUbPwGrdg&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=9hXFcf7YoXbj2nqZ3dmQow&oh=00_AfEWj8LBNNyQ_xQOKEAl3PrDEbJrM0FEa1XhGQlDlCp56A&oe=6805B47B",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484573540_654588967259287_2684736255903562663_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF4W1yeJDLAjixIQgZ6MtL2P69EE7tmTOA_r0QTu2ZM4A3cDZ6Q6XMMV3jnspISQMUHAau7D9tkXDEzMJ1Zzje6&_nc_ohc=HwlNYOUgD2EQ7kNvwHMv8w6&_nc_oc=AdnkCC3yRGOgz9t2kvj1unENrXkuk3wMQV2o8HCP9xJs-U3_MqWK4aQhvvO03wl2dZI&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=kRbiXTFEYXxct3QZ0VL2hg&oh=00_AfFpcRn5wLcUp26xDCTwYXZFFJjBl1GgWX0CNJ9KsVnrAQ&oe=6805A0F2",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483063551_654588980592619_3404071134541419371_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEgjR8Bo9D0oiupk70qwRFiH7FaLJqJuVQfsVosmom5VGtRK2wDsBXaptljZMiDEY62kKZpmT3gOePwv7PWCnYb&_nc_ohc=oItDrN8jd7gQ7kNvwG26OG3&_nc_oc=AdmcOsSNjRnQgulOB3Mxg-s-EVtFft1VodtF57UwerIGpTo4dzcb_j--SmtPrtabRr4&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=1OVRLY9tP8Ce_l-KPBEsug&oh=00_AfEQtnl7lHq74EDmsOJZEElDAABx4O0-6X7sIHGQuWHyfQ&oe=6805992F",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484326891_654588643925986_4566645138956201448_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHdDb7_bsa3NfaaEMtenP9Xs8JoGrV-lsCzwmgatX6WwJLXpNIpU01a1ICnbvtWmLV1laI9SfDPgL8dg74PVihf&_nc_ohc=b3L8LFQVz4IQ7kNvwEdtgT1&_nc_oc=AdlGJUC9PNouC_IFr0njghFOR6zU3_XragPTdEJj44g8scHlp8lmx1KPjbf58El8CT0&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=jU1xKAecgwFPGEvmkBMDNQ&oh=00_AfHslHpFtx8ovMZ2arqdMXVYTGlP1txnYD8rzEosxKCEeA&oe=68059117",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483064254_654588880592629_2535472946262251403_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEINDmzXLdZ4NpmFL3Kdx5HR_CQdTQfv_NH8JB1NB-_88cAV7H_djhmRlk7PiIij_NpcxbqvQrH_QwuGeG4u2QW&_nc_ohc=6rDp0oLh5coQ7kNvwHnp7OM&_nc_oc=Adno24lWmCNV5j0tEL5r8kLNd4huglPFtEjTMNq1D7cIEwM9vf3qGAETomy21bJX4PA&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=9OeOanVe-Kq-ZkKOwCT4Iw&oh=00_AfH_pMiQoi7rXQ72N1NTfU3TAjwf29jozPLyuUF1cDJVaA&oe=68058CBE",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483064137_654588717259312_8788601575867933458_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF0tOJXImMRhUEpxRE_wglE3P_YUctvRC3c_9hRy29ELUezeaANWqsonesLaWKzrosCFO7HAbRUuVHOUKx5koy-&_nc_ohc=fV0LjMm-k88Q7kNvwF_M8pH&_nc_oc=AdlhX8WPfPuUbJEHOQrHMjHHqo_KYkq1S4-yyPxNlOlYwZ6bRG-pEqWakVZ4jRONFiM&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=Txyz4taaZCsKJuBhMREFyQ&oh=00_AfGp3vTb3Hjx3xuG9gN4y5gndQo6BEt6RkJKQqgZ_5WKuQ&oe=6805B57D",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483102903_654588713925979_6565973301326884063_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHja3KpZbsVLUwxcn-6gMaT__xvUlq8Anf__G9SWrwCd9KWZNEfqVekZ4no_uEZ4jaaBDYKYWql5yII-I0oKbv2&_nc_ohc=0zDSAmqkl_QQ7kNvwE2HHEc&_nc_oc=AdnDgZkaE-j3y3LafYpMqc8bJj6pLbYkRZHixiNDkjNtvZlOJmM1CrMjE-odaGAc5zg&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=J6vYCOSbylVl9CU-LPTBWg&oh=00_AfEUY5knRuYIz6ORezcV-9NTYkrB18CHvns0ygBA1rHYEg&oe=68058DC5",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484363037_654588727259311_3053859385820929322_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGsO_bwe0l_XvTTFNZPfWHFojVq2Xbg-X2iNWrZduD5fe63P_4E-rDwO9PcI2UNYt9ZU3JwCD-C8mrCIKXzw1sm&_nc_ohc=Kl4jijCBKZgQ7kNvwHV2rg4&_nc_oc=AdmVIlZ7HorOFf5Zj4TnRtfyL61WfBqz14XUevMxSg8QuLeE99s2YJ3diAe_cUr-XH4&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=fDh81pZ3yHih9V4uBGVrTA&oh=00_AfGKbsqXdf027ami_uFi4iH-wMRlnBnAdOIkkeU2-OIGcw&oe=68059213",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484350319_654589030592614_3656195108157904915_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGrVcNWI-idF27LaCDRjBlfCgS9Yw-T0bQKBL1jD5PRtDvNQyqP7wdi8bge0D6LgxMkG6Q-A8l21UgIYEvJri9J&_nc_ohc=5r1AeXbo8nsQ7kNvwEmUc-L&_nc_oc=AdlCgjEvgAO20LDhNw8tSXKoatfwbzHqa0ZR0pJGBFRIC6ltgEwa0hKvv4nMZ-MyQ-g&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=cHpe67Du5P0Q7TJ-B3C9jw&oh=00_AfG6Fe6jQ8JH2-GYY6_o3E8kt3QKKZ1LOPiBA4TEB3yERg&oe=68059A2D",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483101089_654588720592645_4846531274719410413_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHdEFilU5EhX4ZgVJQaYAY-Zu76L-RZ9qJm7vov5Fn2oouPV2wfhpv5gsFfWR9y5CLQZbGqobKjUWu5msfpDfHz&_nc_ohc=42ifLIpvLHEQ7kNvwGIlhsR&_nc_oc=Adk2n0gHB-cJIEA9mYIu-Zd68uBHAMmBRSvmeFNujdqFZorzUoAGd7AMEIRzqLv_Ypc&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=NUxTBKnH730eaiwxbkNhkQ&oh=00_AfHwhJYPubmgbwbFUZYf-LIJF2YDfD4yr3Ax64Dx8boKzQ&oe=6805A56F",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483065126_654589050592612_3713268359546254086_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEZVC_uygEaTbCXKpIX17xp8CNeozifldrwI16jOJ-V2g_XJO_eCTMaMjVs0nEST2klNJKP2CNRILVmF9ZMhGTN&_nc_ohc=yL36faR7SD0Q7kNvwE3TY-J&_nc_oc=AdluvO0x4I9mAi0w2RvgqPu9os9sQSAniRiKN-WojDWQhtGVrHzDYw7dukcJmRortRY&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=2KBrwdwJ8XM7M6uvrPddkQ&oh=00_AfEWIBCzEXe-VLVihMq2FfTgWV0l70j1HWmTAB7Aow_qtA&oe=68058F14",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483065433_654589023925948_6352734801468736756_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGwVb2u924vUGZw4CbJmmoc1Pz4dUao8JrU_Ph1Rqjwmq6A1E-07s5etQJsf6aCB4U1xMY5LC_SaZmKeMotDpO4&_nc_ohc=P-cY8HdZJ24Q7kNvwGxpVju&_nc_oc=Admodj0DmLGhkHQ1gh4BgZQHWtTCAMyxiC4tPYQGlaEF5XRIyGHcyZZjXi0o0zsqDJE&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=hwLInNVG3dBt5uiLUg3uzA&oh=00_AfFk9d0n0s3upQaxknJuYC9SSxaKnuOHijq7CdyDCDwaxg&oe=6805BD87",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484336771_654589087259275_5219080205135496717_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGo4ONVDwJwlk_0MhTmRcrDxfDDqGGLQATF8MOoYYtABEmuzRCUcQNsxCcmpEKmc7kkfZQfFJA2Yk0dnZ3B_gMd&_nc_ohc=PM7RVh_DuM8Q7kNvwEwalSG&_nc_oc=AdmO3CD6UtlNt7DB7t6p89yCT5QT99h6o3kpq0g3iQzNIeIwCqVGCoMwshUXEnt0gR4&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=1UfdJpBIbIX0kepOJct-GA&oh=00_AfGh5YnVBCOrs0k-NwP-jvm-dGNVo7p763vtWg91y6DQZA&oe=6805B4B4",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483105076_654587547259429_7094519507842749700_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFmPyOEhW18DS56w75ZxkT3NGOWyBwS61k0Y5bIHBLrWcheI3yITKpZfi4UsJ2CVHOOELAvOUP4-LLuDRinWixn&_nc_ohc=dDfZK80pLKcQ7kNvwHzT8xo&_nc_oc=AdkTRnvUT87R5oiscYdx10v3WI4Fuvyn0kH73yCF5elwSKIZicl0oijFOMUH-VNs4Vk&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=gSZAlBUXVcKwmv5rPCd4Yw&oh=00_AfHZqSGejBHv3iaSXnFjM9yWxY-FwQt0lT95MvVzJRnKSQ&oe=6805B9E1",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484272176_654587680592749_472438345208548340_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHIDdpjbHPwCwo1IliCvdY5t-aOw2emc2a35o7DZ6ZzZiPnwhanFbCzYOA6J67owHLJRsKYga_g_-RMezvAI9bH&_nc_ohc=PuUNUL8sFowQ7kNvwHXNqfR&_nc_oc=AdlQ5SRH9u0S-J2As2qH6jP-Roc41PwhXPqceGDqgUbSZTfQfTMk2WxAlqbONXteTig&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=LHXEn0yOuTKN52VvpnpqBA&oh=00_AfF-9AVeHULRmtQX7ErijQfOkSHFIErsrnm6BgferB1_rw&oe=68059938",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483104024_654587587259425_561076596145609719_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEi7uElZC0a1OH1rSlb2-9iGqUmbXqo-wIapSZteqj7At2gn35jWn72Qrk6bFrdEbR4yZDlbZaykg1ccS9fGnYG&_nc_ohc=p8m40DU-5jcQ7kNvwE5j8hB&_nc_oc=AdkGINh0akskGJIDIamuhWRqvbBybFajkq-3qQD3UyUl8SYsiuwsSEuzZhtuQLiSGL4&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=sC5xKHwfWS4VNkbxWqysIQ&oh=00_AfGPEALNqRzfEx4OKHMdMGCsGCKKJJlnFarQTAav6Qkx5Q&oe=680599EC",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483101944_654587660592751_4953973958698611510_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHpZ8Lv8eDBXKsJUgc29Y28P4O94SBrx8A_g73hIGvHwMab3O5EacHLulDju-iCwgXMrfokJbsZUMPM9DhGc6bG&_nc_ohc=9Ko0wfU5iw8Q7kNvwHig2Y4&_nc_oc=AdmGS_kW-dzmkoMQU9O_jYcIUK7sic0F4pOtvqkr8lUfpd_Nngmo2AvD8wY1_NPyyHc&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=IggP9j-AV8r4knucNnfvOg&oh=00_AfFfVkDME5tXuhTSymyg8aK0UwCGEwzyXYp6UcCDlgKaog&oe=6805A66A",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484347874_654587893926061_8398486978206077090_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGd9wn7djAaBY_zN4t1OJ7oD9_UDcKV4ZcP39QNwpXhl3E4fdKmErDEbFupCtI6S4iWjtSLQMVe-0XMD83A5fg1&_nc_ohc=5EMqSAA2yFUQ7kNvwGAmOTi&_nc_oc=AdkWHnFbcq-L6gHRZW72eCwblXapKBS-C50frYQtBp7b3HnbTE3u3CX2oGev0pYjmSQ&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=O0QXAqFyzvMkd8Hff02Oeg&oh=00_AfHnEeOf5QMVTQM0lxS3nNCu5Bm9ifnKfAR53kXalBWI-g&oe=6805C89C",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483063190_654587960592721_2555621078389315941_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGCMJRpmmz4TPEieZUSrs-vq_LE96Osr4-r8sT3o6yvj5zh-IBz2ul5I3S-qfsLnNim_mHMvTs-7rmodysKOoIr&_nc_ohc=5X_hS52kq1AQ7kNvwFE8E0C&_nc_oc=AdkhF32SGG7IhTDz_-GuzL2EsTYGEAVwW-QobaBKfnvf3k51cSoKoM5sR0Ub15M-7jo&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=fIlcHmKggc6pHebQZMSRTA&oh=00_AfEYyVya_3k6JhG-l202CskVtsEuSCDLsM8reTh9UFAhCA&oe=68059FAC",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483520037_654587953926055_9161088427428911895_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE_qCHFuoT9Mvy_GhyuhI7pvqO83x6I9p6-o7zfHoj2ngBpJvLj1de0rc9HE_btpIMpPt31U7SSx7dgIvRdhqKA&_nc_ohc=DnWrvPzkXXMQ7kNvwE7dr8z&_nc_oc=Adks8PhIWkU_ROlaZhy91QpMHfu2bps12psY36k84m0kdyGbY4Yrvl5nUUtfCOQjPLU&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=7YEOICmSMmnEIp5ZrWiqtg&oh=00_AfEdWq72Z0Bs6tprzN2fTjt0rc8t-ZoVlFL9NzMBOv99OA&oe=6805BBD3",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483520037_654587953926055_9161088427428911895_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE_qCHFuoT9Mvy_GhyuhI7pvqO83x6I9p6-o7zfHoj2ngBpJvLj1de0rc9HE_btpIMpPt31U7SSx7dgIvRdhqKA&_nc_ohc=DnWrvPzkXXMQ7kNvwE7dr8z&_nc_oc=Adks8PhIWkU_ROlaZhy91QpMHfu2bps12psY36k84m0kdyGbY4Yrvl5nUUtfCOQjPLU&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=7YEOICmSMmnEIp5ZrWiqtg&oh=00_AfEdWq72Z0Bs6tprzN2fTjt0rc8t-ZoVlFL9NzMBOv99OA&oe=6805BBD3",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483069122_654587630592754_2363157921482490437_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEEu_tut_WU5UlmXmt-rd0LI5TKIY5yHKQjlMohjnIcpF9CHgwG1fLrvwvEN-UgdvzoxxZYSSVgY7SsAZbGKFN_&_nc_ohc=RDCJoRh67KEQ7kNvwEHTqmt&_nc_oc=AdnF37FaBpTO4ouVJcKw86lrdjEi-BWQH09fwkxmHAZ4G5GhsiUFXxYGYzmFUkUkqAs&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=_9GW8aJJC2La5WwGM9Nh3Q&oh=00_AfF9_yS8eCDHXLIZuUpaQwRSlKhTbqhtg-TdBlQoTWausg&oe=6805AE19",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483857223_654587760592741_2101639569471668280_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG9Q7MMIo8l6uR2kiHAM_91tp9aTy_rdeq2n1pPL-t16lBModNu_vTAbAyqIanuSII5Adj5Cxhra7PJW77_gEFI&_nc_ohc=FkoHsP1RUNcQ7kNvwECY8AU&_nc_oc=AdlYJBKqu2Ut80vAMbaE292bxioYuZJcW2qNdmKudFtIYqR5y0TiKnHK82wk1LDkwtc&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=BtzRRLUWQ0pzxm7rionc1Q&oh=00_AfFaZbWxtjdi_4XuK3gsVbIeaM8m4q7uyQiWWc7AoRpIkQ&oe=6805C3D6",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483101530_654587717259412_1331992541338919065_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGqpKj9uHki-CgWvBIxZULqXh1WzeAmjWNeHVbN4CaNY57QmmgjXhyRyZsU8jgJY9tX4nYLNjJbzrx7u1C6thDk&_nc_ohc=v6RXXIkexEUQ7kNvwHPeRRT&_nc_oc=Adny5P_xK8RwsjyIOBhwgmls_tnmpua9rrj8boD7lGLqDRIRGHKYwkTra66Xk49nG2k&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=9vU37luD_hHuYXihZ2CH8g&oh=00_AfG4-AXTWU8kqHYOihtVT5epCFsyDez8Jg1bXLOiRQD0BQ&oe=6805AB45",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483101289_654587530592764_128591072617761770_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEtQPxCrLa_Re5SZc0vgjz6S_MMaLLNoJBL8wxoss2gkFH3c89WRbn6rPO4yIBf6P_Lhe1Ojy2E_nSyZkHK9EC8&_nc_ohc=hCfEeNjDBfcQ7kNvwE7TgDL&_nc_oc=Adm-IFaCsljAiDBr0lFipUwe_Fy2shlyauX1YjEEHmFE7_DoxesUGc7gEqPNDVzT70E&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=DlTzmmptqC-J76Q0ETa59g&oh=00_AfG63r05DlnPLHlXs-febLKmcJYxjwL5ri4Vbcyr-K-fZg&oe=680597E9",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483098293_654587770592740_2796455640658724566_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF72dBMkRGeU-DPWZyrQYS-JQHVKOE_5DwlAdUo4T_kPOpue8jC6z4IsqEKViTlO5lDTUHLGw8GYGQSpUfgIDLr&_nc_ohc=vTruWn9wt-kQ7kNvwEU8wLw&_nc_oc=Adl13gRZgZ96qtNXDEnsXbHJjzG6exxGyhK8mYy6xiht_9wyux6FFXVXmsh_IYQXQIc&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=8Q2153Dl9PSesXfKipoyWA&oh=00_AfHkmcu1qmSt0hzXDK48ZKjeOXUbr4tOOy00nbuKpJIt1w&oe=6805B24A",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/484290631_654587833926067_8285290280390148196_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFlNMagOZe8goV0ErcdIrnHSdJtiGCwLCBJ0m2IYLAsIGL0GGgL00qdBRqN6hVOGpCpDh25JEzzC1wd01njx6xm&_nc_ohc=7P0Rbxq8jtgQ7kNvwH8nwk2&_nc_oc=AdlVORYxsOBSErGBJB0Mv4AE3gnP6FmTXsyHjCLNYbUloLk_AA9Z561aO9201-jE_RU&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=_WnZPWRt05Gt8UtG3GtmFA&oh=00_AfFbBOUuOBcAc52G8Zwr94x66xyJ2CYPo5tVcy1Y1Thl9Q&oe=6805B558",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/483104619_654587777259406_6632460778883474907_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-6zxTWOwN-yeZleR6U4Jl8_pk96KpLtvz-mT3oqku29KykLfKVLGGsOtrGH4ibObPiHUjATgP_2cn1ytBighE&_nc_ohc=lvOeaVYRxNIQ7kNvwEwYwKy&_nc_oc=AdlzkhLwMi_KGTNOYpYFoEWaW8o82j4vn3AuTepjEHFkjSUMYz75l7L4jv2KcW2Q0Do&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=RLo8Y-vutCQhFeuBitUitg&oh=00_AfGjd8avnkCkAsu7DX1dmcMhJvOCCRIi43ubIKSvUJhT1g&oe=6805C5D6",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483108379_654587820592735_6040938324624169310_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGXLNQNhepwN4t5yAKd0HbUetGik5drkR960aKTl2uRH1cRc41fuEkCj5JzPJh1OQ7Ko8U1c3XxFqVSNErDp1Px&_nc_ohc=3dd7YoszNCcQ7kNvwHf_-I3&_nc_oc=AdkwiRlENKjV-I9ILSmF9no279LOuhcjktyqJbif4Tfn95Iws3IgPJYYy4gRY7TPxPg&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=MvKuIhNp1OLPgqiRaaRJ2g&oh=00_AfH5bcGYX2shaUDK3i4V57AJUjl6dJzsO3tdk6w5FwPQMg&oe=6805C39E",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483107152_654587603926090_7328588582395587985_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmK8yy37ykhADVaZER9hUuMH-N5xARnQ0wf43nEBGdDfqciZ9seorT7Zey1XRy8rsmW3ds1nqN7tYxX05pLogU&_nc_ohc=a-l-i3sWp30Q7kNvwG-cUMC&_nc_oc=Adn0HH2jiILwCPW4gc6waRIoaiEL386xirUw6vcSQZh55zR0IhFrUNeddzh97DqIc7E&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=r3V_pxAWwyCOIfOInDAmFw&oh=00_AfFBDpP0eLcF5bFzsWpTh9NuErpb_FlKDohYcCKs5hY5ww&oe=68059AA0",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484309088_654587797259404_5643240260014927424_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGE_rjQL6-4ASO5K9mIFvjd5G8dgD1tmrHkbx2APW2asaF4uXpxCF8-JFzLBi6384AzJUsaBiof6QF03E3wNHxf&_nc_ohc=11ommIP-yncQ7kNvwFM6_u7&_nc_oc=AdlW7URsqDYhgeSWXMHgDwCCChHGlP4Kp_PtWtPqiJUkGSqyiUVq3iusHgd0BIR0kSg&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=fWNtCt_Y9LaJ39SrufJ4cg&oh=00_AfEww-YIOX_gdh7iHswOd7zoYNk-JJM2dErCGZKDa6x2Ng&oe=6805B7ED",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483566972_654587550592762_2987446411659145447_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE5UGDszmTEwS4clZWnBLPnACsgABkWKJUAKyAAGRYolbXFhwFO24PlMkPJ8jB_bLOM74I_MBYo5V97DT0z4clN&_nc_ohc=enk8mQASHQIQ7kNvwELx-EA&_nc_oc=Adn7aC3ore5DIHavtaHx180ySNdz0ZJ2CX1g3dSRhEThl7VN0b9VBpvb3YBBIDWwLm8&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=nFJRnU_AobERNikZW1rdUA&oh=00_AfHbOArRJIWlxSX5PNSq0mDlMnsQ2bn7YkVamoDglpVyjQ&oe=6805B90D",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483069535_654587620592755_7121545161394256630_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE48wxCHV6n59Zi4NMKcPZVuvuPWOL38726-49Y4vfzvSY3KJx4bziydrS5oL88gvrgHzP8F-qvvfA5iEUJFFIP&_nc_ohc=lG6i1ZPtIycQ7kNvwFPVcyu&_nc_oc=AdlRkxGHx8KSY4vfXkDR0vikuDvbHSJufZPl4fzMuBBQyPFm8Eh_dzFHEKiJkFlNgOA&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=YXbxD5tpNTqK5rZD7AMC0A&oh=00_AfECFPaClgDSC4H4Cq-MXtlLjSeQz65gg9fHTZbfd4EKuA&oe=68059D62",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484314848_654587840592733_1011396085714087604_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH1qwNxfEs9dnqQFLnrYQgEJ3nyaXyH7FknefJpfIfsWf1Zl_p4kdhqg4hBrG7yZxbrlBoW8Ndgfxi_URXP8rdX&_nc_ohc=h0pYFw4t8SUQ7kNvwEWHVfB&_nc_oc=Admh1CLCaWffwe0XtiETo5O6rCB7c6sA_0iaeu_o3TV848SkQeI9aksHLvIYE_9T0TA&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=oomuABirK-bGShWLXzPg6A&oh=00_AfHmksb2jKKgQi9ruQjwjLb6maOtdy_wWD6INg-uRBpqaw&oe=68059AFE",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484306297_654587613926089_5779118545952204673_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGo96tFKmbpS-XfJwKNW1p9fmvRhqJiuLl-a9GGomK4uSlDjXzKhQ4_PUGTlqAEUNEXkoK2Y33-84t5iTgdemr8&_nc_ohc=ovQZRl8sFSEQ7kNvwHxWONd&_nc_oc=AdkleE3zDr5nOVvZOhoPh2utBc6YRxRy6TWspFU0myespgoKRCVuhs6Xqnrj5vvbV4c&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=x-_GSFsIgisfeCqkI23uzg&oh=00_AfFMZHDHTqSg08Ub_8nBo2pS0LEXXXGk8-AYN-xZcG80uQ&oe=680597F7",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484242664_654586450592872_5095110072488770198_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHyDzEMvbnr5chOF3xuVBFBoFC3ObrgdQ2gULc5uuB1DWfFKYH2as1fqrjZdMQu03LVCdokas9dUhoz-DtEBMKj&_nc_ohc=LbgxNHexDnYQ7kNvwEqVK9t&_nc_oc=Admawcle21AKT72SN1XVv3ZHB9ndAy1xvFvOIIOYINGgrB5xtD6C2S_vh9j5ihDtoJU&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=U49IFx8GqmtLmSv1rzoeEw&oh=00_AfFNWhXpavB87v2tKO6NBwXKyvxnpEEWLhVf6CUISGhMUw&oe=6805B5EF",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484041993_654586447259539_7502605177326043235_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-9GjEzfq2py1-478qmi3mwrGoWzb9ekHCsahbNv16QdR5JMw9vPI8o2_jeCf274QKy3ENmX_F9XV0DaKcMiJA&_nc_ohc=iSBipXS45l8Q7kNvwE-V0Qr&_nc_oc=AdmVC_Q4u5Y8TZABnMwyya-CRKd9uLSYjA2mYBqZnzUGcm--bcjg_IBNbAz7t4dluSY&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=yUgT09Oh_8NhWer9-ixrNQ&oh=00_AfF36Wrk0y0hMO2meFd4d1rquM2aeVUptPoZ7RKxEY2K5A&oe=6805C6CE",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484292103_654586863926164_8536958178679008349_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGltqSOldU74vi1YeCcingoVNZA6x6i59xU1kDrHqLn3FKPGYE4gPhsfBvcqI5sSEZrGviALBxab_E5fx_mZWxd&_nc_ohc=k_Fif5kbTbIQ7kNvwGV-x5S&_nc_oc=AdkL46JEjVZaR10pvRqaJZjqvUEZJxzC3YcpjDs_dUp5PCmMmvpwFMptk9aQTZTpQps&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=CaRtohtrqxc5GA9P19zRWg&oh=00_AfEDi5BTYh3F7nscmOojGT4YhEvcRPt1JrIc7l-KMa4spA&oe=6805A145",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483063543_654586713926179_8441917417802783740_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGj8_3DMHNuIdRx3_cr9N31VCf3BqBg06hUJ_cGoGDTqF4f6yJ7am6ev88-hRAf9E4gjBPPHtfPNZezdxdce5yV&_nc_ohc=CVYXiupT46kQ7kNvwEaWc1-&_nc_oc=Adln3Zi5m87vVxTyLgjbjY_h_yJyZffp-ha6WyFzv7c31aW9A4DgmAGK0C-eBWzupTY&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=p6UBqSzfFXZ2cRhEKuUJng&oh=00_AfGflyJUTHERsKv4g9nsCP7DbAZnL9rsfz3WeUDdxqgacA&oe=6805B230",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483065499_654586510592866_2355190419254198456_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGcHydkZAYNdcTJgoSNc8CssHmyn3pkyjSwebKfemTKNIoKCPDWNFS9woAsHvkgN79I37f06hhnmr2WWqpYjjVk&_nc_ohc=0aw2DmY5ng8Q7kNvwGjcmp3&_nc_oc=AdmZ3cvDXibY1s1tjxGjEdkubQeOsF7cHaZN81HRnMOa_dhGJdZOhRaH82qwJqrLVCc&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=1LkBSCRMYqiXhVp0KZklVg&oh=00_AfEHnppaWcWgP92YSCye09ZLxiAGoDiwghwDKl3YLPB9mg&oe=6805AA16",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/484512421_654586470592870_5226541205625218545_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGc2tnllz62RhtwGkUFGYBhU1cymXLY60xTVzKZctjrTEBtbP8y2-FLNskrj2Yffh8i0qMwlNx1qJRMMTj9lvVJ&_nc_ohc=SmsvRz_Uz4oQ7kNvwEJcCye&_nc_oc=AdnHAeDi76P8kTq5zNb3ieOpkdGuETAvTX42vRuSRMdm5MaUuLhekHvySFJo9vmrPzs&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=leu2yECQQDHqDGu3ajUF_w&oh=00_AfHeeQ-D_ufa4Ox-LDVOBhBTFdNP1Z0t6Ydurmb_oKmdIw&oe=6805A1B9",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483066065_654586600592857_4212098514994372114_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFaHIQnmLT6YqYYUAFW_gB7KQuyHlsOcq4pC7IeWw5yrmbEIHK_8SKP8Ed307hwj-EHXdVc4SYtYY7QBFe8Zkrv&_nc_ohc=woRrb6hxSdMQ7kNvwHXY0OK&_nc_oc=Adm8BJ2wwAmVL0jyhYLzYDV_qecfS9y18Np-z3sczNN-Lo2PHgZSTqxXcn-LzfGnDgk&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=W8_AgVdQ0pieIGzbWgF5Ug&oh=00_AfGx0XNRKKmYEssWtkhQ0pJi8y837k3seVcxy7aCBmvxeQ&oe=6805C0FE",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483101911_654586727259511_4013743803596544651_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEN4ByQdkjjlMnkUG-S7WcOdV8m5_T9_A11Xybn9P38DadkDvxaonuh4PZ3ll4TZgNK9p638_4sTd8HmijOrjdO&_nc_ohc=F4REy99ZjmQQ7kNvwGsImgA&_nc_oc=AdkuzcApARZU0nRRla6a8YVBcNK_tVNBvLK59WwSwrPuE7QU_lnspwOpcsv0d43gPnw&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=F4CPc8q72AWfw8y6lsvs6g&oh=00_AfGsRFkXQmPlcN1ZLjWy01Xf59W392UgK8wPszemrpsSPQ&oe=6805CC62",
      title: "Conference In Session",
      date: "February, 2025",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483101901_654586620592855_7287477080212281375_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHbUSjGUeFa11Yppe1OfkzXfH6rMESd2tJ8fqswRJ3a0odNdeft4XapjiyMtvvhl0O_Jk2X-dhlnZLMXfbtzNSN&_nc_ohc=BgYL1I89RBAQ7kNvwGrDoXG&_nc_oc=AdnhlrrWnzmmYbbUohBvpeMTdp1voBZxj-p78dl_f-EH5EP63uY0avWxGFSiDDuWAL4&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=SCMGWFnONfJeDh0cUPv6QA&oh=00_AfGQEJRq4gDsss_WkN9JbM9WcR00aKvjCTGUvtTm5TaxPg&oe=6805A327",
      title: "Conference In Session",
      date: "February, 2025",
    },
  ];

  return (
    <>
      <PageHeader
        title="Photo Gallery"
        description="Browse photos from our events and activities"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold tracking-tighter text-secondary">
              Event Photos
            </h2>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Filter by:</span>
              <select className="text-sm border rounded px-2 py-1">
                <option value="all">All Events</option>
                <option value="conference">Conference</option>
                <option value="outreach">Outreach</option>
                <option value="worship">Worship</option>
                <option value="social">Social</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <GalleryItem key={index} {...item} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Load More
            </Button>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tighter text-secondary mb-6 text-center">
              Upload Photos
            </h2>
            <Card className="bg-white max-w-md mx-auto">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 text-center">
                  Authorized users can upload photos to our gallery. Please sign
                  in to access this feature.
                </p>
                <div className="flex justify-center">
                  <Button>Sign In to Upload</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
