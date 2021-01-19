var products = [

    {
        id: 1,
        title: 'Asus Gaming Laptop ROG Strix G17',
        image: 'https://m.media-amazon.com/images/I/81Ha+SI+QML._AC_UY327_FMwebp_QL65_.jpg',
        price: 105999
    },
    {
        id: 2,
        title: 'MSI Gaming GL65 Leopard',
        image: 'https://m.media-amazon.com/images/I/510si4AnSjL._AC_UY327_FMwebp_QL65_.jpg',
        price: 98999
    },
    {
        id: 3,
        title: 'Acer Nitro 5 Intel Core i7',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71Pp8PLPNAL._SL1500_.jpg',
        price: 67999
    },
    {
        id: 4,
        title: 'ps4 slim limited edition',
        image: 'https://static.gamespot.com/uploads/screen_kubrick/1577/15776161/3392110-41448533415_91381f6361_o.png',
        price: 35499
    },
    {
        id: 5,
        title: 'ps5',
        image: 'https://wallpapercave.com/wp/wp6967907.png',
        price: 49999
    },
    {
        id: 6,
        title: 'ps4 slim',
        image: 'https://www.joyceshomecentre.ie/wp-content/uploads/2016/11/PS4-500GB-Slim.png',
        price: 27779
    },
    {
        id: 7,
        title: 'Xbox Series S',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAD4AZEDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAECAwQFBgcI/8QAVxAAAQMCAwMFDAYFBwkHBQAAAQACAwQRBRIhBjFBEyIyUWEHFCMzQkNSYnGBkaFTcrGzwfAVNWNzdBY0NkSCorIkVoOSk9HS4fElVGSVtMLUFyZVhJT/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACkRAQEAAgAFAwMEAwAAAAAAAAABAhEDExRBUSExkQQSUiIyQmFxsdH/2gAMAwEAAhEDEQA/APW0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREEoiIIREQEREBERARSoQEREBERAREQEREBERARSoQEREBERAREQEREBERAREQEREBERAREQEREBERARFKCEREBERAREQSiIghE0TRARNE0QETRNEBFOijRARLhNEBETRARDZNEBE0RARE0QEU6KNEBE0U6IIRNFOiCETRNEBFOijRARToo0QETRToghE0TRARNE0QETRNEBE0TRARNE0QETRToghE0TRARNE0QETRNEEomiIIREQEREBERAVmWpgi0Ju7dlbr8VFXfkHAG1y0aabytSx7JGtfGbsdmsQCL5SWnR2qDMkqppLgWY03HN6RHaVAvpYnd1lYzpIozG172tdIQ2Nu9zj2AarKYLuaDuJANt/uQVDljfKXm2+1zb2pykvpu9t1ysFfTVrO/McdHFTzVz2YO1hnhkaxjy12d0Dh4IGwue337HDa3FKluMU88EAxGgqOSZHdzIXh7czGhxJOtrB3vQbrlpvTPvAVQnm62/BaT9MxvFNJFHAyCrmdDTPrZzFmbEy8srwxps0O5g67E7t9yHE5alrO9aF00jYuXnAqI2sa0vexggeRZ5dlcW7ha3Wg3HfEvqn3Ke+X8WN+a1UWJQTvgjjimMk5a+FoA1pizP3y47gzyd982nBZqDJ76PFnwKkVTeLD7iFiogy++Y+Id8lPfEPWR7lh9aBBm8vCfK+IKrbJE7c4LAFnPEQc3lCwyhpdrkBy5rdV9FXyMnqn2FBmZmek34hVXb1j4hYPJSeh8wo5OT0CroZ+iLX2k6nfApeUcXj4qDYIteZZh5bljyVlUy+WU+8NP2hBuEXNSYxiUZNnxnsdG38LLCk2nxWK/g6V1t2Zjx9j0HXOksSLbu1OV7PmtdhtZLX0NNWSsYySYPzNjvlGR7maX14LMutaFzlez5pyvZ81bunZx4dqaFzlez5qeVHo/NYtRU0dI0Pq6mnpmkXBqZo4gfZnIWsftRsnG4tdjWH3BscshePi0WTQ3nK9nzU8p2fNamDHNnqo2p8Ww6R3BvfDGuPueQVsuAPA9E3FiN+h3IK+V7PmnK9nzVsomhd5Xs+arabi+5Y6vx9FqlFSIpUEIiICIiAiIglERBCIiAiIgIiIMWvzGlnDelkdktvDrG1rLnsGl5eiFQL2mmldziTYsyxHU9eW/vXR1mkDz2s+0LUwwwwRxwwsbHEwEMYwWa0Elxt8SgugDNmsM269he3VdXxpYjQi1uxWQrw4exBzuK7OS1tRy9LVRRs5JkQgnjc6ONjb6R8meiSSSLbz8NnS4ayChdRvnlfJLBHBU1LeZNKxjeTDQdSAG83fe3G+qz0QYT8Ohzh9PI+myytnjZEyF0TJBFyF2xyscNRYH2fG2zDZIMzqStkinmDxUyPiil5Uue+TO1pAa1zczg2wAsdxstinwQYEGGsp3wyxTO5WLLC0uAsaJosKYtB3bnXvfNc8bLYcfzu4aqEQEREEq3LNFBHJLKbMY0kjifVCrWix2R45GO/MILiO3rQTgVVLXYzilRKTc0UbWN4MjEos0BdUuN2U/WWI/wbPvQuyWoISyIqIuiWPUfdr8lra7Hdn8NJbXYpQwPBIMbpmulFuuNl3/JBsTuKwJwLEWHwWndt3sSCWjE3OG4ObSVRafYSxSzajZKtsKfGaPMfIqOUp3G/Vy7QPmoIqQ2x0HwWkqWt52g+C3lSLtLwWljhdr2kOY7tDm3BWjqvK9io6vAP1RQf6f7562i1eAfqig9k/3z1XjOL0OB4fPiNYbsZ4OGIENdUTuBLYmk6cCXHgATwRFeKYtheDU3feITiNji5sLG2dNUPAvkgjGpPyG8kALy7Ge6Fj1e6SLDAcNpcwYDG1z6qRmcMJfUAWHWMoHtO88zjONYhjdXUVlbMHvkY6NrGuYaeOHmyMigY43DRx4k6nXdruZm8npH6LjMB6VlFXpZp6lwkndJJITmdJL3y6Rxcx/Sc4nqVvngGxeBYjTvj0WFUDLbydw+i9B59JTzbHo8fovQjPpIKyHOdzgTzxvFQfPEcdVtMM2h2gwp7HUNbNDGS0yQ5ZpYHDK5xBhkDmcOoLU8zMOj0h9F9KfWVIyFuuXojS0Vug/1kHsWz232H4k5lJirG0NY5zY45+c2inkIHNBkN2nUaE27eC7brHEL5pu0FxbkvaTUiEjVrAbguPX1L0rYfbA8rBgmJzl0chMOGTzPDpInA5W00z7klp3Rkm4PNPBB6Yr8fRarGvFX4+i1KKlKhFkEREBERAREQSiIghERAREQEREFir8Q76zPtWsC2dX4h31mfatcxtxwv2oAV4cPYrTyyMBz3Bt3NYA7i5xsA1XEEoiIClQnsQEUfnel0EooKkIJXPY8fCQ/VXQLn8f8ZB9RBa2UP/aWJfwbPvQuzXGbJ/rPEv4Jn3oXZrUELUY7tDhOz1OJq6QullDu9aWHnVFQW78rToGjynGwH22tp9oqXZzDzUva2WrnLosPpySBNMBcufbUMZvef968Lr6+uxKsmrayZ1RUzSRulmzsFwb2Y1u5rG+SFRu8b242gxsujZUiionub/klI+Rl4nXty07QHuPXuHYuYa5p5PSLUwvuHkElxcN9rqWZ/B35W3gL3ew+lvUtDzyfjfMeTHe93X/PBBDPIseEG6Y+t+f+ijnER3zHSO/hWHyXKpgdzOn/AFffG0jy+I1VABtGLHdFpyI9F27VBm4fi2LYWWGhqJ4wMpdHna+F9238JE45D1cN66zD9pqXEhHBUsbS1jhzRfwEpt5DjuPYfiuD0s3QdFvmj9EVbPXp19Fw1yD5psfReAZv0TQCxv4cW3G/LP0XlO3eOHFsZkpoZXGiwp76OFrS4NkkynlprgEakWGu5o69e12cxKWj7nsOJyyOfNS4diD2Pdq4yCeWOO5PbZeOkuc7NziTkuXAlxdlfckh6mwubG975TfnHfkZ6iqvzjv6XpH6b92qDmsdPJ00d6DPXVZvmOh6XU6/jR66CAdB0tw8p3oP9RRc2O/c7yj6LPU/P2BmtuO4b2u9B/roQddDx4O9BnrqCq+o39MeUfpT+zUAnK3f0W+Ufo3/ALNSAb2semODvpT+0VOtv7I4O9B3roKiTztTuf5R6o/2aNLg4Wc5vOabte4FtpS64IYDpa49nvMEHXf5fB3VH66kB2Zuh6Y3B1/GO3c9Ue6bIY4cdwWnqJX5q2lcaKtJFi+SMAtlyn022du33XUxnmNXjXczrzDi9ThxJDK7Ds4BsAZ6V3KNyi5PRLgvZI+g1SitSoRQEREBERAREQSiIghERAREQEREFir8Q76zftXK7R4/Hs7hsdaacVMs1Uynggc4sBAaZJHXbrcAadpXVVfiD9Zn2ryzulykN2ZgB0y4hUOHbdkYKDraiqhqarAJIXOdBU08dbC6925HyDKbbrkO+S3wgebHPv3DLuXCbKTmowXZMk3NM2eiceOWCqkaPkQvR2DmM+qFRi97v9P5K2eREwpzUwCoIziEvYJS3ffkyc3yWVVOmjpquSnYZJ46eZ8DAAS6VrCWtF+s2C8n/TbY4BgklZJ+nn0UsMmPucwzQYnK/vgYc15aXiK/gnOzbzusmx6n3vJ6Q+BUd7y9bfmmGvq5aDDZaxjo6uWipZKmNwsWTOia57XDrBvdZtkGNyLbAGFpI7QSVQ6KMbi+M9TwSz5q7V1VNRU1TWVUjYqemifNNI69mRsBJNhr7AtRhu0mFYpMIImzxOkc9kJqGsDZJGMEpj5riQ/KQ6xA0N1m5SelGYbjQ7x1bj7FCuTRBpEjRYjpDySCrZtpbctUSOK5/aDxkH7v8V0A4rntoPGQfUUFrZP9Z4n/AATPvQuzkkihjlmme1kULHyyveQGsjYC5znHqAXGbJfrPEv4Jn3oVPdJxQ0OBsoYjabFpnRO4WpYAJZbnqJytPY4qweZbR47PtBi1RXu5RsOY09HEWEiKja0uY2xPSd0n9ptw00rRrH0f6v5m3kuA/5dXFTe7rm2rmkgTWFzEVDPI14QeeB3sP57VRDMl4rcmf5uRaJw9K1rqWZPB+K3U1ubINMzrf8AJGk3j368h55tvK/P/RVNz+D1ffwG+Vm/nXv+KohmXwfigfAa3kB8r3KgZebqzdF5b/Rfw/PyVxhf4PWTdD5bCfK4faoGbmaybo76sPku3oLV26at3M3Su+jOuv5+Ctk6b+B3P9Qdau8+zfGbm7wz6Mq2c1j0tx3tb6AUHqEb3M7k9OB5x0cR1B5pxJxK8zGXTojdwi6n9i9Ro6d1R3KCxoJfFTS1TQQb/wCT17pDu7AV5eL6dPc23jd1nWUEc2zhzej+y9BvYqtLno9L9l9L7FBJsdH7j9L6DetVEuzHp9L9t9L2IKdLDVu4fReg/wBVLt62cfofQZ6qkF2nT3D6b0HoSdenx+m9FqCbtv5HTH0P0v1VTzcvk9EfReg7sVQLsw6fSb9N9J2KBmy+X0R9N6DkAlvO6HlfQ+p6qkFuYdDpcOR+kceDUObXp+Xwm9RSM2YdO+YfTb87kHQbDyGPanZ0sy8+Z0JtkuWupZB5AC99i6DD2LwfYCB0+1WFO5xbSwVNY4nlNAynMben2uC94i6DPYgrUqFKghERAREQEREEoiIIREQEREBERBYq/EO+sz7V5J3TL987NngaKsHvE4XrdX4g/WZ9q8s7psRMOzNRwa/EKcnhchkg/FBVsG8uwylYfNYtWjT1jHIvVmdBn1QvKNgWOGGQP4PxeqI9jeSafsXq0Z5rfYPsQQJoS/IHjPdwt2t3gHdda1+zmzT64Ym/CqF1cHcoJjC0u5Qah5HRzdtrq7BR1McjA+RhhifmjyB4lktfKJQTk04kb7cL2WZ3xBrz9BpmAdl35d4Ft6CTLG12QvGbS46s26/DVRPPBTQz1E8jYoII3zTSPNmsjYMznOPYseSmndLIQ6PkpHNc7MDyjN1w22hvYb93arWOYc/FcIxTDWPDH1dM+KNz8xYH72h9tbHcexBoarFcG2tw3EMHpZpYX10fJUslTGWsfPGG1DWO3uBIANiL21G6w5rAtntpsOr8Or8fdBQYRs5SPMkhqY5W1BiMjmSNEYuAAQCTqQwDsFvAdl9pabFKGsxaBuGYXgXKTyTyVkM3fEUTS8A8mb6G5c425unBdRjNXQbW4LieFYVVEVVZT8tQOnZJBFWCCQPJhe8WIuCPde1hcM8cdxnG2z9Xo29FjmFYoeRgdM2R8RmgbOzk+XibYOdEQSDa4uNDruV8XF2k6tNvb1FcFsds/tRFitLVYhRSUFFh5nkInkic+pqZIXU4bGyInm2JJJ32GpyrvpBllPr7uwhJuz1dc8ZjlrG7Fzu0HjIPqfiuiXPbQeMg+p+KMLOyP6zxP+BZ96Fx/dKrnT7QmlGYtocPjgs0BwEszXVDiQesFo9y6/ZH9aYn/Ax/fBea7YS8rtNtA9xabV1REMzi3SGFsVvkrBpLm46fSZ5oA+KUMvzND5i3gd3McoGXm9DpNt4R27kjp+faoZluzoeY864+Q5UVN83/APr+Z08rcoYPFaC3+T38ARuLlDSPB2LbDkD41xt0tVUwt8FYt3Qbpj1u11VBgb4PQeY05Eg+VuVIDfB6N3ReacPJf+QqmEeD1F/Aa8uepypG5moGkfnr8HIKLCw0ZuZ5tw82fz/1Vs5bHRvRd5Lvo1dvoNeDPO9UZVonQ620N/CeoOtZHuWwsUM+xmEU8oBhqKfEKeYDjHLUTMO/2rxzEqCow2vraCpaeUo5zTOL2jnZA4NcCTuIsQvZtgP6IYD9Sr4/+JlWk7ouzslVE3H6NjnTUseTEo2DWSnaMrJ7AE8zc/s10yKjynm2PQ6Pqeg0ekqiG5j0el6n0n1lBu3MHEXANzmvua0XuG2U31P1vSP0n1FBSA2x3bupnoP9ZTzfV48Gei31kB09w8o+g/1EJ7eB8o9TPVQTzb+T0hwb9Jf0lHNy+T0R6HoO9ZTfX+0PKP0h9RQCbb/J9I+g71UCzdej5fBnqespGUObYMNnjgzfyh9ZQSdf7flHgGH0FsMIwqvxzEKXD6I2kmcXulvmZSwxSc+aUFoNhw6yQEHoHcvwt7IMTxmVhbywZhtHcb44Tykzx7XWb/ZK9Ri6DVraGipMNo6Ogo2FlLSQsgiadXZW+U49Z1Lu09q2UXQb7PxQVoiKAiIgIiICIiCUREEIiICIiAiIgx6vxLvrM+1cNt5QvrdmqiaNpdJhdXFXmwueRymKX4Agn2LuqoXhcLnUt9wButRQ1sNbR0lZHC+Omq4oJIuWsS4SsJLSAbaHQ+7rQcvslQyUeEbKxytLZasPrXg6ECqqHOZf+zlVFX3U8OosQraJ2FzOjo6ialfJ3y0SvMLiwlseTLw0GZdTU/rLCh60P3xXiWM4dTvxfHpXPlucRxB5ALbX5V56kHvOC47hOP0jazDZ+UjzBkjHtyzQSWvklZwPvt2q6MOs42qankST4HMzIGm/NBtmtqRv4rxvucVMtFtNSwRvfyWJw1FPPHoWu5ON0zHntBFh7T1r3O4sgs1NTS0dPPVVUscNPAwyTSyuysYwcSSuSHdF2V5UMc3EWU+YN78fSkU4BNg8jNygbxuWLB7pVXKyhwOjDi2CsxR3fBvYHveIvYx3YSQfcvOquhZB3vNHLmleQ4m+YnMede+8LUmx7ZjtG7Htn8RpaGeMmvpGmmla/wAHILtkbZw4Ota/auJ2awTaV+MYXJU4TLhVBgz5DmmqGyOqI2wtijha1pIve7iRYWJ0113Hc2mnfs/JFIXGGnxSvgo8xJApw4Oyt7ASV29wsXGb2lkqOCwqpthmG9pDvgs0rHnF2ntutRWPe+vWL/HVc7tD4yn+p+JW/hN2Eei4tK0G0PjKf93+JUos7IaYpiX8FH96F5ptU17No9pGnN+s659g0EWe3OL39ui9K2Q/WuJ9XeMf3oXCd0CkNPtRij8gEdRFBWtLjluJIBG5wt6zSCtQctdxI8ZvZvjYPNHf+d6hufwfT/q/kMHkO6/n1e9UjLdvi+k3ynnzXb+eKMy3Z4v+r7nOO5p6/l1oKmF3g9H+Y3saPS4qWh55LST+r74m9bvzbgrbMvg/F+YGhefS3XUtyDkjaPdT8ZDpd278FRcbntGSJLeAv4NnHMqRmszSTdF5tnou61S3IcgAiue9z5y/lH2KG5LR+L3RWsJD5L+v8+9BBzWbo/c3yG38WeCtm9jo7cfJZ9Gq+bZvi9zODzpyZtrv9itkNt5G4+S70Asj3XYH+iOA/Vq//Uyrp+HDje/G+ljdcxsB/RHAPq1e7+JlXUKo8s2t2DmhM+I4DE59Mc0k1BHmMlLc3c+mYNXM9Xe3hcaDzqzrnR9muym4eMpEm43cLezRfTHvIPA9XsXP43shs1jpdLU0xhrDY9+URbFOXDcZBYxu97T7UHgwvbXNw4O9F3rJb28fS6m+su/r+5hjMRJw3EKCpYLkMqY3UstrEWJs+Mn3hah/c/22bzRhsTxqM0VVQluoA8pwPDqRXMa38rpN6/pPrKBewHOvYC1nHXK7qcuug7nG2UzhysWH0ove9RUxPtZ2bo07XldRhncxwqF0cuL1klYWkHvejYaWn6rOfcykewtQed4PguK47Vd64dTmQtJbPK8yMp6ZpDbOnmBIA32aNTZe2bO7O0GztI6GBxmq6jI+vrJGhslRI0aANG5jdzG8PabrZUtLRUMEdLRU8NNTRC0cMDAxg6zYcTx61euiKllRdBvs/FYl1lw+LZ7PxSqrRFKyIREQEREBERBKIiCETRNEBE0TRARNE0QWahocwNPlSRsv7SuNixCKrZC2miZGMNjrIKmmjD2Mo4u+HMikabWJe1oFuGpXYVZtA5w8ktd7LarmWQ0zaPF6mKNsclbTwyzNjcbAxZspsdx1JKDOqf1nhZ7YfvSvIsVmw/vzHLy05l79xFuQSAymTlngARtu6/uXq+JShlTQOsbujY1mVpNiXONzbgs5smGNcyYmgbPYEvPICUOIF+dbNdWDie5/srVUlU7Hq+nfTnvd0OHU8oLZrS9OpkY7VtxzWg67zYcfSrrAOI4eN9ZTcd8zN/xUfpPDeNdSD/St/BUYG0mDUmN0MlFVB5iL2zRviNpoZmdGWMnS/Ajjf4cJDsFUGVsdTtBK6lBs5tNQuZWPbuy8pI4sbpx19i9IOKYRudX0n+0BVs4pgQP8+pL/AFj+AQXcJoabDqSmpKWBsFLTxiKCJpJyN1Ju46lxNy48Sb8VslgwV1DUEinqYJSOEUgJHu3rIEgKmhfVmUXCqDlQ86KwYLNJZW9YDh7jYrRbReMg+p+JW8cQKiPtD2/EXWi2h8ZT/u/xUos7IfrXE/4GP74LWd1LDncng+LxtvyZlw2oIsTlkDpodD2h4/tBbPZD9a4n/Ax/fBdRjWGQYzheI4ZNoyrhLGP+imHOjkHa1wBVHzmM+njekze1t7GI71DeUuzx2+AeQNzSrtVT1FJU1NNVxsjqYKl8E7HB1xLEwtfb27x2Edax2lng/F/1fcHG12Ef9FRWM3g/GeZ3lnrIC/wdzJ5knns33df/AJqhuU8nbk/Mbo3HdmspbbwdgzzHmXdbutBU3N4O5ktaHzjOObgNfaqQXcy5fui3ysPku6kaOhoPM7ojfTNxUAdDTcI90QHkuUFNzzdXahu+Vv0Z3n7VQTodfJPnP2dlXY83Q6Bnm28Izw/PzVBvro7cfJb6AUHuewP9EcA+rV8b/wBZlXUBcvsD/RHAPqVf/qZF04KqJRRdEDioRCWgEncgadf4KLOPA/NUs5RxzO07Bw96ugDj87oLd7b0urvN6vitfimIsw2KlIYx0lXUGBr5CGw07GRumkqJiSOawC9r3PBBl3WbCWiNlyN3WtFhOLw4m+tjbybzTR0kzKmFpbDVwVIflkYxxLmkFrmuaTcEH37QZRfQWQZXKRel9qrBB1Bv71r5HxRtzSODW5so385xFw1oHxVIlc0CSJ9266HcQDY6b1NK2SKmN7JGte3UH82VWigImiaICJomiCUUaIgIiICIiAiIgx6sAwPHAloPsJsVx00U+HuxCnLnPpKjDpX0znakPiuXseesA39g7F2VX4h31mfatJVUkFbA+nnz5H6ExuLH2IsQHDgRoUGJijpC3DpWO070hkeb72anQe1c++nYXvcQLuc4m/auu70hc+lc7WOljYyni8huQktLuu3AKo4dQuc5xjuXEuNzxOqDjTTR9Tfgne0foj4Bdl+jqAeZHxUiiofoGION73jHkj4J3szqC7PvOi+gZ8FD6ChkBBha3Te3QoOIdTuY5skTnMkbzmvjJa5pGtwV0mEY0+oIpqwhtU0XY8aCcDifWVmswmWLM+LwkY17QtJLE4EPYS17SHNcOkHDcbqyjv2TC29S6QEb1zeHYqZmiGY2nZob6Zx1hbI1Gm/2rQvOcDUU465PwN1ptofGQfu7j4lbWkvLK6Y3yxgtaTxeer2LV7Q+Mg/dfipRY2Q/WmJ/wMf3oXcLh9kP1pif8DH98F26Qeed0HZaSrY7HsOic6rgjy4jDEOfUwMaQJowBrIwb+tv1dfJrG7MrnuZeKzszQ1wym5Ht4r6c/Oi822s7n5qZJsTwGONsznPmqcOJDI5ZCDeWkJ5rXnyhoD2caPK25jyfSJPIixlHrdSN83rwhteU7ruVckEtPJyE8ZinhfFHLDJCWTRPaDcOjdZw7DuVtpPg+n5ndGOBOigNI5mrL2h15U8cypFuYeZuj8t/ouVbc14/GeZ8mMcXKkZgG+M3R7yweS5BRzbDxe5vpnzZ7FbNrHRu4nc76MK7zsoJz2s25L2gdAi5I0W1wrAK/EuSqHcrTUPNcZ5Lh8oy9GBh1N/S0Htsg9b2BH/ANo4Du6NXu3fzmXrXT2Wn2ap4KTA8Mp6dmWGJkrWC9zblX6knieK26qJKhEuoCsyHM5reA1KuOKtMNy53Wfkg0G1G0VRgkFHDQsidXVvLOY+QZ2wQwkML8m4uJNm33W3HjpsA2yxuTE6Ogxjkpoa6ZtPHMI2RSwTSXyeLAaWkixuOIN+C2W1mB1WKQ0ctJI2OuoJJTA6QOMUkMuUvhkDdd4Bafb1rS7ObN47Ji1FiGLimZDh8gnp4KUl5mqQC1jpHEbm3uBxQelGwvc7rl2/S2/csOqpsNxamno6uET0swYZIpLtJAOZrmuabg6cDwVb6ygZL3tJWUTag83kJKiESkngWOde6cm2mbKYYnGRzm5hmc9xAuLc88Or/dqFigw/CcEpRS0FOIIHSOlIDnPkklcOc973kkn3q9V11HQ0VTiFVJkpaaLlpHgX5tw0ADtJCWFRGRMx7QHgtzXY7QbzkO73pU0dJVU0+HVUUboKmAwyU7nND3xO00bfNccD2KjmcUki2kloKbCq+CLE8KczF2QvfKaapo5/BFsr2xjRwItzSLO7bphk1DstSzYZimJxz4gXzYvXvdI5rIRUm4ZEHguIAbc3y/Oypnp8O2QfR1MAqp5sVqO8aiur5o3GkpIWOqeTaS0M11sLXO4bgBaZhmFbYtqcRqW1dLLBU1GDyy0c0LmYhS05Ba4vyltjmIu2x3j2c77rjrf6naYdPHLG0xva+KWOOpge03a+ORocC323us9aeFsVJ3oyFgZDTMigjY29mQsaI2tuddAFtx19evuWqJREUBERBKIiCEREBSoRAREQWKzxDt98zdBqd99AtTDNTzsEkErJWZnszRk5czDlcNRwK2ld/NpfZrv1Hu1WkomsZE6INF4HhjpGgAT3Y1wmsOsEA+xBmhXAVaCugbvYgm6LTVOJ1wmwqhpn0kdTXCeV1TVROETGRuyhkcTnauPDXq61n0jcYb3wzEu9Xhr297TUzHx8q0t52eN24g2CDJREQFrqzCoKnM+O0cu/Qc13tC2KIOKqqCppnXex7C03a9t8vtBWbRjFKzIxjA0bn1T8wY1vW0He7q1XUHUWIBHUQCPmnUNLDdZXdFMMTIIo4mXtG3Ld3SJ3lx7TvWg2h8ZB+7/ErohuXO7Q9On/AHZ+1QWNkP1pif8AAx/ehdwuI2RH/amJ/wADH96F2y1AUf8ANEVGqxfZ7AMdYG4nRRSyMbaOdt46mIb+ZMyz7dl7di4ev7lgcS7DcZeGh2ZsOJwiU3HXNAWut/ZK9MuANSBoXHUbhvOvBUGSICK8sYEpAju9g5QkXAZc6oPHj3MNq2Wy1GBva0ts4z1bLht7XbyBPHrVcPcyxUW78xTDoQCP5pDNO7TqM2QfJevSvZG0F7mtDnNY3Nxc6+lgL3WumqKUte9s0ZaxnKOcCcuTNkzNNrHXTS/z1DiqTY3Z3Cy2QxSVlQzVsle4Pa09bIWgRjs0J7VfquPwW2qain8MC8gxsbJIHRyNcAbAc1wBubgAb9e1aSpmiu4HlBqQSY9G5XBri7W9gSAdP+YdZgf6qofZN969bNavA7/oqhvvtLf/AGr7rZXBsQboiUUKNdVBblOnt0RugAVDzdzR1alVAoLmh368Fz+12J1WE4BWVFG8xVM00FDHM0C8InJzvF+NgQD1lbzMFh4rh9LjGH1mG1VxFUBuV4Ac6KWMh8cjQd5B4X+1B4VyYfHI90pdcue4Ou8uN7kuc4kknrXqXc8xatr8Or6OrkklOGzwR08shLniCZhcIXONyctjbsK5yTY3aiIyUcdJQzRvcQytFUyOnDCek+JzeVBHEC/YV3WzuB0+z9A6mY8SzzymorJw3IJJiMoEbeDANGj2nsVGyxKqnosNxerp2h1RS0FXUQAgEcpGwkGx323+5eNNZV1JfWuqpXyuImM5eTM9zhmMmfQ347/hx9olu5psbO1sbXGuhBHauAqdh6F9TI2JlfHTSvL3UkE5bSHMbkAuFwOy6DqcBqRjmz+GSYpDFVGpgdy4qY2yMqBFM+Jspa8W52UHd2rcxxwQRxwwRRxQxNDI4oWNZGxo4Na0ALFo6eOkgihYGtbFHHExrBZjGRtDGsYN1gBYLIzIJdYrY0z88MZ4gZD7QtZcLMoXays+q/8ABSqzlCIsgiIglERBCIiAiIgISbooO9Bj1msEm7hod178T1LQRQiiiLYWOiz1MkjwXGUOL7bidQOrVbTHJsSgw+ebD6QVdSx0LhAQTnZnGe2Ug3t1arm8P2qwardyFQX4fWAhr4a0FrM3UJDb+8B7Vxyykym65ZcTHHLVbeKpzljSzVznNDm9Hmm19dbLOHD8Vid7w5ontGUNOdvJnmPBJN9NLdoWXYZTY2uCLjXeF236bdf7jTSVVFTR4TLV0Us8TXzvbVsiNS6lla45LgMDzfsb9it4RnkxPE6mlbXMwqaJpvXcoDNWOcC50bZeda1/yNN1yc+81c993NyN/BS2NwIc6aeQ2taR9x8AuE4nEuWuXdf5n/Wd1XoifnipAJ4E+y67tI0TRV8nJwY7/VKcnJxaR7dPtRLdLZQKl0tOzpz07LenNE37XKw7EsGjvnxPDm+2rgv8A5Z+7Gd0+7Hyylz20PTg/dn7VsH49s3H0sXw/wDsyl5/uArnsaxzAah8RgrmShrC1xZHNYG997mhZ5mE/lGLxuHO8+WXsl+s8S/gY/vQu1XmeBbRYLhlZW1FTLLyctM2JnJRFxLhIHa6reO7oey7ejHiD/ZHA3/FInP4fljqeF+UdesWtglqYWxRuY3n5iX5rdG2gbquUd3Q8NcfAYXXydWsev8AqZlH8uK+XSDZmvf75z/ghU6nh+U6rheXSVmGR1kNI14ia+Jgp5yYw/PSyNyTQhxs8X4EEKziWCtxB+HFkrYYaQZOSETXBjWva9phcLZXCwbccFof5T7ZSeJ2UnH7xlTv/tBin9L90uYeD2epY+14aLD/AEk4U6jD+06rDtv4dbVRGdjRmDHNlZK14DszXNOvJuaRrw471rZabLynh3EOawQ8xgMOSQyAtO4i59H5BaTlO6vLupcOh6rmm0+blS7D+6tP0sSw6G++xYD/AHIPxTn+Mb8Lz/GN+F2WjjjM7mySOdLEY3F2QmxsD5Ou4AXuB1arUVFKwFxaJXaNadSQ5rbANfYa2sPh2LMdst3Q5/HbSQMHHJyx+QDVaPc+x+bWo2pl1FiI4JTpe+maa3yWuZlezXMyvtjXS4Hf9FUQPVN969bFnRCwcIww4Ph1Jhpqn1JphKDPI3K+QvkdIbi53Xtv4LOGgXaert6+9SoJ0KnVUP4qjFc+0jvzwUGUda19XUthqSwuF3Ma7fprdUioB0B19ot170Gw5XtHxA06yStLWbQPa4xULY3NGjqiRpcHH9kzQW7TdavEMWNWXU1M897DSaVvnzuytPoD5+xYjGlBsv05jR/rTR9WngH/ALU/TWNf96H/APPT/wDCsIMKkMPUorN/TWM/96H+wg/4V0uE09TX0FPVzV9QHzcpcRxUoYMry0WBiJ4da47Ieo6arocM2lwfDKKnoag1Bnhzl4jjaRz3F4sS4daUbeekrqYF7X99RDptEbWVLB1tDOa4dmUHtWM2drmsexwLXjM1zdQ5t7XBVmXbPCxbkaeaQcTI5kdj2WzLSPxzDTVGSBj4IqhxdPC5zXxxSnzsTm62Pliw11UiOj5Uday6CS9QG33sePhqtCKptgcw13W6utbHBJDU1Urm3LIIzmdwzv0Av7LlWq6NERZBERBKIiCETVNUBE1U6oIQpqmqAtVimBYNi7bVtJG99rNmaMk7PZI2x9xW21VOqlxl9KzljMprJwMmzu1WA3fgNe6spL5jQ1YBNuoNPMPuylUfyh26ecsWzFiNCXQVJ1HVmeAvQSNFOq4Xga/bdPPyLP2ZWTw8+/SPdPl8XgsMX1oIh95MVNu6xLubSw3/AINp+xy9ASx7FOR5yqdNe+dcB+je6nL08UgjvvtNGLf7OJVfya2/l8btJlB4Mnqj/gDQu9SyvT497Tpce9vy4H+ROPy/zjaWc9je+Xf45VP/ANO2vN5sbq39dom/+95XeJ8En0/D8LPpeH3/AN1xLO51gY8bW4g/rsYGX+DCshmwGyzd/fz/AK1Ta/8AqtC65Fen4f4r03C/GObZsTskzfQuf+8qKh32PAWQzZPZNm7CaQ/Wa9/+NxW9TVanCwntG5weHPbGNZHgOzsVsmE4cLf+FhJ+JaVlsoMOjtydHSstuyQRN+xqyNVOq39mPh0mGM7KAxjbBrWgDqAH2KpNVOq1pZJEImqaooinVRqgKCFVqoQYMtDNLNJK3Ea2NrwLQs72MTLcW54i7+8rTsMqXEWxjFGWFrM7yA+dOVs1OqDVfoqq/wDzeL/Gh/8AjqDhNSd+NYt8aH/462uqaoOPxbZPGKyRs1HtHUxFrWgx1lHR1DXFvrxsY4X6lrKjY/bGWB9PHjWGxcpzZJWU1RnLPRAc4gX4r0NEHmkWwG1rbZtqaZgG7k8Mid/iIWwj2Gxpo5+1k5P7PCqBo/vXXeKNUHEfyJxf/Our/wDLcP8A+FP5E4v/AJ1Vf/luH/7l3GqjVBxP8isX/wA6qv3Ydh/+5WJe55JUSumn2irXyvDQ53etK0ENFho3Rd8oQefu7nMnm9oKgfvKOB/2PCw5e5zjpN4toKY23cpQOB6/JkK9M1UoPO4NjdroouRdjGFuaD4Nxpqjmjqyh4HzXQ7P4HjOEmY1uNd+RSA5aaOkiggikNvCNNy++lt66JEAIp1UaoCJqmqCUTVEEIiICIiAiIgIpUICKVCAiIgIilBCIiAiIgJqpUICIpQQiKUEIiICKVCAilQgIilBCIiAiIgIiICIiAiIgIilBCIiAiIgIiIJREQQiIgIiICIiCVCIgIiICIiAiIgIiICIiCVCIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiApREEIiICIiAiIglERB//2Q==',
        price: 34999
    },
    {
        id: 8,
        title: 'Xbox One X Cyberpunk 2077 Limited Edition Bundle (1TB)',
        image: 'https://m.media-amazon.com/images/I/71RW-dl0szL._AC_UY327_FMwebp_QL65_.jpg',
        price: 44899
    },
 
    {
        id: 9,
        title: 'Microsoft 1 TB Xbox One S Console- Forza Horizon 4 Bundle',
        image: 'https://m.media-amazon.com/images/I/61O6WBw8KsL._AC_UY218_.jpg',
        price: 26699
    },
    {
        id: 10,
        title: 'ps4 controller-gold and black',
        image: 'https://images.yaoota.com/uykHyogufgN_cJBlphVnEblgOwg=/trim/yaootaweb-production-sa/media/crawledproductimages/9b49077c616ea2f1cc7a82c55e06883a396c88ab.jpg',
        price: 4555
    },

    {
        id: 8,
        title: 'Xbox Wireless Controller - Phantom Magenta Special Edition',
        image: 'https://m.media-amazon.com/images/I/71NW2LibZzL._AC_UY327_FMwebp_QL65_.jpg',
        price: 5499
    },

    {
        id: 8,
        title: 'ASTRO Gaming C40 TR Controller - PlayStation 4',
        image: 'https://m.media-amazon.com/images/I/71sPAw+pqbL._AC_UY327_FMwebp_QL65_.jpg',
        price: 10499
    },





]

