import React from "react";
import './Header.css'

const Header = () => {
    return (

        <>
        <div className="screen">
        <div className="navbar">
            <div>
                <div className="custom">
                    <p>Customer Service</p>
                    <p>Newsletter</p>
                    <p>Find a store</p>
                </div>
                <div className="hm">
                    <p>H & M</p>
                </div>
                <div className="sign">
                    <p><i class="fa-regular fa-user fa-xl" style={{color: "#121212"}}></i></p>
                    <p>Sign in</p>
                    <p><i class="fa-regular fa-heart fa-xl" style={{color: "#00080f"}}></i></p>
                    <p>Favourite</p>
                    <p><i class="fa-solid fa-bag-shopping fa-xl" style={{color: "#1a1a1a"}}></i></p>
                    <p>Shopping bag (0)</p>
                </div>
            </div>
        </div>

        <div className="leftright">
            <div className="left">
                <p>Ladies</p>
                <p>Men</p>
                <p>Divided</p>
                <p>Baby</p>
                <p>Kids</p>
                <p>H&M HOME</p>
                <p>Sport</p>
                <p>Sustainability</p>
                <p>Sale</p>
            </div>
            <div className="right">
                <div>
                    <p><i class="fa-solid fa-magnifying-glass fa-xl" style={{color: "#090404"}}></i></p>
                    <p>Search Products</p>
                </div>
                <div></div>
            </div>
        </div>

        <div className="member">
            <div>
                <p>Members get free shipping above Rs.1999</p>
                <p>Free & flexible 15 days return</p>
                <p>Download the H&M App</p>
            </div>
        </div>

        <div className="season">
            <div className="season1">
                <div className="seasonleft"></div>
                <div className="seasonright"></div>
            </div>
            <div className="season2">
                <h1>Season for knits</h1>
                <p>Hello bows, frills, and Puffers!</p>
                <button>Shop Now</button>
            </div>
        </div>

        <div className="men">
            <div className="mens">
                <div className="mens1"></div>
                <h1>A/W 2023</h1>
                <button>Shop Now</button>
            </div>
        </div>

        <div className="win">
            <div className="wins">
                <h1>A/W23 WARDROBE WINS</h1>
                <p>Key staples for the season ahead!</p>
                <diV>
                    <button>Ladies</button>
                    <button>Men</button>
                    <button>Divided</button>
                    <button>Kids</button>
                </diV>
            </div>
        </div>

        <div className="category">
            <div className="category1">
                <div>
                    <h2>Categories you might like</h2>
                </div>
                <div className="category2">
                    <div className="category3">
                        <img style={{width: "100%", height: "100%"}} src="https://lp2.hm.com/hmgoepprod?set=source[/3c/3e/3c3ef22dc28f08692888f4d4757ee07b5780f7ac.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"/>
                        <p>Ladles</p>
                        <p>Tops & T-shirts</p>
                    </div>
                    <div className="category3">
                        <img style={{width: "100%", height: "100%"}} src="https://lp2.hm.com/hmgoepprod?set=source[/e5/f2/e5f2264d40d606a11354b2f412d968311d45f98e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"/>
                        <p>Ladles</p>
                        <p>Trousers</p>
                    </div>
                    <div className="category3">
                        <img style={{width: "100%", height: "100%"}} src="https://lp2.hm.com/hmgoepprod?set=source[/44/f5/44f551cfc8024bb7d33ca674d1c150b04ec99cb9.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"/>
                        <p>Ladles</p>
                        <p>Clothes</p>
                    </div>
                    <div className="category3">
                        <img style={{width: "100%", height: "100%"}} src="https://lp2.hm.com/hmgoepprod?set=source[/5e/da/5edac9dd394beebfa4394182b73da00fd2beb676.jpg],origin[dam],category[ladies_accessories_bags_crossbodybags],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"/>
                        <p>Ladles</p>
                        <p>Accesories</p>
                    </div>
                    <div className="category3">
                        <img style={{width: "100%", height: "100%"}} src="https://lp2.hm.com/hmgoepprod?set=source[/b0/c0/b0c0b2c53fab341e69a1e86484f570a7b892a852.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"/>
                        <p>Ladles</p>
                        <p>Shirts & Blouses</p>
                    </div>
                    <div className="category3">
                        <img style={{width: "100%", height: "100%"}} src="https://lp2.hm.com/hmgoepprod?set=source[/4d/af/4daf8a1ce11a48b3bc9cab38b872d88ff9e2c15c.jpg],origin[dam],category[ladies_dresses_shortdresses],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"/>
                        <p>Ladles</p>
                        <p>Dresses</p>
                    </div>
                    <div className="category3">
                        <img style={{width: "100%", height: "100%"}} src="https://lp2.hm.com/hmgoepprod?set=source[/35/a3/35a3b5c7ac800ee8efea144b1e792fab7ba584bc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"/>
                        <p>Ladles</p>
                        <p>Cardigans & Sweaters</p>
                    </div>
                    <div className="category3">
                        <img style={{width: "100%", height: "100%"}} src="https://lp2.hm.com/hmgoepprod?set=source[/d8/5f/d85f3c6af9df707185435d0ae26c68e5c06c6ad0.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"/>
                        <p>Ladles</p>
                        <p>Shoes</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="baby">
            <div className="baby1">
                <div className="baby2"></div>
                <h1>Baby autumn fashion</h1>
                <p>Stuning autumn styles for sweet babies</p>
                <button>Shop Now</button>
            </div>
        </div>

        <div className="kids">
            <div className="kids1">
                <div className="kids2">
                    <h2>New Arrivals</h2>
                </div>
                <div className="kids3">
                    <button>Ladies</button>
                    <button>Men</button>
                    <button>Divided</button>
                    <button>Baby</button>
                    <button>Kids</button>
                    <button>H&M HOME</button>
                    <button>Sport</button>
                </div>
            </div>
        </div>

        <div className="jersey">
            <div className="jersey1">
                <div className="jersey2">
                    <img style={{width: "100%", height: "100%"}} src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F24%2F6a%2F246a4d20fdeb95a2530eab9c7ae54030fe445600.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"/>
                    <p>Crinkled button-front top</p>
                    <p>Rs.1,299.00</p>
                </div>
                <div className="jersey2">
                    <img style={{width: "100%", height: "100%"}} src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F8c%2F69%2F8c6904f4b7089c90e977c3f5e7556b3ad84c0814.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"/>
                    <p>Knitted jumper</p>
                    <p>Rs.1,499.00</p>
                </div>
                <div className="jersey2">
                    <img style={{width: "100%", height: "100%"}} src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0e%2F77%2F0e77d181a703925c11123f14f219d62cb4832755.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"/>
                    <p>Cropped jumper</p>
                    <p>Rs.2,299.00</p>
                </div>
                <div className="jersey2">
                    <img style={{width: "100%", height: "100%"}} src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F33%2F32%2F333299abcae6f4ff8b3109d64d43d8310bfaa8f6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"/>
                    <p>Draped jersey dress</p>
                    <p>Rs.2,299.00</p>
                </div>
            </div>
        </div>

        <div className="season3">
            <div className="season4">
                <div className="seasonleft1"></div>
                <div className="seasonright1"></div>
            </div>
            <div className="season5">
                <h1>The blazer: A trans-seasonal hero</h1>
                <button>Shop Now</button>
            </div>
        </div>

        <div className="studio">
            <div className="studio1">
                <div className="studio2"></div>
                <h1>STUDIO</h1>
                <p>The A/W 2023 collection launches 28 september.</p>
                <button>Get Inspired</button>
            </div>
        </div>

        <div className="read">
            <div className="read1">
                <div className="read2">
                    <p>MAGAZINE</p>
                    <p>A WORLD OF INSPIRATION</p>
                    <p>READ H&M MAGAZINE</p>
                    <div className="read3">
                        <div className="read4">
                            <img style={{width: "100%", height: "100%"}} src="https://image.hm.com/content/dam/hm-magazine-2023/september_2023/7428/7428-Outdoor-Movement-Magazine-image-1-1688x1126.jpg?imwidth=384"/>
                            <div className="read5">
                                <p>INSIDE H&M</p>
                                <p>Gear up for the outdoors</p>
                                <p>Read The Story</p>
                            </div>
                        </div>
                        <div className="read4">
                            <img style={{width: "100%", height: "100%"}} src="https://image.hm.com/content/dam/hm-magazine-2023/september_2023/3128/3128-3x2-top-image.jpg?imwidth=384"/>
                            <div className="read5">
                                <p>INSIDE H&M</p>
                                <p>The moment for dressy menswear is now</p>
                                <p>Read The Story</p>
                            </div>
                        </div>
                        <div className="read4">
                            <img style={{width: "100%", height: "100%"}} src="https://image.hm.com/content/dam/hm-magazine-2023/august_2023/lookbook-3088/3088-3x2-top-image.jpg?imwidth=384"/>
                            <div className="read5">
                                <p>INSIDE H&M</p>
                                <p>AUTUMN 23 MENSWEAR TRENDS</p>
                                <p>Read The Story</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="shop">
            <div className="shop1">
                <div className="section">
                    <h3>Shop</h3>
                    <p>Ladies</p>
                    <p>Men</p>
                    <p>Baby</p>
                    <p>Kids</p>
                    <p>H&M HOME</p>
                    <p>Sport</p>
                </div>
                <div className="section1">
                    <h3>CORPORATE INFO</h3>
                    <p>Career at H&M</p>
                    <p>About H&M group</p>
                    <p>Sustainability H&M Group</p>
                    <p>Press</p>
                    <p>Investor relations</p>
                    <p>Corporate governance</p>
                </div>
                <div className="section2">
                    <h3>HELP</h3>
                    <p>Customer Service</p>
                    <p>My H&M</p>
                    <p>Find a store</p>
                    <p>Legal & Privacy</p>
                    <p>Contact</p>
                    <p>Report a scam</p>
                    <p>Cookie Notice</p>
                    <p>Cookie Settings</p>
                </div>
                <div className="section3">
                    <p>Sign up now and be the first to know  <br/> about exclusive offers, latest fashion <br/> news & style tips!</p>
                    <p>Read more</p>
                </div>
            </div>
            <div className="icons">
                <div className="icons1">
                    <p><i class="fa-brands fa-facebook"></i></p>
                    <p><i class="fa-brands fa-twitter"></i></p>
                    <p><i class="fa-brands fa-instagram"></i></p>
                    <p><i class="fa-brands fa-youtube"></i></p>
                    <p><i class="fa-brands fa-pinterest"></i></p>
                </div>
                <div className="icons2">
                    <p>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.H&M</p>
                    <p>H&M</p>
                    <p>INDIA | Rs.</p>
                </div>
            </div>
        </div>
        </div>   
        </> 
    )
}

export default Header;