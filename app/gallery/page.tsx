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
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489785775_676424835075700_7319742759826009632_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHqLdGx_k9JYDN8Px2hFRplHPuTz8Xrogcc-5PPxeuiB4I6Kyhqesovj30b0N0qgUwUWnNVxNVaTLgyfItVCQWV&_nc_ohc=HZPaRAx6pIwQ7kNvwHW1Xak&_nc_oc=AdlEFF_GOd5vP3tPbaWmzjcvcvdO-JP52l4xOmVDulOHUSxnZVJW1Dq4U-67FncZc9w&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=8OI9FLV-PWUa9tMY2kRdVg&oh=00_AfEL9Tm0KMgCNqVEw3rg-e1B_gr3hfzk0uqmqeMiC-zGCA&oe=68055811",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490117719_676421238409393_5473915424548058200_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGB_iuyHbi03b9LnPmGvtTmhWW4JTxoB7uFZbglPGgHuyPdshuzY_6FC7kgqMSJ6Sp70Lq0PFNR6Fg5YVzC7MZO&_nc_ohc=FAA068JJ380Q7kNvwHvqDdo&_nc_oc=Adnnb5e5pIFW7b7XZpNUOPfTDPqITihtfDYw17yn8XwrC7p4XqEndwKL1RjeR5ce7gI&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=mhxVvCNTvGr8azAglfIZ1A&oh=00_AfGWbtXkMVySglK7sGFdLjcD-ejw1j1Wbent9cTjqoSbdA&oe=680542A9",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489760218_676418571742993_8109476247721111413_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFHT25uG97Aun0-fBkqd9LwsSUhI4yvpYOxJSEjjK-lgy4l-GpGNMYY-BSC_uTGuD7aYm09SrWPcDVmrmHBt8xB&_nc_ohc=FP6RxnDe290Q7kNvwFeBKkn&_nc_oc=Adn4wol8yfTJRtE7MEe62YFuFHTHPgzSLRNGw8YzyL5Es5OaRJiKuEKmTM_4KK4QAYc&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=rZ-_cixQ0-oEbo74uoVFaA&oh=00_AfFEXHynbo4I7FWFAplnpCU6_5zAWsNMIY4V7TXOTKDIbQ&oe=68056966",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490340542_676422168409300_2120080814495681116_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHByZKeNXkqIKgNGmzxlvV1fZNM5wUJraN9k0znBQmto4ABIZAXF1kp25fI0284Ywe4T0JRVC3VzY5BVWicutkj&_nc_ohc=aPiBbmrGQ34Q7kNvwHJj3wI&_nc_oc=Adljvn8qqIbsMEofycglUa1sRZgJzy56LOvePTaTk48fU6r6r-zynMalO3WMKxa-WD8&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=yUunfkBuSZRij17K7wNWjw&oh=00_AfGFBOa3PV9PIfRqw52o-Vg8m_-pYQ40BbMHp_9b3INWXQ&oe=68056DBD",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489906260_676421675076016_6367148398255861315_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPibVCrYZT-MPxghGONwXUJ5RSbD74NTYnlFJsPvg1NvUSkxrrLb8lvexnW_g3KUQ1ZILlWcZfkpYispjdZU5J&_nc_ohc=FOtDvfo--x4Q7kNvwEuL51k&_nc_oc=AdmOIu0eX6x401U78nhtWpySKzUbY9dBeCv_SWigzUqyorik5dQ4QGe-uJY6f7H2Q-8&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=Mtg3960Xv2GZYq09_x9Jsw&oh=00_AfHLV8xe_vXwVmDngtgl8hPBQGkXg-gUBmW1-J8k9qgX5w&oe=68054608",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489828082_676423335075850_4830026194607509893_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG9Dq-Xc0KWhDMuuPqvEy277RwHDbvPchHtHAcNu89yEfLRzM_97-dIW9cu5bnf3mERN3QiAbD9T1rTUyGu9JNY&_nc_ohc=SQDRHyGFlL0Q7kNvwEOShR5&_nc_oc=Adlg14nPT5yuGJUE2DWEOcF3H0CQR6VlmMEMAhg_qcCIuUOJXT6n_1sOAEv17UdvwPw&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=EhbRXG5_NoWbIr8kn6y2bQ&oh=00_AfFrYQ3hOFAWnnBhGEfvweAqA3nQCKU3KfcpLvhHszbfpg&oe=68057797",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490224224_676422615075922_6782555919497119254_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF9Of1oAdHlQVSRZn6SWc5xRLhiuZmcG61EuGK5mZwbrb8UY0AFdvxqMd0UyuKSJEv5fvMKWJlUwCZCtma3fIRm&_nc_ohc=19wf-AqC3YUQ7kNvwHc4hv3&_nc_oc=AdmWDS0jVYgHUM7Dm2qg-wf9ZA5DC8E-sx78KosPfE0kbUktAZll4-P1m90xnLigbms&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=sQYgp9rekKOZHu_zhzrjkg&oh=00_AfEXvIrDKfg6a5VRUyzephIQQdEdDR_3Rf8KRSqx78z-qQ&oe=68055C00",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490373881_676421541742696_406521870394711565_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFxF8y_0jfSiKhAFat34oPpsPDaITiA81iw8NohOIDzWPIt9jTJxes0ZFXC5sHHcDVkCLRFpfPVYC9F-yC2R4m6&_nc_ohc=EgzmUo5cG2UQ7kNvwGXWSdp&_nc_oc=Adm4TYSWeCmYZLmZxVLH2igotq4z6a4edJNujqqwA8LxeG2hRgE2Ciz1XLADvHKT-yE&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=8Zo62eE0rrVt9rHePos73Q&oh=00_AfHANx80376pdbRwGRrYDf9YWAL3LEolq3HNH3B9s8BfvQ&oe=68056368",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489669383_676422445075939_2925286721631416089_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGJjscHxZLGhb-hSLiQlH2HTd30dEcBc7dN3fR0RwFzt6mfmlDolcceaIwrDzgxA4jGOKc5FAH72GZp_qW4JOb-&_nc_ohc=0AQfskPyb-0Q7kNvwFqrzah&_nc_oc=AdkkmNfu7Vc6_JvYZ-LEJ3GtRW4V5NjM2rPPtDT1ZIkflz6PdYJflXInNfZgSHsn3yE&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=buZWnYDkHO_5iILO_P85gQ&oh=00_AfGSBW_hFgZJlEdQf-GLEcJla5BBLBz8BD3r90D6z_uDkQ&oe=68056FEA",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490328426_676420365076147_8339133495359547439_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFLX7Op3BXmDjesAuQE9i2t8b9sOA2CdF3xv2w4DYJ0XYG9zd7mhErIYXjG8cbCgwAxTQWw3NPYWARq6LDWDGZ8&_nc_ohc=JRfxkv8K2wIQ7kNvwEYYAcA&_nc_oc=AdnhVvFX4OjjSdJUSeXulYgrKXxCMGw0yhTDKJJbsDP3bTxrhmDKWZ3fDSbTfv1tB8E&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=MS_mSCVm4eyu7pUNuzyN4Q&oh=00_AfGsRdZLZeKOcNPB2-q4TdxWDnMMmgKFu5az4xiORFuvaQ&oe=6805604B",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490080092_676418945076289_3315705632005105776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHErczYtznr2SI_NqVye0vaqEjxMeu-Kg2oSPEx674qDd1ZggB2a4eBL_z9nM2PZdcEISDcM15lJy5eCHsGEB1N&_nc_ohc=5V7hNahlm5QQ7kNvwEHzgCM&_nc_oc=AdlLRZAPNJsEsJTZGrD1WU_gTdHGGkSDSOSgy4KVWcByhVR8t0lwAYikB-7-siV5GM8&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=6b7S8WmcZFungL7DKWx7jg&oh=00_AfE3-21Bw4bhxI_aN_Nd5n9uZZjpwwgfTJeT6hzkeaBaIg&oe=680562B3",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489476738_676417328409784_4735997883729655223_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEqy5XYHmBQs71zn6z-_AiJ0qxQ3gluT17SrFDeCW5PXp96raBmM-N43uYWbgsEKZf-zMlq45mJhA1_w3N4cuu9&_nc_ohc=JwzjxSJAqYAQ7kNvwENlgfR&_nc_oc=AdloO12UETZME7XRX5Wn4vtjQiAeH8w49hnUgbclFhzu8P1MF51rC1SWsLKMaaEX7SA&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=oVaURJuvEz37zQplCfdrsA&oh=00_AfHiNNUzjFZNK2EFYgWxd1LsdgkleO3s7Ogz_C9iobI7Tg&oe=68056D22",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490263912_676416881743162_6750149004347736898_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFnp42os3ywSkqBJB4Si4nYu4mLKCpPDgC7iYsoKk8OAAPUZ2QibWrjYJbukCOwldJILsb4RiYCEAI8I3XPotX2&_nc_ohc=YiEK51mA3RAQ7kNvwGZuJTs&_nc_oc=AdmsUwSqpTAdowvh4T7WqVp09Z-WIrZygaA2SU4YKdHF--yLNcc6kJl5bLyHAJ_uRWI&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=qDzNc8IIIWMbw9yUyqKvyg&oh=00_AfEqNfnjqggvfcAqbSDZzUnV5mKmhbf3pV--yf3Eh0kDCw&oe=68055654",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489883623_676415925076591_8700252220937686887_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF20fgPY_5ocb9-MEy_sHxtvZa-yKtBzjG9lr7Iq0HOMZet27KJVSLp1s_Ir1LZMOs335wSHsLFQFAg0cuIFDbj&_nc_ohc=cm17vM8w72YQ7kNvwFY2Wsb&_nc_oc=AdmRhICOF77DYgyQY9jdJuDRPf10MJ3p7TGrc9M-CRKCUXZcJiUce7_QIxs_aUN_0wI&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=8NqMo3_HUqVs8nxw7iv4oQ&oh=00_AfEqUiGxyBPPQRWY4NYq4cFtBhwz4GalmDMvUiJFP6RKAA&oe=6805740A",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489628034_676413928410124_828605849735505054_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG6uof5L6BSuT2l6gjjYfLCwv_N2X1gcP3C_83ZfWBw_Q8KfjdR-jm9V4Ux4juhGKdHWwmdCSXYR3ji4Wjn3F_I&_nc_ohc=mwLwutwQAmsQ7kNvwHm0K6K&_nc_oc=AdlSONos-Jyeepa4TvVTdCQJ7h3dikvzAIAiwVnJcfB2OmOk-MY9KaSN942XHsSD-Os&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=L1XBJ6izemZTtVuKjyvW5g&oh=00_AfF6DQAQmmqbCQqGei4e-q1Oh7IIqkoVLuGIguR7p3EXgg&oe=6805552D",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489932250_676417498409767_6822001801003686264_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHG1LNssCD1O8LZ9m1Cl8J6bXdjBLFJ-VNtd2MEsUn5U3A811V2GrjWzgTQiqO-GBFSC71ZjCeZgpliMlouY5l9&_nc_ohc=L7g6Lwcl5wcQ7kNvwHXgWH4&_nc_oc=Adkm_K8wK3ytSk338fkG2f0SGJB-dK5UmN_gq3YMbO7Uw318FVdozNu58GWsnC_jcJg&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=mqAwRzP04YN-1bxZq6I75A&oh=00_AfE-z-s8yPOv1AT31Oh_th1vLTtIOlifXOQ30b7YB5QOVw&oe=680564BB",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489917354_676414555076728_5071286575756185348_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFeDr7UDOD32GEHyOs6HXZ7TR_FlBu4HSlNH8WUG7gdKXsyOTdv2HpJpwUwxbNrvcL8fvQcQtejMaFlfkpXODZS&_nc_ohc=5HzakLjsxlUQ7kNvwH-2m_f&_nc_oc=Adl__e9ygb-rTMMmGwyfqF3g_idc6ERMA5q4nINjElkMwOU_tH-wlCDMhi2r4iLCCY8&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=sCbNO46meScxjdxrZMRJ-g&oh=00_AfFyLk66-HTrZZEQmLOG3TAMz6oZhuTZwmPpwTClWQOZpw&oe=68057302",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489956062_676417808409736_2754879897144593003_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEa_t8ijcV3QHoop-TD6NgqLP1Bm0yGApYs_UGbTIYCloKytfli25Bdy4Lr-sa_T2qR94fdm-mdW0kfrmOXOziO&_nc_ohc=6H4BhK0F2HwQ7kNvwGeruot&_nc_oc=Adnva9Eofxc-XYcBxiH2ukXLnxrOSqXD5ejbKKmbCu2w9Z0HOrMaxMNzkrrQCHUM_o4&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=UCtvmLWTZpn8KHP5xCUHMg&oh=00_AfH4m50ClsmU2Dy-R-YMV2eIj8ELVXKk5Ph0Q0SMAFTzUw&oe=68054AFD",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489957105_676413721743478_2946780709925089503_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmLWvsq1vFC7OzipTZ_WWoMNZZ3KEAxIEw1lncoQDEgUJ6sgQTBQxLhqrRzKNEfaonBj1bJcGLxkFOoJwu3gqH&_nc_ohc=XiXBrtl01XMQ7kNvwHRpVq-&_nc_oc=AdnFUEzsgIA0CG3lIXFYDIzi-dB6ycnb8Ij_M8I07xQwQeGW1rzLact1pyFrQBQkH44&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=pB4PtruX-dFRmS55xqwxvg&oh=00_AfGNgOPCX05jHR9XZNElAR-pv_ODSwj6kHC2bMsZcDLfWA&oe=6805570C",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490112817_676413871743463_7677598346322906564_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGzW3ogCjFclgmhZTiKKPw8IdQnDb83ayoh1CcNvzdrKrn-GWXAHLq86EnERnOsG1RB6U7MUkKNmebDssp3ogcM&_nc_ohc=9yNSCZlz5csQ7kNvwHxvT4R&_nc_oc=Adk_PCgugLWUGLmkBw7ou_BRY1kNdXMTolAs-uZKQ3pjg0ghY3fNZYZUXycX7MmK-cc&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=Ihw33zrr-Bb_PLbfLDIFHA&oh=00_AfFZyoON1JJ8zruz-q-Mx0Ozltyep-GudbaCif5AtjSiFQ&oe=68055835",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489673036_676413201743530_7353071248397928292_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEP4BM7_nBpKeJnOwAT_gmAhbGbgywHeuWFsZuDLAd65WUYzKtAUHTiY9QuBxl0NkUKYMES_kNTQ4qA_7_Z062V&_nc_ohc=8cDAHXwFlmQQ7kNvwFnlLw3&_nc_oc=Adk7rfkAXX1NFig6r3TTgmtAdl1ziVSDc2KmhwIRnCp4UiExqu4exoiVwga3YeLUtY0&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=jvM7KSSvMQPI2RDFSVc4mA&oh=00_AfEfj7q4BNM1csnP9-48HOMo1s7lwuQEo0SJ4CimnDO9bg&oe=68054B08",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490377296_676415141743336_453525591471782162_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHebtR7NEfDLh5yLStaAro7AjkUMGJYbTsCORQwYlhtO-zUDjRNm6P0Od6dA7XylrPpEVaFQHxqIDqzdLq7tT6H&_nc_ohc=ZlR5K3OSHCIQ7kNvwEyoJ4_&_nc_oc=AdkIsIAAmD7wKMHPLWIJtRb96rrufFBC8LPHsodu81EQE4PO0lN5Xd1hdGWaozgZw68&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=S-izmuCPwF569JeXWugAaw&oh=00_AfGO5wsVvhjbo8d3wgS8sEyajgD1iaSvH0-rKhhnXfGmSw&oe=68056F38",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489830963_676417211743129_1824944850527078464_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH2duQSeyuiS1olYS8n5yB2dSKcoOPrCgR1Ipyg4-sKBBWs7HzA8ahUWCTS502A-4W7Bgm3Du12IwDoFDDmA8Ky&_nc_ohc=KdyrRwXhJJAQ7kNvwHJbs9r&_nc_oc=AdmYss-Aix7YsG48rM2CKA_cuMaoC4dIduSaL25vdJaXuUMYc83WuFV2gpKLa2-4njc&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=s_GT967pAwZR1aPWvHvM9g&oh=00_AfEqkA56cbZm453gSM4AVn-57-KArGnjXbhZfOek0uk23g&oe=6805416B",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489944988_676414528410064_1291050321773303626_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEC0HIGVk9iIhlKJCAy7PhYKpiskVKOmm4qmKyRUo6abiXdXcqHNx2j826HrpVRgZ7IqERJBu3BncCgw7HqpHaD&_nc_ohc=LScVtlLF7dgQ7kNvwEAGFow&_nc_oc=AdlIqZqplkqeQGrOlDpISZc97Ug5clDLiR4HixqqVik1kATw-cpUYQ8jeDsMB1RvklY&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=wFhrCaJ5KKPzWtY0FfTS5g&oh=00_AfHmuz7bXUPjEDQDKnSnvk3Wx5YoMX2taTUrRhDGBERE3Q&oe=6805423B",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490129006_676414765076707_7961981568489457238_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHbRRCYPipXjETQR3YepWpSSPWIbqcM1l5I9YhupwzWXjwJ4GB620maCz6XCQ7FIN7PPTiTmVTuHviGfamekfgN&_nc_ohc=DBYknVFZS8kQ7kNvwHOHGcP&_nc_oc=AdlIxJ4nwsUAKLwgwOu1rLnIBk8bR63aURkpmgHBMGXnlNmluzkkR9lEsEcnXTWtCmE&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=Nmqfxue_wrNwgaWp9SLtfw&oh=00_AfH6tFsuqwdP0ONa0G3VuS2_g047IRZPVrgRdkY253_k4g&oe=68054B86",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490300413_676413321743518_1766587074000232040_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFZQTx8ZWXKPeqdUqjXwoSetQ972A1jXa21D3vYDWNdrX340uW5SCyH2V_9nPL6CCu7ChKeiSYLsIn2-A2FlXlx&_nc_ohc=9y454V3by94Q7kNvwF_qekb&_nc_oc=Adk5BWOJGkdIhDrCwkBrLoLj9xbbm8TVn3rYtC_nPSYF8bSgjD0L0kU_Zd0Y0i8vWq0&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=5ILQu1hjkj9YoIAIQ3N_Eg&oh=00_AfEQVKke8ES4Nnt1frYGT0YgILAextkwNDfOYQV5-TreaA&oe=68054AEA",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490220275_676413458410171_9146506889149270453_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGEKPuDC3WTweBI6IxhjswB1417g5Ch16vXjXuDkKHXq8mWSpIaqpa_ArbV9BhPuaG25PvJuZq3bmG8UE66MNqK&_nc_ohc=8T6u2_5mNqgQ7kNvwEJFSUs&_nc_oc=AdnjEaXP5jwga1FXfDH0xqogPSfLvO2CeE535wlESsUix58BwX38fpqPDRX7po5KnqM&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=9D3tE3xgjORnDAJNzQ5TQQ&oh=00_AfEpedgsm66UE0uEOqVINEAE9SIUcQow8OaJDMci4w4TIw&oe=68057239",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489924056_676413818410135_7935642715504468665_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHP-663UkUassfKDRW5MVa-14xu3ZWW6WPXjG7dlZbpY_eLUBidVUZM34e4BpMvLiyfLrnB3zHDZy7aWUMu942D&_nc_ohc=g4ejKFf9cacQ7kNvwFzyFsC&_nc_oc=AdmerDLTLgPkhRWaqdFBsjzvwnrTw4UqqBhmrmRoyNUgMmhKMS1j8YAzw5LiQcixWAo&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=ZUFtKMzcEZ-k_DYx0krWPQ&oh=00_AfEbfXgQ6xAsXkLkG1kHTX8J0Bo2ZvjGWkJALECsSv4W1Q&oe=680570BC",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490238551_676413655076818_8890929253247840243_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFOqIxN12CpQFjbYAhBi27Nj8G_7BLIRgSPwb_sEshGBNDMt1lmdys41fTokSC2iewD1MNx63KlfaqAzsVv79WY&_nc_ohc=sjpRGeFn6qMQ7kNvwHou0Nz&_nc_oc=Admt6f-eITa7YHQM6NvUQ6BDjFYlF6VFU3YDS8hJ_KWauvVa65CGHqMZx7vqE4jFSqY&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=kSXUgT2romhYFhDug29g0A&oh=00_AfFS_gBc8-IVfl10QiXHH8TdS67847TAs68HCnt3reGZ4Q&oe=680560F6",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489785211_676410485077135_6098845857546859618_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHadUARWm9KBuVaxmymYfNUrpyu3n9KJgCunK7ef0omAKsef-ePccRnRCd61jEjRsIsi9IlbMwvnZFZ7KC2Wlhp&_nc_ohc=KW5jty50V0UQ7kNvwHIR25S&_nc_oc=Adk7qIjw2tr29IZGm_uf4FNmJPfgfiCSiYFv7haRaxfay1GCk3e4ZvEXfCAegSxZnDQ&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=iTO0lJ7-WYmztIQsuoOuNQ&oh=00_AfGWnG_NyB8UdvlXbLTGuLt2YUgEy0qYt9-36GApwpKZcw&oe=68054B0D",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490346553_676409791743871_6752133842970886875_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEQ8Z9r_v378ZGtsN6DpE7wAsr4XzBoNroCyvhfMGg2upe4z0TiRzAB6AHlLy9wshq9gVq3Ur7MBYRj6zZP4eda&_nc_ohc=Ny7VNrmioysQ7kNvwGAaA5Z&_nc_oc=AdneYY8KiF7FyLUb3ctVidukcUipsZs8qRH-zIWpek17g0g_xxFy0IEe-z3lN4UVAvo&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=O7saiP-DsP1X4UbOT933Sw&oh=00_AfElis7ctA_ILumMp-99oWRm7JjM-gBWcpHWajnyEKkf9A&oe=680558A7",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490177151_676409705077213_3632770830100765848_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFA3j88JFGWG0U6QfdeYhXAhud5JJ9borWG53kkn1uitcIdUEQO1rCrWJihKPTENY8jMeDiiDoz8p2FxTM-k6kl&_nc_ohc=AUfHz__TxJUQ7kNvwHTXdSJ&_nc_oc=Adl_ROj7idtGjHvDIieMLosnvej0pBd9wY5FJYrze7pXixWwja1A6AFANhkXXeY81q0&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=CpOwEPCpjf8XL-dp9-Pvqg&oh=00_AfHVwUfpsL5RtrSG7SOmgklZunVyuTHR2SFrQFNGg24QtQ&oe=6805516B",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489753481_676407608410756_8130401556932068407_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFRX-VCU3j0Qh4iWL5h3RAdmkVxiO5DdIyaRXGI7kN0jA-kIZG3cwqxfyjfE9Z1HLTK25tKXNyGJm5JF5i5QrOu&_nc_ohc=014T9v4BcMwQ7kNvwGkH67b&_nc_oc=AdmmtnbE9e59eoTU4L6_XrvDWtnHUt_qkHoMRobBCJr9GEYwHMhvYfQvOh5f3xDbK5g&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=dTxhISvT90euexn_lAHmkQ&oh=00_AfGUVRR0ghKTbMvU9XTxHJ1XPWefYgiImJTtbsrn6vhdwA&oe=68057704",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489777012_676407428410774_1936686824479814343_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFK8e8z5NxErdvvreq5jf031rXoYpmrR3jWtehimatHeNKgdzkKQBIf0lUF4GQJPprHhR7m9cqUdiCOfO6MbUbn&_nc_ohc=i3p24AGs2asQ7kNvwFP0_N_&_nc_oc=AdlkuNAEjg_ltNfTktr1KY4BjpnlSRF4iHHn1bX6NspdNJXDJa_8UD9SvpNA1rkejTw&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=iUlffvKhxDB8ml-A7tjxCQ&oh=00_AfEHSGcbqwgLPv8jP6hYt6S41rOlc1KYpwFNox70FcoLFQ&oe=680562AC",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489452372_676409561743894_2557768057837416198_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHrMk5M9BToINz2m9joQzB7FPpj0TZzJvcU-mPRNnMm9-hilqlZADX-ZhWQIcOh6KKF9J5FPf5bq_Z8tUmQigmF&_nc_ohc=D4guNpfuZtgQ7kNvwHjwe73&_nc_oc=AdnuAMCOACAQkMSjIXjV16-c2ZV-rNMYjaxvK4EZgdZCm3Rqt85LQ8nWWs72fzkZZto&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=pmBWxVkwHREhAV488vAHYg&oh=00_AfGnW4EF3W56TLNOsUz2XuDJAPVfqFwzUW5vJgzESErU1Q&oe=6805702E",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489452372_676409561743894_2557768057837416198_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHrMk5M9BToINz2m9joQzB7FPpj0TZzJvcU-mPRNnMm9-hilqlZADX-ZhWQIcOh6KKF9J5FPf5bq_Z8tUmQigmF&_nc_ohc=D4guNpfuZtgQ7kNvwHjwe73&_nc_oc=AdnuAMCOACAQkMSjIXjV16-c2ZV-rNMYjaxvK4EZgdZCm3Rqt85LQ8nWWs72fzkZZto&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=pmBWxVkwHREhAV488vAHYg&oh=00_AfGnW4EF3W56TLNOsUz2XuDJAPVfqFwzUW5vJgzESErU1Q&oe=6805702E",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489559719_676404575077726_9146163921259807220_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHu5kORB0BRegjOmEWy4RtQmJDw613JadCYkPDrXclp0GIuVvRO_VRAlXtu5PSgtQzdBNA4ZYMd0LRLb0YZpjFo&_nc_ohc=-irvjxAQw4cQ7kNvwFyymQ8&_nc_oc=AdnLz3g3ZCqvRsC4Y0Bjb0OfImbjE2-t-vE21Q0GPMVqf1dICHIS-IVXVmcUEb_LosY&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=JEA2xLHXIKdYZX0dJ9V_WQ&oh=00_AfGutq3-vnDR85neLJgwzpuhF3mlZE2mtcEajYFFdT-G3A&oe=6805582A",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490303757_676422728409244_4152942309447468698_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEMp6IkTbbBlPR_nBUe5kwIKdsBQK1OCzUp2wFArU4LNYuXMxmna6RZ0xx-szbtqEBMizHHP8iNAFkms6slBApx&_nc_ohc=a6RH2fKXPIYQ7kNvwEejjyG&_nc_oc=Adl0_QmRd6zFF7t_JA0jY_eBYFxNwX045WBrlnlOoE6HOR9ir7EhIUys_t2Je6U1PKI&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=q2mhCDUmy754PoBk48c4BQ&oh=00_AfFr65Jvex6OgiZw1jUTIEEMiNFANYficNtzls2aOZFbNQ&oe=68055D64",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489699813_676421988409318_5351681358009892613_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEvxF1-cEuLQRdtyhvWeWVLP4vO4csAqhI_i87hywCqEjknYLN9xR9rCrRe6PMw8-GocpboiH-pmHJTbcozYaRu&_nc_ohc=AWS28mzuUaMQ7kNvwH8YfO5&_nc_oc=Adl6weVi0wA0X4DLQNdYc88Qu6No7_8-zx2669QWz5epx3TiaC_PbjhphLoZP1Nv8KE&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=o4aQQPNKMJnQJ_tS-LMOBw&oh=00_AfEfRJO6kwr2WKJtk77LjQ1GyxCjChnhMROuOZoPhzcCnQ&oe=6805610B",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489568073_676420258409491_6727063254822632924_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEWJNgAnOW3KSiuFt73cKK-I0ymIshnBacjTKYiyGcFpzSQN6cH9b0vQ1i3jTlWPxdZzq3zGf4lYYjxwaxu5B9C&_nc_ohc=c3xZvznntF8Q7kNvwENN4Yd&_nc_oc=AdlPor2j-gBsjlX2kkBO87gVt4cC1v0V2ZM5ZQ_VK3_kRBaJM9MZlZaOi-1ks7SvS4I&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=pm2O1k1L5jZ0VORkhvx2tQ&oh=00_AfHhsYFfu9An7Uk12Njw2CNm4KqRUiQvIC65oI6cCtNftA&oe=68044F7B",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490117719_676421238409393_5473915424548058200_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGB_iuyHbi03b9LnPmGvtTmhWW4JTxoB7uFZbglPGgHuyPdshuzY_6FC7kgqMSJ6Sp70Lq0PFNR6Fg5YVzC7MZO&_nc_ohc=FAA068JJ380Q7kNvwHvqDdo&_nc_oc=Adnnb5e5pIFW7b7XZpNUOPfTDPqITihtfDYw17yn8XwrC7p4XqEndwKL1RjeR5ce7gI&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=EAgv4_W1IVXO8A-W_b9hNw&oh=00_AfHlB6XxrACDb8O-L0ClZbvYqBIgrv1wE0XGCcYHULdwEA&oe=68057AE9",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490134572_676421995075984_5056812300523148368_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpHtvo_BK-RzxfCpdIXfNe1WvDMpUXILHVa8MylRcgseDRtYFkY1UueUZO9eGL5af6YJ3CdTepp3dMs4uQok5k&_nc_ohc=xJ6DIYOFg5IQ7kNvwGvdLf_&_nc_oc=Adlk0NG93am3kCmOdPmm2RqHMLzt6ZEyl1Jj9zQFQEHtjVZx_ikBq4VaYAmrYutisHE&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=ZqQFJaobIZBEMwKMU-rjrg&oh=00_AfFlpCe3oDZYYUpYszY59FNJgY5deJ6Nom4ltXnOASUQYA&oe=680563A1",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489288205_676423085075875_6223134287641830265_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHu1kaecsYCBBByR2fbLKPiCvNQCiupxFIK81AKK6nEUjcB0WgVHGKdLVGvM30qO3t9-yNHUrKb7Fbn3fj0q3v1&_nc_ohc=0H9bFkLqvn8Q7kNvwGxX4tp&_nc_oc=AdmeAf5aKT93ZsYXPB3LKJlhQa_CsfTiwBlNjgggAOB4pK8JPWW4tCnNb_GbWWI9NzA&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=ytuh35Z7v2ycA9ejOaicrg&oh=00_AfHwMWrJRX2LbVvXiwye0zBXtLNcpTWt6KpjqoDrA4xKfQ&oe=68057023",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490358176_676422908409226_3697860773497962968_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHFO3q14ypoIY4IajLCEqoypokSdYfClmmmiRJ1h8KWaaio12d23xvSDn8j3vP1Y13cDfyzudMc3Gt5dlhS0HEO&_nc_ohc=_ZgFsTvA0xwQ7kNvwF-kA5N&_nc_oc=AdlTPs67iKaO5uShSEljMQArt8XE5sf0hEAMlZ9T5Jf5QUut2NJRsKQjjF9PR2S_eB8&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=Pbzyc0KLpi48WkbxguMwWw&oh=00_AfFE4rMPfv5C83bxDXiHgA99OjyL1_1ssDe9mWP97W8sOw&oe=68056D57",
      title: "Easter Revival",
      date: "February 8, 2024",
    },
    {
      imageUrl:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489530777_676419168409600_4874143111041904016_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEq6OC3llIgFErlWKDOf4nsuyUwBmqOcq27JTAGao5yrWyq-sO6D08HvzNwrKHuT2Q1fOFMG61YIxT-jCIulbQq&_nc_ohc=yfxogkfS4M4Q7kNvwF2LbAv&_nc_oc=AdnegLMrpHvTLLUrESP1qrDwfOdJxNN8-XJntLP61ntz6cVENB6cOSCWwn8ORWuInbQ&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=lZ72YvIaqh2__AlE4EN_Mw&oh=00_AfGD5HJ71Y2-znt6-j49rjDS4xuK3gb1_royc_lbDWDEIg&oe=68046EDD",
      title: "Easter Revival",
      date: "February 8, 2024",
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