function disply_shop() {
    all_cards = ""
    for (item of products) {
        all_cards += `
<div class ="card  text-center mr-3 "  style="width: 20rem; height:28rem">
        <img src="${item.image}" >
        <div class="card-body" >
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">text here.</p>
          <h3>price- &#x20B9; ${item.price}</h3>
          <a onclick="addtocart(${item.id})" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>

`
    };
    document.getElementById("card_section").innerHTML = all_cards
}
disply_shop()


add_cart = {}
total_price=0
//add to cart coding or logic
function addtocart(prod_id) {

    if (prod_id in add_cart) {
        add_cart[prod_id]['quantity'] += 1
        add_cart[prod_id]['cart_price'] += add_cart[prod_id]['price']
        total_price += add_cart[prod_id]['price']
    //    console.log(add_cart)
        return
    }

    //console.log('adding')
    for (item of products)
        if (item.id == prod_id) {
            add_cart[prod_id] = item
            add_cart[prod_id]['quantity'] = 1
            add_cart[prod_id]['cart_price'] = add_cart[prod_id]['price']
            total_price += add_cart[prod_id]['price']
           // console.log(add_cart)
            return
        }
}


function display_cart(){
    var all_cart = ''
    for(key in add_cart){
        all_cart += `
        <div class="card" style="height: 120px;" >

        <div class="row" style="height: 100%;">

            <div class="col-md-3 cart-prod " >
                <img src="${add_cart[key]['image']}"
                    alt="" class="card-img" style="height: 100%; width: auto;">
            </div>

            <div class="col-md-3 cart-prod ">
                <h1>&#x20B9;${add_cart[key]['price']} </h1>
            </div>

            <div class="col-md-3  cart-prod ">
                <h1>${add_cart[key]['quantity']}</h1>
            </div>

            <div class="col-md-3  cart-prod ">
                <Button class="btn btn-primary  "  onclick = 'delete_item( ${key} )'>Delete</Button>
            </div>

        </div>

    </div>
        
    `
    }

    all_cart += `<center><h1>Total Price = ${total_price} <h2> </center>`
    document.getElementById("cart_section").innerHTML = all_cart
}



function show_cart(){
    display_cart()
    document.getElementById('cart_section').style.display='block'
    document.getElementById('card_section').style.display='none'
}

function show_home(){
    document.getElementById('cart_section').style.display='none'
    document.getElementById('card_section').style.display='block'
    document.getElementById('card_section').style.display='flex'
}

function delete_item(key){
//console.log(key + 'deleting')
total_price -= add_cart[key]['cart_price']
delete add_cart[key]
display_cart()


}
