"use client";

import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
// // import { Dialog, DialogContent } from "@/components/ui/dialog";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogTitle,
// } from "@radix-ui/react-dialog";

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
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/492490980_683676291017221_7595170252301498720_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFBvbzq26J-hxrWOC5OVueowbYCve9MxS_BtgK970zFL8xlj6Zt5lsXEA6-V-9fxUgVymD6v8oucEj5lf4fDO0S&_nc_ohc=QDqCevdv5vgQ7kNvwFWQhB2&_nc_oc=AdlW9K5c9I07ZvydaOQY76rklpcO08oqeh5bOBut5Dd0Rfu8JoAC0ICvnRTmBQnxq-k&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=SD1-hCJJrPvKDPf8lEY8dA&oh=00_AfFdElBuzCkBCz_i84elNSam5GFrII9XmZ0nQ80YCiqjsg&oe=6809764E",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/487741557_683676457683871_5309453631889127545_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFSzxvN4f549WdZdTwtj_WcVQ2YaJoU38NVDZhomhTfw84ISpqB_hGPnXrJpiRnJsof9vvWXO-Nczf8N6g1UKiL&_nc_ohc=Y2NvK2LSqEwQ7kNvwHXTVxX&_nc_oc=AdnA3RRLi31QcPgtd5usBD06TAgpZ3EITwHeLZzK62_37wzYUSRIWf2OacqGMrwJCJQ&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=nsI_Sur8DSpFuWvb13zO1g&oh=00_AfEiK9cCoWVujyo5MRX4W4WIyErHIG2-YmiXZyfybU8EPQ&oe=680977AF",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/486613907_683676264350557_6515541870872821309_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG1bMXtipCGE9vs8-_k_OagsB_Ks1QL5JywH8qzVAvknNz6pusvpxl7LjbLgmZ1BcM5-HXd52SblbtoR4gz_VSV&_nc_ohc=EFKU2hNJ31sQ7kNvwG8AwiU&_nc_oc=AdmDxoMvkUQU-iz8cOv-zge3qwZDct65mr-ISORCnaJNRDL2IbcjsvRfdzaIIcKchKQ&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=ZwEwsxqRG5imEro0z-9hyg&oh=00_AfFFv8vKl-uiTNCFAvfpu2dl-RFpBTP0_d-5yThaNyHI6g&oe=68095235",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/487025254_683676134350570_2833669343047268061_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHjtsFm5xK8hjtsei6rPnD7Duhs6NqRT7sO6Gzo2pFPuxkg8dohrZAz2Z07cfXbDP0h-PTCF7r23YaVIAJVyvYL&_nc_ohc=SD6xhQi6ZuMQ7kNvwF93-dY&_nc_oc=AdnEcEgweQOFa3-rdTkNMl2GlKK6S_Cz_7P0iAU1wrY9bUBHzuM2l_cPl6fdSxxPRZk&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=nvdM8m0bGxOdN6a6A2grCg&oh=00_AfHkXlRSNqw9Jxzhhcw3HsEry7uLubKXqvWUfZ9WCOJyGw&oe=68095CD1",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/486552929_683675914350592_337564899547750279_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEuex7Bfjg2cK6Y0S9lWMheUEYgKEC1UxJQRiAoQLVTEhz-Hdc-qP27fL76PP70B5dBbo9XEBupE75-O8Ml0sdG&_nc_ohc=LdqVYA_ZEe8Q7kNvwFnGhS8&_nc_oc=Adl0NGbHCIjs_X6O9iHY7z394TblVbnMVPf3NrKVnk0_XsflGwD5408dG7JI05wJhNo&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=o-NAGzEu5mHPiBzRc8HNsA&oh=00_AfHOqev5kYpYktjERf-c8lQOTIGVzuWskciSyF_f9HI0zw&oe=68095D21",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/491304956_683675654350618_9085842875570615343_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHovCgrmmVYFN2uR2MNneVpCAYP51qnj9QIBg_nWqeP1BmanZcYiY41H9X1xHTUMOkpo1vbRBiV4En5eslTDOyU&_nc_ohc=moIci3akfWcQ7kNvwH-Co-b&_nc_oc=Adkn2lF7DKj7gytlszL2-B7KfHKvWcUyVJuyBZ-qm0saBcKpAYvcDxtMIVo3Kp7GNWk&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=kCCAlNIIreur9C-cUQkJZQ&oh=00_AfGsfSdFg3Ikb6giBOqXkAh8P7nVX8oFzhL_CN4x_uz--g&oe=68094AA4",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/492395114_683675517683965_1988302329729781156_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEdwpzzpoeb5vWzHWfpP_veZOo-jf0LH-Zk6j6N_Qsf5lHe9yPYa3Kmm6ok2GC8siHkH0FyJgY47YjBbM2mKmqr&_nc_ohc=Qmng9HMWryAQ7kNvwG3ZLQq&_nc_oc=Adn8N-8sEKovBqS9H-J4y1EIVpog1koY8qBkSAJY5Qfa69I2YSVvUiO1hN39D0hse2I&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=jyxhjosL1h7TN2Ln911Ecg&oh=00_AfEhi4Rh1wiSiRzs4BQZopnhrJWoWvA3gXTTktJTJeOrdA&oe=68095C33",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/487384113_683675444350639_4835870729978108190_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFJ7JGzaFj54F6ffY34FguX1_cEQ4JEtubX9wRDgkS25iN51eguFXlhGaTOQ0MdqloISzBv3EDxaODpBjoe4uE_&_nc_ohc=YMDSzbfD0QEQ7kNvwHWX2jl&_nc_oc=AdnN5TxEz-BFWtB6BiWHA1PBGpstql9UXKnCYJGf-H8tHV2Betrj-Il7ChMpFnxKo_w&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=zk6uJaVLv4QpKqxbgPpRLQ&oh=00_AfHhkOKkmsOY7I0omXKprOI9t05gr6Qk-JZTghPFwcmjAA&oe=68094F3A",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/491957864_683675201017330_9029713743029658247_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHArBmZVOkkoJZ_Ybo0t2_nkNqFN6qX7aGQ2oU3qpftoUU2SJc_XB9kKP6P8gMRYqD7znElfiSO2SMelqusBV3J&_nc_ohc=1ZULLSJDYOcQ7kNvwEztnCQ&_nc_oc=Adk72am1utYPI29L0ohsQZO4-JYr5ApPtsDmqf2ArWs2ApV9zpOTrI-LQBU1ef9d2bA&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=dEiMFswO7_MZaJTo0x-3Bw&oh=00_AfGe5vTfBGLyf93scUXi_7dshkQKKPaeiZxpV0KOt3HsEA&oe=68097BD5",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490112525_683675041017346_4802577122680213963_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFMOXbIvzpHEIDk7TV--r39qVFZR3KloFepUVlHcqWgV80cK5QbS9N9NYO7YME6yhV-ZB5DxPye9x_E3wIFzRTk&_nc_ohc=98w6qj2MDQEQ7kNvwHhZb3j&_nc_oc=Adl0aVZQbLq7dopMu1pHsojUhGLniJdj2gzXq2j-tXfnLKMmmirjQlZm2fuYwJHI7Hs&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=yDe_GJs62o0Cj1VrZ44syA&oh=00_AfHxkLY3Ve9fB0LW29niIKAcdpttDV6Evkg5to2qvTLmSg&oe=680962E1",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490201325_683674321017418_3390003057674540913_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH0iS5x20HmTg2tUzbBGYt7iP8CBwEAdwKI_wIHAQB3An-tYOZrsniO6Nnyf3eN8lIgjKOO3Dzq2vIN2pSm6yfw&_nc_ohc=PjNBs4eL0TkQ7kNvwGtoMoH&_nc_oc=Adm646cCrwEHgePzSdl22HaU2L_s6Ie07cmx8XwSNUB5cG5SNvdVOJlvBue0OLSlKFE&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=D-57VC4ZEyaP4MIU8xSdYA&oh=00_AfFxMfSOAg7doA6BGKA4aOmZh3BWZafIx0_dNN31D0zQbw&oe=68096A4D",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490201325_683674321017418_3390003057674540913_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH0iS5x20HmTg2tUzbBGYt7iP8CBwEAdwKI_wIHAQB3An-tYOZrsniO6Nnyf3eN8lIgjKOO3Dzq2vIN2pSm6yfw&_nc_ohc=PjNBs4eL0TkQ7kNvwGtoMoH&_nc_oc=Adm646cCrwEHgePzSdl22HaU2L_s6Ie07cmx8XwSNUB5cG5SNvdVOJlvBue0OLSlKFE&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=D-57VC4ZEyaP4MIU8xSdYA&oh=00_AfFxMfSOAg7doA6BGKA4aOmZh3BWZafIx0_dNN31D0zQbw&oe=68096A4D",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490062869_683674231017427_3774561807263623356_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFTDjcYIEBMzZlKw1AAwXqbLTmCDZbOs1EtOYINls6zUcYS23WqpuG9CAn-DhFi-PBkNQcZa6it3x7D0DuFL-5a&_nc_ohc=4C0eyp3OQ10Q7kNvwHsfwJf&_nc_oc=AdmWcrNxMuH3FEobzk_GhAVQJCcoDN-NScLC2Rmx8mDhi9TEJ2oXhoZH9zORwuWet4s&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=7hmHRE5aWQYXgPMo5jF7Qw&oh=00_AfH9W9D6Y886jg8rMPv6ofGhYA8WEP7f9VV1-_8VsW7R-g&oe=68088C3C",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490983879_683674107684106_1782299773834335237_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHAo_ClSukR9oojLwXZyPk0yjVqpkJv0UnKNWqmQm_RSWH8bTCnBsJRzKvtLaL37HAsMX5XX16Kr_QadBuxJF8U&_nc_ohc=0OchD1cqJx8Q7kNvwEVmCP5&_nc_oc=AdnG_ujzM3I_7SSBq8pSINwADTHJB-BmvSj3ntfoipDlw2qHDU3Gb1CaXbOkM8k2HjI&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=ml_A1mPBfg3M0b5tm805ZQ&oh=00_AfH6XWJdI6wwgEnYUSsP0Vhd9xZvhCW7XnP8vKsaMgH4bQ&oe=68089E53",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/491652178_683674004350783_6469029570958402559_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEvCX0cnEwbfu8yRtzFwIWk23AqDvqC9g_bcCoO-oL2D-U_5anJP8n76O9JuYWjKi_VuYbxDxyHfX7dDcoQ6WWl&_nc_ohc=0tjmY7w5uKcQ7kNvwEt6w1s&_nc_oc=AdnSk91c_rfggWlvZgrBZJBdPaAdSTw0f_QcizZOAu8VYXLih-WAWdaMGiG0IvwhUss&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=hz_3na3O1VrkLeReR_uoGQ&oh=00_AfFHOwvfsAO_sFH815y1XPG2HPjsyqqThoydk_yQGhVZSQ&oe=68087712",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491022048_683674024350781_3765569754648817722_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEBm7YvIbJ_-doh57rEqV86WuQ8XI8bUGRa5DxcjxtQZO8gBAgyb_d_MevyqbKdNioYEeFVPyEoLFbdrxPyV5lq&_nc_ohc=Do_HTjGv3-gQ7kNvwELjTQV&_nc_oc=AdkVCV3dI8oicYLnKiYbgVpNpq7eRHwBzlG5fOjZD18xq43cODpPLpYSKL3YGDyP3D0&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=mNFQYfTo9YbuhPO23hNjqw&oh=00_AfE14HWJTmgMrg9tuwsF_nDF8i86SBT-VLerUg2MoAh8nA&oe=68088A4F",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490212904_683673974350786_1912299995458491816_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEL6hVmkDVztvYyeY3EUeDVDwXORfqTg58PBc5F-pODn1g489SkK7wawN7eF9kGAww8v1KFcZYXMs-GDbzI9Xhk&_nc_ohc=eOHiduMKVNwQ7kNvwG5Z_fy&_nc_oc=AdmqncE8yXdMbhyODTv-jQazCS1C5YSi7bCXPeVn4DuOoh8aajrU3eR1d2JwFtTpWP8&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=XuObPxD6bdbbTKhgAXnzHg&oh=00_AfHzX_ve_WkLfKs0KGoCIHwnhiMBhnnPH9URmdc2YZK6FQ&oe=6808A6BC",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/488076773_683673637684153_8782305705931665471_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHtVvDtZug1eWPx-5Y_3Owswr973uLeVhbCv3ve4t5WFnSjUZdaRgsElHybCHa_dNrZuCNfHxC9Qlg1n3e9Aj8h&_nc_ohc=fCRL91aSpwkQ7kNvwHnx_y-&_nc_oc=Admroz5Gms26rSmmVxMzFAYbpOzNss08kt8vQg1pVUUHRI9Lr06kUE6cx5LycfGrO-g&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=xpsQyjf_qCiFXPnX9oGVUg&oh=00_AfE9QoiAnC6XOG72Dugks49vi1lU2aCv0lfHr6rzzcglpA&oe=680878C0",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/491368396_683673557684161_827901760798447385_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG1SbIzm7NPaL55_xLxra1qspDrnNPeqiiykOuc096qKFyX0TttEzajXxgtr896mAi9O4BQeg_EjBivrSDsNUH-&_nc_ohc=GIOYrgnyjnoQ7kNvwE7Yr2t&_nc_oc=AdkwhGPA5ovuqxZOTMuV96kBl15JE5Zv3JIK9sM00IuKI1U6B-_9kqd4lE3oJoC1DAQ&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=s6i3-z4-ttREdaJYUDmDHw&oh=00_AfG4TYWj_OvugPEo7vkJPrB3kMG6VSDw5F4-RIfSHFZTPQ&oe=68089066",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489609396_683672887684228_6119582557550264947_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHo-xacB_Xe_jiY5lXwQwoFBiL6IXnMUoUGIvohecxShf3jYK0rQdbMPA2XIcg0UcUi_AqfDCugeLu4i4HefqRl&_nc_ohc=1ZmSm743oksQ7kNvwGpZKQN&_nc_oc=AdkXUCCdWIRntjT09xDCa3CD9AsMKBkRwcyGMMZWkx5tZtslmHzAVQp_x988bC2Oyq0&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=kAXDRe1KIrY_U0Up_W8e9w&oh=00_AfHq677mbHcAMpNahh-qmM9KI_vIicSvqCPycEtP9jxpcw&oe=68087EC3",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/491808865_683672757684241_6924257744254362390_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEcQYY7p2Elb59uMe4puukd_Kn9XIRjV7P8qf1chGNXs1iqluNbu4-FVWGrEV2niKW33HW2jBxvXHy3O96_-P56&_nc_ohc=n2PwcCgeKf0Q7kNvwFgVY20&_nc_oc=AdmOawLoUH3KTSBT4BjIuGxlyzhNCjZCCaVjTFunnwSRevzy-d5ndgDz_c4UvCRRel4&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=6HvoRnRpdB-kcMNVEY-o0w&oh=00_AfEWl_O2vvxJx0EYYsCC3mtL9RFQk_dWp-CUlmw5eKeeag&oe=68087EE9",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490943489_683672741017576_5343614552431829769_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE7meZvBpsovo-iK9Jqf4OFVJYYm2wd4vNUlhibbB3i87pd1debZZvN19J6VtOwZ5qoZB33hin_J29I_7PpWRmK&_nc_ohc=ol0IYEOxXBMQ7kNvwEdGy1y&_nc_oc=Adkiir6TfTsr0hXEFEPLcJ8cGLTcnTRaW1Y6PlD30zcIeKs-apw8rv0tL0f1lGvSuDo&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=X0EQx60Wux75cUCqGqitCA&oh=00_AfFECB1SfbHpOFIrALzcIAIkgzmjlNxUnFLC9PeQG4CMPA&oe=6808ABF5",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491289320_683672647684252_6007748514557780421_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH6IZuzZ9jl6XB1TBKt9umuXYHm-DANJAFdgeb4MA0kAS4JP269-SZCoAfTR16blksIubpqLmAofLyLQXT1aOBV&_nc_ohc=izl7QjHq_yQQ7kNvwGb_-id&_nc_oc=AdkYM2X6D9DAqQ9AI8Ahh7vEtCF4IsQ8GGkkbKNv-gADQk-DsuWefbMDP3zfJzADqD0&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=SwxFKnePlkJLdfmdsMh1Cg&oh=00_AfHr7nr2Oxzy6gt6q9K0k9uJGO4V71tqYp8hQaTwcZTGCw&oe=6808862E",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/487065879_683672551017595_7605059423380826552_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHRxVskTsA2aE9XbG7fr2S5VuyXwXg6tVdW7JfBeDq1V8BlzNCZvQM5ABnwfBCo0tlWUPQIS-6BKGXuUlRdjQx4&_nc_ohc=FLaGVNu7S4cQ7kNvwFswr1P&_nc_oc=AdkuiDm1f4eX32R1sUrr0ZRtP2wLU_TeAca3EcLbUR9PzDG1YtJ5ag5FzDO6Gh3-OAA&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=Um8aADkmTuER9e3_cYmUWQ&oh=00_AfFwqzVu96vC3yt1nd8kQIxp8WKiIdoJV3OCGvFmFGpJxg&oe=680875C7",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491921903_683672461017604_4360293329426902575_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHHEuUtjsJKEXWULhT6Yh9ymq3KRgADegOarcpGAAN6AyPN2NFQPqVjgYDIrHuTp_EtsI30aC99hCyjN60hyJBO&_nc_ohc=84lrcYv6fRAQ7kNvwGxPB7M&_nc_oc=AdmjCFSDerrjSYh8YrDw5Mf-OTxvegVI4AZPDeqzMJ-MjLw0rO4WnJ0tVLYQy9DHfl8&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=bePxr9RoS6to7mVUVOVA2A&oh=00_AfGzS4oLaMs3oDrJriOVXSqVS4YOrWC5LLdTQT_JrJXP6A&oe=68088140",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491205678_683672544350929_9197920172090077546_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFFLKmasKnXW1KlvF87lqWkS5LEGKVKcmlLksQYpUpyabNxN6vABAzKwttBLiJGhWQucPYN36cDAjszQXG-nI6z&_nc_ohc=V4HPJq5swSgQ7kNvwGZY-qJ&_nc_oc=AdnBg3I6iWJOodwmhr4hff1HvvoypIBhPrvbMxNSqXzYZGLuSlbx1hH_Ut1o8zu17Us&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=W1TKAAYDVH21I25WWf9eyw&oh=00_AfGKDXrEKideHqBowx9MpvFy0woVo6bZCPpLFkjCAYi2gg&oe=6808A500",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/492494418_683672434350940_2306475740446632568_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHXot0whXXsYN1LjbCt05vnKXeElyknhsopd4SXKSeGyn9dfr8gKD5-K5z7ybOW5SypEmmB95wrbf7tlGca97EO&_nc_ohc=fkny1jCKvykQ7kNvwEn6JHt&_nc_oc=AdkbC63K2MVax6zU6QIi6vbSLEYG4VVbFevJpOqz-R5K8ImN3quwE-47E-E4ZIRHQTI&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=vwidz7Okt-6hAQuH2WQu1A&oh=00_AfHKG2TrVpBnaYmmoFikoaWpzT9qmbKI6wU7OpY6xydEPA&oe=6808976C",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/492004389_683672241017626_9087679781212999888_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHzqNGquR1X3Hlp73vleI-5DpBKcRMZzCMOkEpxExnMI7vybG-PE6WEi3w47kH3rgTpKAVbS_Kfbflg1z-i_iej&_nc_ohc=PvftQJ5ZTU4Q7kNvwEhlha0&_nc_oc=AdlHtZ1xNxNEco7gDW1B7dzEFTw9-qJ6aLKZm-GFyJRVFm8N0zrEjSm-vUCTVWAU7-k&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=YeX4cMWLmhZz1sVM44rm8w&oh=00_AfGALbwhr1fn133s69C6XpNsxPbP9Uc0XWDYNYeBJKxsTA&oe=6808A500",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491407850_683672094350974_4416120256849264270_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGiG9ut0BfEo1LqD7IrbkoMVxogjHeHMshXGiCMd4cyyJwZJHh_zKvOXicySTWci4KAoLdI5cd_fsi9JTcryMPX&_nc_ohc=s6VxkREhbdEQ7kNvwHQBRi1&_nc_oc=AdmUGJgSM2QkEvU-WawrYCdUyWRjqcRwv584a7VGBTWjzqDfU31nQ0IUZ5IU925eAQI&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=WX2P4-Cdgp8wu_I_FD21Yw&oh=00_AfFu_zLDJG2NtQz0Pr2W38fx0kVVXLOL784HQor9O_2bDw&oe=680884E2",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491045152_683672037684313_6547077163924882586_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEGp93GEf6Gc3qGiGTOL-l5Ax2dnZ6JO08DHZ2dnok7T3pABLfNjSRV4yDCo0l-ArjaPBMiRuUpSnufUMN0w9-G&_nc_ohc=VYS29wVU5vEQ7kNvwGXEopQ&_nc_oc=Adk2n3GVFAgZs60lUtiakAmc2zv6gr74_WIfvnx1-yN26HgMtwC0UClXxV8-U1v0j6s&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=lzYO40NLpyMOZ7OMenOHtw&oh=00_AfGpdhZasXu-R3UmSnueqv36D8hREiwmtkEhOoSe-UoK1w&oe=68089A71",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491183601_683669271017923_7927536033943389489_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFeN4oFm5TRo6JQtw7veGbOExA_u5HhDkkTED-7keEOSW4yWa0GuduTT3v9vTp0sPh-jiCVWVW8nZ7I5LxWiVM3&_nc_ohc=B9XPoXb2uYwQ7kNvwHu7Mby&_nc_oc=AdniiTdNNA7aJLUULcY3kQFDdcY9ZfrUkcltsIOXTxU2ttlD2G-vIwUZUm5xVuZSCfw&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=zTX71Iea-Qyo0euyfVFcSg&oh=00_AfGsMPwZqqYpVo70B7fDUO_T_aLwkBKIJ2xT8JfwodlAXg&oe=68087EC8",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/486609426_683671961017654_2538714461477068714_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF8Mdrf24XefrTk9H0Qa-hL9ZvssLjtEdv1m-ywuO0R2-6Aax-ekI40aJgF7puI5wpDb5OeLXf90CxYYbIJDDdb&_nc_ohc=z5rhR7VwGdMQ7kNvwE1bkV8&_nc_oc=AdmPBjafkJrX6tfW-PDRXdMEbsrBC2I6eewG3Z81im3qso1-c3O_F5Yu9ucb4q1HFNE&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=SFpxw2qYCvN2e9fJ9rqenA&oh=00_AfEPnW0oc5OwLyvgQYIwkZEU1tnXwB6mWbWw2vRZX-cC5g&oe=68087DAE",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490639872_683671824351001_4879034025188848958_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGeU-hsSvkAHngcYombq7ZbsHqOB1C-cCWweo4HUL5wJeOGTOlwu_VHqWZNEcYoHDmeVaJ304dVzDWxGTbt2dA3&_nc_ohc=mk1w6LazBzgQ7kNvwF3t6RY&_nc_oc=AdnJlRxlsCkDiOUFEJHVjQO2qCG9YChBT5wBeeQTa8IPkBznLsLYJDvrjTaDCdGJIXM&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=FoLMGzJwBtWghyPMSj_y2Q&oh=00_AfFryKsCZTSY-MssEeB9z0ZubUe02AK1DLajcEoR_xx4ig&oe=68087F1B",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491802036_683669027684614_9174107926650904122_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHrC2whE4KJ_UXi4Gol6kyFJrsUa7qp8P0muxRruqnw_Y54813Iz4QEHV7x3ixaMBRZ9FRCUoMSrayRqfMeJiPG&_nc_ohc=q0GXvi4MQLIQ7kNvwHJBBTC&_nc_oc=Admn4YTodjUW-Yb1XOYDnyoaJUXDPJ07vZHwqx5oATjr242wmiQuw-3HWzP_Rp6-duE&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=x4sNOwGz8HAuQ9uFTokf6w&oh=00_AfFyZ-XxroZU0Sa88L2NHAoZ_y1Vt2_hYX_6rpxk4Qq3yA&oe=680889D0",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490377757_683671621017688_6655343519177975488_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHlWur5CPKItCvTX8yT8npS_B2KyZdS_Kb8HYrJl1L8poHyoNsDm3vxOpi59zqYRd2OCxWuLB3K00PY4cv9B6vj&_nc_ohc=gLUFsfv4P5AQ7kNvwFDy0ni&_nc_oc=AdlvIRfCxSGD4TOr4cwPcaIMgdlLw78ozvC0qr3MqY4UHnzmFuZGi9_HZo0FgKg0-Kw&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=MPdIQxyuaYva_6zS0gkpLw&oh=00_AfGe-wIczbx-tOf3ZmqknFwUakW2t2n54sSWEjpytS8hQw&oe=680895A9",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489928422_683671504351033_2510729486316391740_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGB3fPyMUASm9RkP31Io6aTLw4ENwbvdZovDgQ3Bu91mha72Zq84blKrhfuN98IU8jxZw7RzBzhjYATdYhdVum3&_nc_ohc=UD_4DreLkGYQ7kNvwF8Xpvk&_nc_oc=AdmBkMeO4v71qzXADbc1ip1y9gYew9RMZrpmA_G3fQvdmHPG3RlVDd22zHJ3pGUogxU&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=Uw_H8o73yfalnm0T1o5dCA&oh=00_AfGzRw6BGm5KeFU1bA_N_lLNMWDNxtfAfYWxJbVp8PzH3Q&oe=680893E3",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489928341_683668217684695_3484780728367098730_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHjxvDCxMn9tzFW3c8N_CmNHPj8xDPLyUAc-PzEM8vJQITUWsBsJ1Q6bjfopd18SMChUfRa7VsFMdPXCUR_Jc_K&_nc_ohc=nVFXT7NeeJ8Q7kNvwHlCj7a&_nc_oc=Adm9NBuZpBCw99EEB3ZuLJUfq4DUHCZaIyVoWIltPX1CBtbzEB-TCi-dYAKUO4PQjDk&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=aFNE4pH0ppP_ggwOfPNqHA&oh=00_AfEz5femKiFtFgm4iBEe2CGkLLFbw3FIhRxAthNM_Q63fg&oe=6808744F",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489928422_683671504351033_2510729486316391740_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGB3fPyMUASm9RkP31Io6aTLw4ENwbvdZovDgQ3Bu91mha72Zq84blKrhfuN98IU8jxZw7RzBzhjYATdYhdVum3&_nc_ohc=UD_4DreLkGYQ7kNvwF8Xpvk&_nc_oc=AdmBkMeO4v71qzXADbc1ip1y9gYew9RMZrpmA_G3fQvdmHPG3RlVDd22zHJ3pGUogxU&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=Vasffw_MYF2Seycz7GYuMQ&oh=00_AfGKLNpAtcIhYsoz8tIDmcOSQo0vAbEWIEAcNftKTcE0nw&oe=680893E3",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/491625161_683671331017717_6579428598683558296_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEpckuoVruENTYWidEmUhWlCx0USGsXToALHRRIaxdOgK0hMnWLeCeV257r3NqEIiuizJsLpSNtPPWkDOlY55fq&_nc_ohc=fYHfypXBeLQQ7kNvwGVYDB4&_nc_oc=AdnyGNuf5qqFWJPOE5FEg-nShLX3zzPWzrjwHJ8ZDaMUuZ1juisoMdUvh1SgPWQ6IKU&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=uXfFtR0ogyqODDRytaafWA&oh=00_AfGzMS3UMFeHuO5UIzS3Mm0-6q_Qd5OI3DGaQvnelhWvXw&oe=6808837C",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491952229_683671224351061_5726993942379312413_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEjWG3QGFQmiWRKiPCDuZN8jnUbev4kPU2OdRt6_iQ9TbWHkySKHHhGD0n4Gl9jDQQH9-TOgGhDRpnqgoSuGGea&_nc_ohc=6l5k0QILFLgQ7kNvwHFgfB0&_nc_oc=AdnPD-vPCmjZEM16gsW6sD2t_hHP2a0S_ZmDcihr__JdV9NtPbzJKB3ZBDG8Nbe9gMY&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=7OUr7d4710ExMlNx7UkXMg&oh=00_AfFMi9fWPQXoyPHYgz8RsA5L7x89XwsR9KwW4ugs7_cMJw&oe=6808A66A",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491920399_683668914351292_6045743657897765925_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF1teM4mfLh1hboYoGwgd45DbXrQc5qPcoNtetBzmo9yllgmWVD6oUQJ0xEisvjAqXZ51GkxxRcxWwvoa94C4Xg&_nc_ohc=yfgqLntpKJMQ7kNvwGZ6lv0&_nc_oc=Adlu_xdyERT9bVvN48bYQrFe80R0gIOag0hoGjvMCsY61kNqverZ3pLUvxURg18TG8k&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=D6qXk-p6shdHY_3VSETObw&oh=00_AfG72OlWCe_1UnLWY3RiLPIsbjaSgmy8kygLT_llLCRvbQ&oe=68087D68",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491800127_683671111017739_8900069126737708738_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGl8j9uq4Gr7XfvfIaYNf0zeJVW20VXzGx4lVbbRVfMbDuy7NspUG-VD2iREtkaOuVaTNAwNZU1Jd8oCtwwdBBA&_nc_ohc=1sNpv66PKW0Q7kNvwFCKjw5&_nc_oc=Adk9ixQOzE1y91keYp-w7-Ax8W5VAx2PzxDNjgSUPwYww4QlSsuBrQWCpe5WRyl9bjg&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=8dm3IiscGVQXM-UbZK8fCQ&oh=00_AfEqzszUh8nbAuUBXws5dD21RMxduEw7kug3kaboftx40w&oe=68088CD9",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490713018_683668481018002_3930030663336138938_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEja1WAYNyoEuM_jTssWF2E6w_qB8SPqsvrD-oHxI-qy82sPAZxz17yY3LuB1RHNljabbFuBlAqMpwT0wH2QYyX&_nc_ohc=Dx2hk0Q0t9gQ7kNvwH0uqLy&_nc_oc=AdmR78lyuFWIsYq-ipzkzri5PT7QHdX5X5wwmWx24Q7CXuCe6PsMvp0jm5mEiiGosCc&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=TBPllLNj3aUsa7cFcQa5yg&oh=00_AfFCoy9WB5UAJEbx8tHlPAIH14OI72hw1I5L3N1DwpayQA&oe=68087FF0",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/492404863_683670681017782_5861374616053963249_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG_gfEFPKfAjsPdZXPin_WpV-PFPjO4qudX48U-M7iq53faM4XLin-nWh5lPJia4G1QX2ef9Zv7AhntdIT9Ld--&_nc_ohc=sp3mU0S_-cMQ7kNvwHofPRw&_nc_oc=Adk1j2n1TjOR1Esh3mdtbBBdvtQx8qij-NJ8JVqM0MoDg5KhgyJj-t_4VkfCHoHttKY&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=ncRfj2OVsg3VlWxJPkch4g&oh=00_AfFFidWJzOI6EUUnQJ0wUgVFhmftjUiGUnLhD60UUAgwSw&oe=680894C7",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/489926513_683668227684694_1812277412023543132_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFLmNEfjOoWpZlMfYTDU7dbvObTlIoUfOG85tOUihR84TO3yThe-pyy6bLG8IdA1wc-g2Xgry-rOG5OOHqSyWlY&_nc_ohc=7LkJM9JGT_8Q7kNvwFOIRGr&_nc_oc=AdnoodeCX8tQVtTXLwau8Irh_tgIydm_PWh1akAk_P5MayVf8wCaF1lCWqUvgg8aKAU&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=CXsYOjEXXKosYdmp8UOrtg&oh=00_AfHf4mbOI6-2SmFhppEM-mWWdfkU1UwKtzau-w3qwwtg_g&oe=68087E2F",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491339576_683668204351363_4378500384204526360_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEdpEVE56i1_h42ZIQ4HLRIn1F__guzwO2fUX_-C7PA7cM3Mz08ObuD1DtQqZCM37tfbBpOpyQW9p3UqZSSBSk_&_nc_ohc=0lqY70pV-L8Q7kNvwFYo9lU&_nc_oc=Adl4eXibxmc78Ng23xQuBV96A3cN0Pp0XRfY8Tuujd3N7RGp2zAckNTtF9PKcYHcovk&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=i8NRU9Moz54OgPQq2RZ3sg&oh=00_AfFm8l3BhYqwhDqtIyFEXmIpZCTffuCt1VUoUkw4hHhf8Q&oe=68087CAE",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/491011739_683667774351406_1035949152009064438_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF_8IInV1wa5-AdR61_0c95tywPznzXj4S3LA_OfNePhJwO5PCyNnTRa71Zx8p3xJ1bpVZtjckwEhWHZKNRTyeI&_nc_ohc=-aw39C3_pSMQ7kNvwEE_JMm&_nc_oc=AdkK9VYHaqZOISNGxj-f4EmZUBhukO9pH7eH7CoZiawXvc9XrhfiIZ4RJpSMMGOOWbQ&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=wt5s8aNHIbRIrma7OSSvIA&oh=00_AfFn-zi4thKLYKZtkSjZBBLh2SMCxnYHQXKAkYZToLrBbw&oe=68089054",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/490194764_683670287684488_799409964169458377_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGPuo-rhLot0lMV_ev_D-wSYY_M4LfW_Nlhj8zgt9b82VzkAvsxmV998BR6qj6nWB4nI7pAyy8c16Ok2oZBGjaD&_nc_ohc=ChHN5ceuYcQQ7kNvwG_ZHaA&_nc_oc=Adnt9pCuwuPmqteO46j7UJZNhFVSTE2ixjL9Jyydkf574E7jGIE3mWreZnFxe1c-2Js&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=ih7gX79yPdsoADa21q5zUA&oh=00_AfHHvdoqn33fWRMGhsAhJvoiaZFiJieW9xWKVG7ApSIxog&oe=6808969B",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/490765260_683670177684499_7708662824357548014_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGy6hnB8aRBJyb2WpSiXAQqBiHXS2g3HDEGIddLaDccMTH_vTGgiAF1941i6gcjuGso3aVrtxckgBLU27Ikgrb6&_nc_ohc=Vg7RY2UgzhQQ7kNvwFRJflZ&_nc_oc=AdnoDZZa1JzZgNijURIE71aduiJC5olKlsIdotVCsQTAt7qiQJ2MmW1bZyULv9JPR_I&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=v8e_eLq5fVtuGMp2c-i4pQ&oh=00_AfFAVeAAXP7QrKxTcqlkaPtIAWfauJMKIjstvUf96YxXCw&oe=68088A55",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/491296810_683667831018067_1672867861543141812_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHcg0G7tFjbUM0BH_OskyuBh8HNtKh0hP2Hwc20qHSE_YlnHBvXJQfW7J5ac7wu4vieU7lK6L75mtTtoyu0Qpkm&_nc_ohc=ECGMcVPjmpAQ7kNvwGF6-TX&_nc_oc=Adk8mVJTeheqfq7ctQlpyQ7IsfxHwCt9tzf1E1aaDuyJlgbNgXGJG3W7BDqSKustt4U&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=1M4lqHlCVfh3ns9a8JfheQ&oh=00_AfGEgxx1LYxIFggVgr-4vQwTnyAD5QxQWEnLVhD5-69zkg&oe=6808A38F",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/491267218_683669351017915_4637396055855953487_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEnVTXNu8bXyjKQbXkIS2fL8flaQmpNegrx-VpCak16CrY48j1yI7BmiRjy46EcnbN0PFsugt5M3osp6l8oF9Mn&_nc_ohc=Fq2vjRgbXzsQ7kNvwG8xkSx&_nc_oc=Adn_gDoWDyXZXOQyCj6awnBacJ8hrj1c4WFHR7mHm9UhfR4aLTmsh9oXRdUsg2nn_jc&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=m5n1qZUhCqSGZxbnNAcxbw&oh=00_AfE3mRtYVMaUdB1m7AHiLK68M-H9ccuVhu5rcHs8yoMsbg&oe=68089D46",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/491890438_683668767684640_1295218291270158039_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF7J5jRwvC2_hF4ILIGrs4MsoxKyiLaNfSyjErKIto19JscPolxqFOVXSJbv--TfosTDXoIuSQz9YLybxmHIDyd&_nc_ohc=a-ul75ysMHQQ7kNvwGEk4k3&_nc_oc=Adls7v7DH0oCQ2sLQjCfLZwAyRT01snNUGCO7l9qdL0HHGJNspCMJc4dEGPiBymPvtU&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=8S1_pIVMycg2ZQ84bI-JJg&oh=00_AfEo6tYBL8KZxXl_rPewCL8NLGOcf0cQbabYBhBE6Fr0vw&oe=680870FE",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/491228685_683668857684631_3550524566943456201_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFY_3Ql0RkOtJATXstqQjDVzJhMuKSrO47MmEy4pKs7jqIXnN7iaya_c__CSYOdaVU-TVPU52n4F0R8tfByw5ZV&_nc_ohc=w0s2w1HYyMkQ7kNvwEMDfWG&_nc_oc=Admk24_SPS8pSq4S28_T-A-JuGLcjpfobb0G0VwLFnm_4Xq7F5wAqQ32YMoA_NiANU8&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=J8zu62NagI3pu0chd2oHgg&oh=00_AfGHePtmQYEFCSsIg6fL_wE6UHgJqQ0fezsgCpZKBCR_Mw&oe=68088E4B",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/492008240_683667931018057_7012366717631987304_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGrlGZT3bBGq6R7KEHD2d7qhX2V-RkrfXaFfZX5GSt9dia7blOgGcchr45E9YSwTNSdwDnU5MNIM-DHHREtUTyF&_nc_ohc=IuE35S5ldeoQ7kNvwEVG2Jv&_nc_oc=AdkEy-x8u3w-_QgR5vhcBH2eHRNZfjnwTEK37OgHcqJURolgmWBF3TXCUSi1iW05HbM&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=D7gFR6gTBGJTaWsBbBMrhA&oh=00_AfGPg073_ktTTflS1MYRkD3HoqdEkdZvMtiuvTaxByKwnQ&oe=68089FF5",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
    {
      imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/489927224_683667974351386_4641432326804644019_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG6QBU7_O5epfTULgSNa1GqYH5-EEEERahgfn4QQQRFqG8qJNB9qdCitg00RisFZsZezb5cK_C021lvf7MFvueu&_nc_ohc=dWPXO7VWeiIQ7kNvwGLOPHJ&_nc_oc=AdkXCyC_IX_PKrHmiYL8j1Dx1JocRkF5BT4YuQwSpUdqfr-jbsQt3jc6pcClf-u6zc4&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=GcwR7ysmOhEM936ruCoifg&oh=00_AfHHqi7Jo33cQB7jswwP4kuPYG9YLJHq2cQODNhKeW0vcw&oe=68087A04",
      title: "Annual Easter Retreat",
      date: "March 17 - 20, 2025",
    },
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

  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const openModal = (imageUrl: string, title: string, index: number) => {
    setSelectedImage({ url: imageUrl, title });
    setImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setImageIndex(null);
  };

  const handleNext = () => {
    if (imageIndex !== null && imageIndex < galleryItems.length - 1) {
      setImageIndex(imageIndex + 1);
      setSelectedImage({
        url: galleryItems[imageIndex + 1].imageUrl,
        title: galleryItems[imageIndex + 1].title,
      });
    }
  };

  const handlePrevious = () => {
    if (imageIndex !== null && imageIndex > 0) {
      setImageIndex(imageIndex - 1);
      setSelectedImage({
        url: galleryItems[imageIndex - 1].imageUrl,
        title: galleryItems[imageIndex - 1].title,
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    // Add event listener when dialog is open
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Clean up event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, imageIndex]); // Re-run effect when selected image or index changes

  return (
    <>
      <PageHeader
        title="Gallery"
        description="Explore moments from our events."
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filter by Event
              </Button>
              <select className="absolute inset-0 opacity-0 cursor-pointer">
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
              <React.Fragment key={index}>
                <div
                  onClick={() => openModal(item.imageUrl, item.title, index)}
                >
                  <GalleryItem {...item} />
                </div>
              </React.Fragment>
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

      <Dialog open={!!selectedImage} onOpenChange={closeModal}>
        <DialogContent className="max-w-3xl bg-black border-none shadow-2xl">
          {selectedImage && (
            <>
              <DialogTitle className="sr-only">
                {selectedImage.title || "Gallery Image"}
              </DialogTitle>
              <div className="relative">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="w-full max-h-[80vh] object-contain"
                />
                <div
                  className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer text-white z-10"
                  onClick={handlePrevious}
                >
                  <ChevronLeft size={40} />
                </div>
                <div
                  className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-white z-10"
                  onClick={handleNext}
                >
                  <ChevronRight size={40} />
                </div>

                <div className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-md">
                  {selectedImage.title}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={!!selectedImage} onOpenChange={closeModal}>
        <DialogContent className="max-w-3xl bg-black border-none shadow-2xl">
          {selectedImage && (
            <>
              <DialogTitle className="sr-only">
                {selectedImage.title || "Gallery Image"}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Photo from {selectedImage.title || "Gallery Image"}. Use arrow
                keys or the on-screen arrows to navigate through gallery images.
              </DialogDescription>
              <div className="relative">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="w-full max-h-[80vh] object-contain"
                />
                <div
                  className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer text-white z-10"
                  onClick={handlePrevious}
                >
                  <ChevronLeft size={40} />
                </div>
                <div
                  className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-white z-10"
                  onClick={handleNext}
                >
                  <ChevronRight size={40} />
                </div>

                <div className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-md">
                  {selectedImage.title}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
