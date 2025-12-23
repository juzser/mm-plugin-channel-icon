(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52683, t => {
    "use strict";
    let e, i, s;
    var n, r = t.i(43476), a = t.i(71645), o = t.i(59544), l = t.i(18566);
    function h({onBookTicket: t, isSoldOut: e, isBookingOpen: i}) {
        (0,
        l.useRouter)();
        let[s,n] = (0,
        a.useState)("");
        (0,
        a.useEffect)( () => {
            let t = new Date("2025-12-29T14:30:00+07:00")
              , e = () => {
                let e = new Date
                  , i = t.getTime() - e.getTime();
                if (!(i > 0))
                    return "00d 00h 00m 00s";
                {
                    let t = Math.floor(i / 864e5)
                      , e = Math.floor(i / 36e5 % 24)
                      , s = Math.floor(i / 1e3 / 60 % 60)
                      , n = Math.floor(i / 1e3 % 60);
                    return `${t}d ${e.toString().padStart(2, "0")}h ${s.toString().padStart(2, "0")}m ${n.toString().padStart(2, "0")}s`
                }
            }
            ;
            n(e());
            let i = setInterval( () => {
                n(e())
            }
            , 1e3);
            return () => clearInterval(i)
        }
        , []);
        let h = () => {
            !e && i && t()
        }
        ;
        return (0,
        r.jsxs)("section", {
            className: "relative min-h-[100dvh] flex items-center overflow-hidden py-24 md:py-0",
            children: [(0,
            r.jsxs)("div", {
                className: "absolute inset-0 z-0 overflow-hidden pointer-events-none",
                children: [(0,
                r.jsx)("div", {
                    className: "absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cosmic-purple/20 rounded-full blur-[120px] animate-pulse-slow"
                }), (0,
                r.jsx)("div", {
                    className: "absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cosmic-cyan/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"
                }), (0,
                r.jsx)("div", {
                    className: "lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] bg-cosmic-cyan/10 rounded-full blur-[80px]"
                })]
            }), (0,
            r.jsxs)("div", {
                className: "container mx-auto px-4 relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:h-full lg:min-h-screen items-center justify-center",
                children: [(0,
                r.jsxs)("div", {
                    className: "space-y-8 text-center lg:text-left order-1 pt-10 lg:pt-0 lg:-translate-y-40",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "flex items-center justify-center lg:justify-start gap-3 flex-wrap",
                        children: [(0,
                        r.jsx)("span", {
                            className: "glass-panel px-4 py-1 rounded-full text-xs font-bold tracking-widest text-cosmic-cyan uppercase border border-cosmic-cyan/30 font-display",
                            children: "Sự kiện nội bộ"
                        }), (0,
                        r.jsx)("span", {
                            className: "glass-panel px-4 py-1 rounded-full text-xs font-bold tracking-widest text-stardust uppercase border border-white/10 font-display",
                            children: "OWNEGO"
                        }), (0,
                        r.jsx)("span", {
                            className: "glass-panel px-4 py-1 rounded-full text-xs font-bold tracking-widest text-stardust uppercase border border-white/10 font-display",
                            children: "QIKIFY .IT .JSC"
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        r.jsx)("h2", {
                            className: "text-xl md:text-2xl font-display font-light tracking-[0.5em] text-stardust uppercase",
                            children: "YEAR END GALA"
                        }), (0,
                        r.jsx)("div", {
                            className: "relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[800px] mx-auto lg:mx-0",
                            children: (0,
                            r.jsx)("img", {
                                src: "/images/owniverse_logo.png",
                                alt: "OWNIVERSE 2025",
                                className: "w-full h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-500"
                            })
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "glass-panel px-5 py-3 rounded-2xl flex items-center gap-4",
                            children: [(0,
                            r.jsx)("span", {
                                className: "text-2xl w-8 text-center",
                                children: "📅"
                            }), (0,
                            r.jsxs)("div", {
                                className: "text-left",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "text-xs text-stardust uppercase tracking-wider font-display",
                                    children: "Ngày này"
                                }), (0,
                                r.jsx)("div", {
                                    className: "text-sm font-display text-white",
                                    children: "09 - 10 Tháng 01, 2026"
                                })]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "glass-panel px-5 py-3 rounded-2xl flex items-center gap-4",
                            children: [(0,
                            r.jsx)("span", {
                                className: "text-2xl w-8 text-center",
                                children: "🕒"
                            }), (0,
                            r.jsxs)("div", {
                                className: "text-left",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "text-xs text-stardust uppercase tracking-wider font-display",
                                    children: "Tầm này"
                                }), (0,
                                r.jsx)("div", {
                                    className: "text-sm font-display text-white",
                                    children: "14:00 - chiều hôm sau"
                                })]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "glass-panel px-5 py-3 rounded-2xl flex items-center gap-4 md:col-span-2",
                            children: [(0,
                            r.jsx)("span", {
                                className: "text-2xl w-8 text-center",
                                children: "📍"
                            }), (0,
                            r.jsxs)("div", {
                                className: "text-left",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "text-xs text-stardust uppercase tracking-wider font-display",
                                    children: "Chỗ này"
                                }), (0,
                                r.jsx)("div", {
                                    className: "text-sm font-display text-white",
                                    children: "Tổ hợp Villa/Resort Melorita Làng Châu Âu, Hòa Lạc, Hà Nội"
                                })]
                            })]
                        })]
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "relative h-[300px] lg:h-[500px] w-full perspective-1000 order-2 lg:order-2 hidden md:block",
                    children: (0,
                    r.jsxs)("div", {
                        className: "w-full h-full relative flex items-center justify-center",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "relative transform -translate-y-32 translate-x-8",
                            children: [(0,
                            r.jsx)("div", {
                                className: "relative z-0 w-48 lg:w-64 h-48 lg:h-64 bg-gradient-to-br from-cosmic-cyan to-cosmic-purple rounded-full blur-[60px] opacity-40 animate-pulse-glow"
                            }), (0,
                            r.jsx)("div", {
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 animate-float",
                                children: (0,
                                r.jsx)("img", {
                                    src: "/images/mini_fig-removebg-preview.png",
                                    alt: "Owniverse Figure",
                                    className: "w-[600px] md:w-[1000px] lg:w-[1600px] h-auto drop-shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-110 transition-transform duration-500 cursor-pointer"
                                })
                            }), (0,
                            r.jsxs)("div", {
                                className: "absolute inset-0 z-10 animate-orbit",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                    style: {
                                        transform: "rotate(0deg) translate(0px, -220px)"
                                    },
                                    children: (0,
                                    r.jsx)("div", {
                                        className: "animate-counter-orbit",
                                        children: (0,
                                        r.jsx)("div", {
                                            style: {
                                                transform: "rotate(0deg)"
                                            },
                                            children: (0,
                                            r.jsxs)("div", {
                                                className: "glass-card p-2 lg:p-4 rounded-xl w-28 lg:w-36 flex flex-col items-center justify-center text-center",
                                                children: [(0,
                                                r.jsx)("div", {
                                                    className: "w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(168,85,247,0.3)]",
                                                    children: (0,
                                                    r.jsx)("i", {
                                                        className: "fas fa-users text-sm lg:text-xl text-purple-400"
                                                    })
                                                }), (0,
                                                r.jsx)("h3", {
                                                    className: "font-bold text-[10px] lg:text-sm text-white font-display uppercase tracking-wider",
                                                    children: "People"
                                                })]
                                            })
                                        })
                                    })
                                }), (0,
                                r.jsx)("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                    style: {
                                        transform: "rotate(60deg) translate(0px, -220px)"
                                    },
                                    children: (0,
                                    r.jsx)("div", {
                                        className: "animate-counter-orbit",
                                        children: (0,
                                        r.jsx)("div", {
                                            style: {
                                                transform: "rotate(-60deg)"
                                            },
                                            children: (0,
                                            r.jsxs)("div", {
                                                className: "glass-card p-2 lg:p-4 rounded-xl w-28 lg:w-36 flex flex-col items-center justify-center text-center",
                                                children: [(0,
                                                r.jsx)("div", {
                                                    className: "w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(234,179,8,0.3)]",
                                                    children: (0,
                                                    r.jsx)("i", {
                                                        className: "fas fa-bolt text-sm lg:text-xl text-yellow-400"
                                                    })
                                                }), (0,
                                                r.jsx)("h3", {
                                                    className: "font-bold text-[10px] lg:text-sm text-white font-display uppercase tracking-wider",
                                                    children: "Xcelerate"
                                                })]
                                            })
                                        })
                                    })
                                }), (0,
                                r.jsx)("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                    style: {
                                        transform: "rotate(120deg) translate(0px, -220px)"
                                    },
                                    children: (0,
                                    r.jsx)("div", {
                                        className: "animate-counter-orbit",
                                        children: (0,
                                        r.jsx)("div", {
                                            style: {
                                                transform: "rotate(-120deg)"
                                            },
                                            children: (0,
                                            r.jsxs)("div", {
                                                className: "glass-card p-2 lg:p-4 rounded-xl w-28 lg:w-36 flex flex-col items-center justify-center text-center",
                                                children: [(0,
                                                r.jsx)("div", {
                                                    className: "w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(249,115,22,0.3)]",
                                                    children: (0,
                                                    r.jsx)("i", {
                                                        className: "fas fa-cubes text-sm lg:text-xl text-orange-400"
                                                    })
                                                }), (0,
                                                r.jsx)("h3", {
                                                    className: "font-bold text-[10px] lg:text-sm text-white font-display uppercase tracking-wider",
                                                    children: "New Platform"
                                                })]
                                            })
                                        })
                                    })
                                }), (0,
                                r.jsx)("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                    style: {
                                        transform: "rotate(180deg) translate(0px, -220px)"
                                    },
                                    children: (0,
                                    r.jsx)("div", {
                                        className: "animate-counter-orbit",
                                        children: (0,
                                        r.jsx)("div", {
                                            style: {
                                                transform: "rotate(-180deg)"
                                            },
                                            children: (0,
                                            r.jsxs)("div", {
                                                className: "glass-card p-2 lg:p-4 rounded-xl w-28 lg:w-36 flex flex-col items-center justify-center text-center",
                                                children: [(0,
                                                r.jsx)("div", {
                                                    className: "w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]",
                                                    children: (0,
                                                    r.jsx)("i", {
                                                        className: "fas fa-compass text-sm lg:text-xl text-cyan-400"
                                                    })
                                                }), (0,
                                                r.jsx)("h3", {
                                                    className: "font-bold text-[10px] lg:text-sm text-white font-display uppercase tracking-wider",
                                                    children: "Explore"
                                                })]
                                            })
                                        })
                                    })
                                }), (0,
                                r.jsx)("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                    style: {
                                        transform: "rotate(240deg) translate(0px, -220px)"
                                    },
                                    children: (0,
                                    r.jsx)("div", {
                                        className: "animate-counter-orbit",
                                        children: (0,
                                        r.jsx)("div", {
                                            style: {
                                                transform: "rotate(-240deg)"
                                            },
                                            children: (0,
                                            r.jsxs)("div", {
                                                className: "glass-card p-2 lg:p-4 rounded-xl w-28 lg:w-36 flex flex-col items-center justify-center text-center",
                                                children: [(0,
                                                r.jsx)("div", {
                                                    className: "w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(34,197,94,0.3)]",
                                                    children: (0,
                                                    r.jsx)("i", {
                                                        className: "fas fa-gem text-sm lg:text-xl text-green-400"
                                                    })
                                                }), (0,
                                                r.jsx)("h3", {
                                                    className: "font-bold text-[10px] lg:text-sm text-white font-display uppercase tracking-wider",
                                                    children: "Ambition"
                                                })]
                                            })
                                        })
                                    })
                                }), (0,
                                r.jsx)("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                    style: {
                                        transform: "rotate(300deg) translate(0px, -220px)"
                                    },
                                    children: (0,
                                    r.jsx)("div", {
                                        className: "animate-counter-orbit",
                                        children: (0,
                                        r.jsx)("div", {
                                            style: {
                                                transform: "rotate(-300deg)"
                                            },
                                            children: (0,
                                            r.jsxs)("div", {
                                                className: "glass-card p-2 lg:p-4 rounded-xl w-28 lg:w-36 flex flex-col items-center justify-center text-center",
                                                children: [(0,
                                                r.jsx)("div", {
                                                    className: "w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(239,68,68,0.3)]",
                                                    children: (0,
                                                    r.jsx)("i", {
                                                        className: "fas fa-anchor text-sm lg:text-xl text-red-400"
                                                    })
                                                }), (0,
                                                r.jsx)("h3", {
                                                    className: "font-bold text-[10px] lg:text-sm text-white font-display uppercase tracking-wider",
                                                    children: "Development"
                                                })]
                                            })
                                        })
                                    })
                                })]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "absolute bottom-0 right-0 z-20 translate-y-[56px] hidden lg:flex gap-4",
                            children: [(0,
                            r.jsx)(o.Button, {
                                onClick: () => document.getElementById("schedule")?.scrollIntoView({
                                    behavior: "smooth"
                                }),
                                className: "btn-shiny bg-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-full text-xl tracking-widest hover:scale-105 transition-transform duration-300 border border-white/20 hover:bg-white/20 font-display",
                                children: "LỊCH TRÌNH"
                            }), (0,
                            r.jsx)(o.Button, {
                                onClick: h,
                                disabled: e,
                                variant: "secondary",
                                className: `group btn-shiny font-bold py-4 px-12 rounded-full text-xl tracking-widest transition-transform duration-300 border-none font-display min-w-[280px] ${e ? "bg-gray-600 text-white cursor-not-allowed opacity-50 shadow-none pointer-events-none" : i ? "!bg-gradient-to-r from-cosmic-cyan to-cosmic-purple !text-white shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 cursor-pointer" : "!bg-black !border-2 !border-cosmic-cyan !text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-md hover:!bg-white hover:!text-black hover:!shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:!scale-105 cursor-pointer"}`,
                                children: e ? "SOLD OUT" : i ? "ĐẶT VÉ NGAY" : (0,
                                r.jsxs)(r.Fragment, {
                                    children: [(0,
                                    r.jsx)("span", {
                                        className: "whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] block group-hover:hidden",
                                        children: s
                                    }), (0,
                                    r.jsx)("span", {
                                        className: "whitespace-nowrap text-black hidden group-hover:block",
                                        children: "14:30 - 29/12"
                                    })]
                                })
                            })]
                        })]
                    })
                }), (0,
                r.jsx)("div", {
                    className: "lg:hidden flex justify-center w-full order-3",
                    children: (0,
                    r.jsxs)("div", {
                        className: "flex flex-col sm:flex-row gap-4 w-full max-w-sm",
                        children: [(0,
                        r.jsx)(o.Button, {
                            onClick: () => document.getElementById("schedule")?.scrollIntoView({
                                behavior: "smooth"
                            }),
                            className: "flex-1 btn-shiny bg-white/10 backdrop-blur-md text-white font-bold py-4 rounded-full text-lg tracking-widest hover:scale-105 transition-transform duration-300 border border-white/20 hover:bg-white/20",
                            children: "LỊCH TRÌNH"
                        }), (0,
                        r.jsx)(o.Button, {
                            onClick: h,
                            disabled: e,
                            variant: "secondary",
                            className: `group flex-1 btn-shiny font-bold py-4 rounded-full text-lg tracking-widest transition-transform duration-300 border-none min-w-[200px] ${e ? "bg-gray-600 text-white cursor-not-allowed opacity-50 shadow-none pointer-events-none" : i ? "!bg-gradient-to-r from-cosmic-cyan to-cosmic-purple !text-white shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 cursor-pointer" : "!bg-black !border-2 !border-cosmic-cyan !text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-md hover:!bg-white hover:!text-black hover:!shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:!scale-105 cursor-pointer"}`,
                            children: e ? "SOLD OUT" : i ? "ĐẶT VÉ NGAY" : (0,
                            r.jsxs)(r.Fragment, {
                                children: [(0,
                                r.jsx)("span", {
                                    className: "whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] block group-hover:hidden",
                                    children: s
                                }), (0,
                                r.jsx)("span", {
                                    className: "whitespace-nowrap text-black hidden group-hover:block",
                                    children: "14:30 - 29/12"
                                })]
                            })
                        })]
                    })
                })]
            })]
        })
    }
    function c() {
        return (0,
        r.jsx)("section", {
            className: "py-12 md:py-20 relative overflow-hidden",
            children: (0,
            r.jsxs)("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [(0,
                r.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12 md:mb-20",
                    children: [(0,
                    r.jsx)("div", {
                        className: "lg:col-span-4",
                        children: (0,
                        r.jsx)("div", {
                            className: "sticky top-24 flex items-center gap-6",
                            children: (0,
                            r.jsx)("h2", {
                                className: "text-3xl md:text-5xl font-display font-bold uppercase tracking-wide text-white border-l-4 border-cosmic-cyan pl-6",
                                children: "Sự kiện"
                            })
                        })
                    }), (0,
                    r.jsxs)("div", {
                        className: "lg:col-span-8 space-y-12",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "prose prose-invert prose-lg max-w-none",
                            children: [(0,
                            r.jsxs)("p", {
                                className: "text-xl md:text-2xl text-gray-300 leading-relaxed font-sans",
                                children: [(0,
                                r.jsx)("span", {
                                    className: "float-left text-7xl md:text-8xl font-display font-bold text-cosmic-cyan mr-4 leading-[0.8] pt-2",
                                    children: "C"
                                }), "hào mừng đến với ", (0,
                                r.jsx)("strong", {
                                    className: "text-white",
                                    children: "Owniverse"
                                }), " — Năm 2025 đã khép lại với rất nhiều nỗ lực và dấu ấn. Thay vì một buổi tổng kết thông thường, Ownego trân trọng mời bạn bước vào một không gian trải nghiệm hoàn toàn khác biệt: Một đêm Gala hiện đại, sôi động và đậm chất công nghệ."]
                            }), (0,
                            r.jsxs)("p", {
                                className: "text-xl md:text-2xl text-gray-300 leading-relaxed mt-6 font-sans",
                                children: ["Tại ", (0,
                                r.jsx)("strong", {
                                    className: "text-cosmic-cyan",
                                    children: "Owniverse"
                                }), ", chúng ta sẽ không chỉ nhìn lại chặng đường đã qua, mà đây còn là khoảnh khắc ý nghĩa để cùng tôn vinh sự cống hiến, nhiệt huyết và tinh thần đoàn kết của mỗi thành viên. Hãy sẵn sàng chọn cho mình một vị trí đẹp nhất để tận hưởng đêm tiệc vinh danh hoành tráng này."]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "glass-card p-6 rounded-2xl group hover:border-purple-400 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:bg-purple-500/20",
                                    children: (0,
                                    r.jsx)("i", {
                                        className: "fas fa-gamepad text-purple-400 text-2xl"
                                    })
                                }), (0,
                                r.jsx)("h3", {
                                    className: "text-xl font-bold text-purple-400 mb-2 font-display",
                                    children: "Team-tertainment"
                                }), (0,
                                r.jsx)("p", {
                                    className: "text-lg text-gray-300 font-sans",
                                    children: "Tham gia những thử thách mới lạ cùng đồng đội và rinh quà hấp dẫn. "
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "glass-card p-6 rounded-2xl group hover:border-pink-400 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-400 shadow-[0_0_15px_rgba(236,72,153,0.1)] group-hover:bg-pink-500/20",
                                    children: (0,
                                    r.jsx)("i", {
                                        className: "fas fa-wine-glass text-pink-400 text-2xl"
                                    })
                                }), (0,
                                r.jsx)("h3", {
                                    className: "text-xl font-bold text-pink-400 mb-2 font-display",
                                    children: "Gala Dining"
                                }), (0,
                                r.jsx)("p", {
                                    className: "text-lg text-gray-300 font-sans",
                                    children: "Thưởng thức tiệc tối sang trọng với set menu được lựa chọn kỹ lưỡng."
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "glass-card p-6 rounded-2xl group hover:border-yellow-400 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-400 shadow-[0_0_15px_rgba(234,179,8,0.1)] group-hover:bg-yellow-500/20",
                                    children: (0,
                                    r.jsx)("i", {
                                        className: "fas fa-trophy text-yellow-400 text-2xl"
                                    })
                                }), (0,
                                r.jsx)("h3", {
                                    className: "text-xl font-bold text-yellow-400 mb-2 font-display",
                                    children: "Ownego Award"
                                }), (0,
                                r.jsx)("p", {
                                    className: "text-lg text-gray-300 font-sans",
                                    children: "Vinh danh những ngôi sao xuất sắc nhất của vũ trụ Ownego."
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "glass-card p-6 rounded-2xl group hover:border-cyan-400 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-400 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:bg-cyan-500/20",
                                    children: (0,
                                    r.jsx)("i", {
                                        className: "fas fa-music text-cyan-400 text-2xl"
                                    })
                                }), (0,
                                r.jsx)("h3", {
                                    className: "text-xl font-bold text-cyan-400 mb-2 font-display",
                                    children: "Stage-sation"
                                }), (0,
                                r.jsx)("p", {
                                    className: "text-lg text-gray-300 font-sans",
                                    children: "Quẩy hết mình cùng dàn Line-up đặc biệt và after party."
                                })]
                            })]
                        })]
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-20"
                }), (0,
                r.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                    children: [(0,
                    r.jsx)("div", {
                        className: "lg:col-span-4",
                        children: (0,
                        r.jsx)("div", {
                            className: "sticky top-24 flex items-center gap-6",
                            children: (0,
                            r.jsx)("h2", {
                                className: "text-4xl md:text-5xl font-display font-bold uppercase tracking-wide text-white border-l-4 border-cosmic-cyan pl-6",
                                children: "Địa điểm"
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "lg:col-span-8",
                        children: (0,
                        r.jsx)("div", {
                            className: "relative rounded-3xl overflow-hidden bg-deep-space border border-white/10 shadow-2xl",
                            children: (0,
                            r.jsxs)("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "p-8 md:p-12 flex flex-col justify-center space-y-6 bg-gradient-to-br from-gray-900 to-black relative z-10",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        children: [(0,
                                        r.jsx)("h3", {
                                            className: "text-3xl md:text-4xl font-bold text-white mb-2 font-display",
                                            children: "Melorita Villa Hòa Lạc"
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "text-cosmic-cyan font-medium font-sans text-xl",
                                            children: "Làng Châu Âu, Hòa Lạc, Hà Nội"
                                        })]
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "w-20 h-1 bg-white/20 rounded-full"
                                    }), (0,
                                    r.jsx)("p", {
                                        className: "text-gray-300 leading-relaxed font-sans text-xl",
                                        children: 'Được ví như "Làng Châu Âu" thu nhỏ với kiến trúc Bắc Âu tinh tế, Melorita sở hữu không gian mở khoáng đạt và 100% villa hướng hồ – một "trạm sạc" năng lượng lý tưởng để bạn hòa mình vào thiên nhiên và tái tạo năng lượng.'
                                    }), (0,
                                    r.jsx)("p", {
                                        className: "text-gray-300 leading-relaxed font-sans text-xl",
                                        children: "Nhưng không chỉ dừng lại ở sự yên bình, Melorita còn sẵn sàng chuyển mình ngoạn mục để trở thành một đại sân khấu thực cảnh hoành tráng, tạo nên một vũ trụ Owniverse bùng nổ cảm xúc."
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "pt-4",
                                        children: (0,
                                        r.jsxs)("a", {
                                            href: "https://maps.app.goo.gl/9APk2pF2ntphznt89",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors font-sans",
                                            children: [(0,
                                            r.jsxs)("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [(0,
                                                r.jsx)("path", {
                                                    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                                }), (0,
                                                r.jsx)("circle", {
                                                    cx: "12",
                                                    cy: "10",
                                                    r: "3"
                                                })]
                                            }), "XEM VỊ TRÍ"]
                                        })
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "relative h-[400px] lg:h-auto min-h-[400px]",
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10 lg:w-1/2 pointer-events-none"
                                    }), (0,
                                    r.jsx)("iframe", {
                                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.588491850668!2d105.46411559602707!3d20.975490739162932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b4b6a405555%3A0x1004667555555555!2sMelorita%20H%C3%B2a%20L%E1%BA%A1c!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s",
                                        width: "100%",
                                        height: "100%",
                                        style: {
                                            border: 0,
                                            filter: "invert(90%) hue-rotate(180deg) contrast(1.2) grayscale(0.2)"
                                        },
                                        allowFullScreen: !0,
                                        loading: "lazy",
                                        className: "absolute inset-0 w-full h-full object-cover"
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "absolute bottom-6 right-6 z-20 bg-white text-black px-4 py-2 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2 font-sans",
                                        children: [(0,
                                        r.jsx)("span", {
                                            className: "text-blue-600",
                                            children: "🚙"
                                        }), " 45 min from Center"]
                                    })]
                                })]
                            })
                        })
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-20"
                })]
            })
        })
    }
    let d = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
      , u = new Set(d)
      , p = t => 180 * t / Math.PI
      , m = t => g(p(Math.atan2(t[1], t[0])))
      , f = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
        rotate: m,
        rotateZ: m,
        skewX: t => p(Math.atan(t[1])),
        skewY: t => p(Math.atan(t[2])),
        skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
    }
      , g = t => ((t %= 360) < 0 && (t += 360),
    t)
      , x = t => Math.sqrt(t[0] * t[0] + t[1] * t[1])
      , v = t => Math.sqrt(t[4] * t[4] + t[5] * t[5])
      , y = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: x,
        scaleY: v,
        scale: t => (x(t) + v(t)) / 2,
        rotateX: t => g(p(Math.atan2(t[6], t[5]))),
        rotateY: t => g(p(Math.atan2(-t[2], t[0]))),
        rotateZ: m,
        rotate: m,
        skewX: t => p(Math.atan(t[4])),
        skewY: t => p(Math.atan(t[1])),
        skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
    };
    function b(t) {
        return +!!t.includes("scale")
    }
    function w(t, e) {
        let i, s;
        if (!t || "none" === t)
            return b(e);
        let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (n)
            i = y,
            s = n;
        else {
            let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
            i = f,
            s = e
        }
        if (!s)
            return b(e);
        let r = i[e]
          , a = s[1].split(",").map(j);
        return "function" == typeof r ? r(a) : a[r]
    }
    function j(t) {
        return parseFloat(t.trim())
    }
    let N = t => e => "string" == typeof e && e.startsWith(t)
      , k = N("--")
      , T = N("var(--")
      , M = t => !!T(t) && S.test(t.split("/*")[0].trim())
      , S = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    function P({top: t, left: e, right: i, bottom: s}) {
        return {
            x: {
                min: e,
                max: i
            },
            y: {
                min: t,
                max: s
            }
        }
    }
    let C = (t, e, i) => t + (e - t) * i;
    function A(t) {
        return void 0 === t || 1 === t
    }
    function E({scale: t, scaleX: e, scaleY: i}) {
        return !A(t) || !A(e) || !A(i)
    }
    function _(t) {
        return E(t) || V(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
    }
    function V(t) {
        var e, i;
        return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
    }
    function D(t, e, i, s, n) {
        return void 0 !== n && (t = s + n * (t - s)),
        s + i * (t - s) + e
    }
    function R(t, e=0, i=1, s, n) {
        t.min = D(t.min, e, i, s, n),
        t.max = D(t.max, e, i, s, n)
    }
    function L(t, {x: e, y: i}) {
        R(t.x, e.translate, e.scale, e.originPoint),
        R(t.y, i.translate, i.scale, i.originPoint)
    }
    function O(t, e) {
        t.min = t.min + e,
        t.max = t.max + e
    }
    function B(t, e, i, s, n=.5) {
        let r = C(t.min, t.max, n);
        R(t, e, i, r, s)
    }
    function F(t, e) {
        B(t.x, e.x, e.scaleX, e.scale, e.originX),
        B(t.y, e.y, e.scaleY, e.scale, e.originY)
    }
    function I(t, e) {
        return P(function(t, e) {
            if (!e)
                return t;
            let i = e({
                x: t.left,
                y: t.top
            })
              , s = e({
                x: t.right,
                y: t.bottom
            });
            return {
                top: i.y,
                left: i.x,
                bottom: s.y,
                right: s.x
            }
        }(t.getBoundingClientRect(), e))
    }
    let U = new Set(["width", "height", "top", "left", "right", "bottom", ...d])
      , z = (t, e, i) => i > e ? e : i < t ? t : i
      , $ = {
        test: t => "number" == typeof t,
        parse: parseFloat,
        transform: t => t
    }
      , W = {
        ...$,
        transform: t => z(0, 1, t)
    }
      , H = {
        ...$,
        default: 1
    }
      , Y = t => ({
        test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
        parse: parseFloat,
        transform: e => `${e}${t}`
    })
      , X = Y("deg")
      , G = Y("%")
      , K = Y("px")
      , q = Y("vh")
      , Z = Y("vw")
      , J = {
        ...G,
        parse: t => G.parse(t) / 100,
        transform: t => G.transform(100 * t)
    }
      , Q = t => e => e.test(t)
      , tt = [$, K, G, X, Z, q, {
        test: t => "auto" === t,
        parse: t => t
    }]
      , te = t => tt.find(Q(t));
    t.i(47167);
    let ti = () => {}
      , ts = () => {}
      , tn = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
      , tr = t => t === $ || t === K
      , ta = new Set(["x", "y", "z"])
      , to = d.filter(t => !ta.has(t))
      , tl = {
        width: ({x: t}, {paddingLeft: e="0", paddingRight: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({y: t}, {paddingTop: e="0", paddingBottom: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, {top: e}) => parseFloat(e),
        left: (t, {left: e}) => parseFloat(e),
        bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
        right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
        x: (t, {transform: e}) => w(e, "x"),
        y: (t, {transform: e}) => w(e, "y")
    };
    tl.translateX = tl.x,
    tl.translateY = tl.y;
    let th = t => t
      , tc = {}
      , td = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
    function tu(t, e) {
        let i = !1
          , s = !0
          , n = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        }
          , r = () => i = !0
          , a = td.reduce( (t, i) => (t[i] = function(t, e) {
            let i = new Set
              , s = new Set
              , n = !1
              , r = !1
              , a = new WeakSet
              , o = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , l = 0;
            function h(e) {
                a.has(e) && (c.schedule(e),
                t()),
                l++,
                e(o)
            }
            let c = {
                schedule: (t, e=!1, r=!1) => {
                    let o = r && n ? i : s;
                    return e && a.add(t),
                    o.has(t) || o.add(t),
                    t
                }
                ,
                cancel: t => {
                    s.delete(t),
                    a.delete(t)
                }
                ,
                process: t => {
                    if (o = t,
                    n) {
                        r = !0;
                        return
                    }
                    n = !0,
                    [i,s] = [s, i],
                    i.forEach(h),
                    e,
                    l = 0,
                    i.clear(),
                    n = !1,
                    r && (r = !1,
                    c.process(t))
                }
            };
            return c
        }(r, e ? i : void 0),
        t), {})
          , {setup: o, read: l, resolveKeyframes: h, preUpdate: c, update: d, preRender: u, render: p, postRender: m} = a
          , f = () => {
            let r = tc.useManualTiming ? n.timestamp : performance.now();
            i = !1,
            tc.useManualTiming || (n.delta = s ? 1e3 / 60 : Math.max(Math.min(r - n.timestamp, 40), 1)),
            n.timestamp = r,
            n.isProcessing = !0,
            o.process(n),
            l.process(n),
            h.process(n),
            c.process(n),
            d.process(n),
            u.process(n),
            p.process(n),
            m.process(n),
            n.isProcessing = !1,
            i && e && (s = !1,
            t(f))
        }
        ;
        return {
            schedule: td.reduce( (e, r) => {
                let o = a[r];
                return e[r] = (e, r=!1, a=!1) => (!i && (i = !0,
                s = !0,
                n.isProcessing || t(f)),
                o.schedule(e, r, a)),
                e
            }
            , {}),
            cancel: t => {
                for (let e = 0; e < td.length; e++)
                    a[td[e]].cancel(t)
            }
            ,
            state: n,
            steps: a
        }
    }
    let {schedule: tp, cancel: tm, state: tf, steps: tg} = tu("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : th, !0)
      , tx = new Set
      , tv = !1
      , ty = !1
      , tb = !1;
    function tw() {
        if (ty) {
            let t = Array.from(tx).filter(t => t.needsMeasurement)
              , e = new Set(t.map(t => t.element))
              , i = new Map;
            e.forEach(t => {
                let e, s = (e = [],
                to.forEach(i => {
                    let s = t.getValue(i);
                    void 0 !== s && (e.push([i, s.get()]),
                    s.set(+!!i.startsWith("scale")))
                }
                ),
                e);
                s.length && (i.set(t, s),
                t.render())
            }
            ),
            t.forEach(t => t.measureInitialState()),
            e.forEach(t => {
                t.render();
                let e = i.get(t);
                e && e.forEach( ([e,i]) => {
                    t.getValue(e)?.set(i)
                }
                )
            }
            ),
            t.forEach(t => t.measureEndState()),
            t.forEach(t => {
                void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
            }
            )
        }
        ty = !1,
        tv = !1,
        tx.forEach(t => t.complete(tb)),
        tx.clear()
    }
    function tj() {
        tx.forEach(t => {
            t.readKeyframes(),
            t.needsMeasurement && (ty = !0)
        }
        )
    }
    class tN {
        constructor(t, e, i, s, n, r=!1) {
            this.state = "pending",
            this.isAsync = !1,
            this.needsMeasurement = !1,
            this.unresolvedKeyframes = [...t],
            this.onComplete = e,
            this.name = i,
            this.motionValue = s,
            this.element = n,
            this.isAsync = r
        }
        scheduleResolve() {
            this.state = "scheduled",
            this.isAsync ? (tx.add(this),
            tv || (tv = !0,
            tp.read(tj),
            tp.resolveKeyframes(tw))) : (this.readKeyframes(),
            this.complete())
        }
        readKeyframes() {
            let {unresolvedKeyframes: t, name: e, element: i, motionValue: s} = this;
            if (null === t[0]) {
                let n = s?.get()
                  , r = t[t.length - 1];
                if (void 0 !== n)
                    t[0] = n;
                else if (i && e) {
                    let s = i.readValue(e, r);
                    null != s && (t[0] = s)
                }
                void 0 === t[0] && (t[0] = r),
                s && void 0 === n && s.set(t[0])
            }
            for (let e = 1; e < t.length; e++)
                t[e] ?? (t[e] = t[e - 1])
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t=!1) {
            this.state = "complete",
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            tx.delete(this)
        }
        cancel() {
            "scheduled" === this.state && (tx.delete(this),
            this.state = "pending")
        }
        resume() {
            "pending" === this.state && this.scheduleResolve()
        }
    }
    let tk = t => Math.round(1e5 * t) / 1e5
      , tT = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
      , tM = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
      , tS = (t, e) => i => !!("string" == typeof i && tM.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e))
      , tP = (t, e, i) => s => {
        if ("string" != typeof s)
            return s;
        let[n,r,a,o] = s.match(tT);
        return {
            [t]: parseFloat(n),
            [e]: parseFloat(r),
            [i]: parseFloat(a),
            alpha: void 0 !== o ? parseFloat(o) : 1
        }
    }
      , tC = {
        ...$,
        transform: t => Math.round(z(0, 255, t))
    }
      , tA = {
        test: tS("rgb", "red"),
        parse: tP("red", "green", "blue"),
        transform: ({red: t, green: e, blue: i, alpha: s=1}) => "rgba(" + tC.transform(t) + ", " + tC.transform(e) + ", " + tC.transform(i) + ", " + tk(W.transform(s)) + ")"
    }
      , tE = {
        test: tS("#"),
        parse: function(t) {
            let e = ""
              , i = ""
              , s = ""
              , n = "";
            return t.length > 5 ? (e = t.substring(1, 3),
            i = t.substring(3, 5),
            s = t.substring(5, 7),
            n = t.substring(7, 9)) : (e = t.substring(1, 2),
            i = t.substring(2, 3),
            s = t.substring(3, 4),
            n = t.substring(4, 5),
            e += e,
            i += i,
            s += s,
            n += n),
            {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1
            }
        },
        transform: tA.transform
    }
      , t_ = {
        test: tS("hsl", "hue"),
        parse: tP("hue", "saturation", "lightness"),
        transform: ({hue: t, saturation: e, lightness: i, alpha: s=1}) => "hsla(" + Math.round(t) + ", " + G.transform(tk(e)) + ", " + G.transform(tk(i)) + ", " + tk(W.transform(s)) + ")"
    }
      , tV = {
        test: t => tA.test(t) || tE.test(t) || t_.test(t),
        parse: t => tA.test(t) ? tA.parse(t) : t_.test(t) ? t_.parse(t) : tE.parse(t),
        transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tA.transform(t) : t_.transform(t),
        getAnimatableNone: t => {
            let e = tV.parse(t);
            return e.alpha = 0,
            tV.transform(e)
        }
    }
      , tD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
      , tR = "number"
      , tL = "color"
      , tO = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    function tB(t) {
        let e = t.toString()
          , i = []
          , s = {
            color: [],
            number: [],
            var: []
        }
          , n = []
          , r = 0
          , a = e.replace(tO, t => (tV.test(t) ? (s.color.push(r),
        n.push(tL),
        i.push(tV.parse(t))) : t.startsWith("var(") ? (s.var.push(r),
        n.push("var"),
        i.push(t)) : (s.number.push(r),
        n.push(tR),
        i.push(parseFloat(t))),
        ++r,
        "${}")).split("${}");
        return {
            values: i,
            split: a,
            indexes: s,
            types: n
        }
    }
    function tF(t) {
        return tB(t).values
    }
    function tI(t) {
        let {split: e, types: i} = tB(t)
          , s = e.length;
        return t => {
            let n = "";
            for (let r = 0; r < s; r++)
                if (n += e[r],
                void 0 !== t[r]) {
                    let e = i[r];
                    e === tR ? n += tk(t[r]) : e === tL ? n += tV.transform(t[r]) : n += t[r]
                }
            return n
        }
    }
    let tU = t => "number" == typeof t ? 0 : tV.test(t) ? tV.getAnimatableNone(t) : t
      , tz = {
        test: function(t) {
            return isNaN(t) && "string" == typeof t && (t.match(tT)?.length || 0) + (t.match(tD)?.length || 0) > 0
        },
        parse: tF,
        createTransformer: tI,
        getAnimatableNone: function(t) {
            let e = tF(t);
            return tI(t)(e.map(tU))
        }
    }
      , t$ = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function tW(t) {
        let[e,i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e)
            return t;
        let[s] = i.match(tT) || [];
        if (!s)
            return t;
        let n = i.replace(s, "")
          , r = +!!t$.has(e);
        return s !== i && (r *= 100),
        e + "(" + r + n + ")"
    }
    let tH = /\b([a-z-]*)\(.*?\)/gu
      , tY = {
        ...tz,
        getAnimatableNone: t => {
            let e = t.match(tH);
            return e ? e.map(tW).join(" ") : t
        }
    }
      , tX = {
        ...$,
        transform: Math.round
    }
      , tG = {
        borderWidth: K,
        borderTopWidth: K,
        borderRightWidth: K,
        borderBottomWidth: K,
        borderLeftWidth: K,
        borderRadius: K,
        radius: K,
        borderTopLeftRadius: K,
        borderTopRightRadius: K,
        borderBottomRightRadius: K,
        borderBottomLeftRadius: K,
        width: K,
        maxWidth: K,
        height: K,
        maxHeight: K,
        top: K,
        right: K,
        bottom: K,
        left: K,
        padding: K,
        paddingTop: K,
        paddingRight: K,
        paddingBottom: K,
        paddingLeft: K,
        margin: K,
        marginTop: K,
        marginRight: K,
        marginBottom: K,
        marginLeft: K,
        backgroundPositionX: K,
        backgroundPositionY: K,
        rotate: X,
        rotateX: X,
        rotateY: X,
        rotateZ: X,
        scale: H,
        scaleX: H,
        scaleY: H,
        scaleZ: H,
        skew: X,
        skewX: X,
        skewY: X,
        distance: K,
        translateX: K,
        translateY: K,
        translateZ: K,
        x: K,
        y: K,
        z: K,
        perspective: K,
        transformPerspective: K,
        opacity: W,
        originX: J,
        originY: J,
        originZ: K,
        zIndex: tX,
        fillOpacity: W,
        strokeOpacity: W,
        numOctaves: tX
    }
      , tK = {
        ...tG,
        color: tV,
        backgroundColor: tV,
        outlineColor: tV,
        fill: tV,
        stroke: tV,
        borderColor: tV,
        borderTopColor: tV,
        borderRightColor: tV,
        borderBottomColor: tV,
        borderLeftColor: tV,
        filter: tY,
        WebkitFilter: tY
    }
      , tq = t => tK[t];
    function tZ(t, e) {
        let i = tq(t);
        return i !== tY && (i = tz),
        i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
    }
    let tJ = new Set(["auto", "none", "0"]);
    class tQ extends tN {
        constructor(t, e, i, s, n) {
            super(t, e, i, s, n, !0)
        }
        readKeyframes() {
            let {unresolvedKeyframes: t, element: e, name: i} = this;
            if (!e || !e.current)
                return;
            super.readKeyframes();
            for (let i = 0; i < t.length; i++) {
                let s = t[i];
                if ("string" == typeof s && M(s = s.trim())) {
                    let n = function t(e, i, s=1) {
                        ts(s <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
                        let[n,r] = function(t) {
                            let e = tn.exec(t);
                            if (!e)
                                return [, ];
                            let[,i,s,n] = e;
                            return [`--${i ?? s}`, n]
                        }(e);
                        if (!n)
                            return;
                        let a = window.getComputedStyle(i).getPropertyValue(n);
                        if (a) {
                            let t = a.trim();
                            return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) ? parseFloat(t) : t
                        }
                        return M(r) ? t(r, i, s + 1) : r
                    }(s, e.current);
                    void 0 !== n && (t[i] = n),
                    i === t.length - 1 && (this.finalKeyframe = s)
                }
            }
            if (this.resolveNoneKeyframes(),
            !U.has(i) || 2 !== t.length)
                return;
            let[s,n] = t
              , r = te(s)
              , a = te(n);
            if (r !== a)
                if (tr(r) && tr(a))
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e];
                        "string" == typeof i && (t[e] = parseFloat(i))
                    }
                else
                    tl[i] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
            let {unresolvedKeyframes: t, name: e} = this
              , i = [];
            for (let e = 0; e < t.length; e++)
                (null === t[e] || function(t) {
                    if ("number" == typeof t)
                        return 0 === t;
                    if (null === t)
                        return !0;
                    return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t)
                }(t[e])) && i.push(e);
            i.length && function(t, e, i) {
                let s, n = 0;
                for (; n < t.length && !s; ) {
                    let e = t[n];
                    "string" == typeof e && !tJ.has(e) && tB(e).values.length && (s = t[n]),
                    n++
                }
                if (s && i)
                    for (let n of e)
                        t[n] = tZ(i, s)
            }(t, i, e)
        }
        measureInitialState() {
            let {element: t, unresolvedKeyframes: e, name: i} = this;
            if (!t || !t.current)
                return;
            "height" === i && (this.suspendedScrollY = window.pageYOffset),
            this.measuredOrigin = tl[i](t.measureViewportBox(), window.getComputedStyle(t.current)),
            e[0] = this.measuredOrigin;
            let s = e[e.length - 1];
            void 0 !== s && t.getValue(i, s).jump(s, !1)
        }
        measureEndState() {
            let {element: t, name: e, unresolvedKeyframes: i} = this;
            if (!t || !t.current)
                return;
            let s = t.getValue(e);
            s && s.jump(this.measuredOrigin, !1);
            let n = i.length - 1
              , r = i[n];
            i[n] = tl[e](t.measureViewportBox(), window.getComputedStyle(t.current)),
            null !== r && void 0 === this.finalKeyframe && (this.finalKeyframe = r),
            this.removedTransforms?.length && this.removedTransforms.forEach( ([e,i]) => {
                t.getValue(e).set(i)
            }
            ),
            this.resolveNoneKeyframes()
        }
    }
    let t0 = t => !!(t && t.getVelocity);
    function t1() {
        e = void 0
    }
    let t2 = {
        now: () => (void 0 === e && t2.set(tf.isProcessing || tc.useManualTiming ? tf.timestamp : performance.now()),
        e),
        set: t => {
            e = t,
            queueMicrotask(t1)
        }
    };
    function t5(t, e) {
        -1 === t.indexOf(e) && t.push(e)
    }
    function t3(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1)
    }
    class t4 {
        constructor() {
            this.subscriptions = []
        }
        add(t) {
            return t5(this.subscriptions, t),
            () => t3(this.subscriptions, t)
        }
        notify(t, e, i) {
            let s = this.subscriptions.length;
            if (s)
                if (1 === s)
                    this.subscriptions[0](t, e, i);
                else
                    for (let n = 0; n < s; n++) {
                        let s = this.subscriptions[n];
                        s && s(t, e, i)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }
    class t6 {
        constructor(t, e={}) {
            this.canTrackVelocity = null,
            this.events = {},
            this.updateAndNotify = t => {
                let e = t2.now();
                if (this.updatedAt !== e && this.setPrevFrameValue(),
                this.prev = this.current,
                this.setCurrent(t),
                this.current !== this.prev && (this.events.change?.notify(this.current),
                this.dependents))
                    for (let t of this.dependents)
                        t.dirty()
            }
            ,
            this.hasAnimated = !1,
            this.setCurrent(t),
            this.owner = e.owner
        }
        setCurrent(t) {
            this.current = t,
            this.updatedAt = t2.now(),
            null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
        }
        setPrevFrameValue(t=this.current) {
            this.prevFrameValue = t,
            this.prevUpdatedAt = this.updatedAt
        }
        onChange(t) {
            return this.on("change", t)
        }
        on(t, e) {
            this.events[t] || (this.events[t] = new t4);
            let i = this.events[t].add(e);
            return "change" === t ? () => {
                i(),
                tp.read( () => {
                    this.events.change.getSize() || this.stop()
                }
                )
            }
            : i
        }
        clearListeners() {
            for (let t in this.events)
                this.events[t].clear()
        }
        attach(t, e) {
            this.passiveEffect = t,
            this.stopPassiveEffect = e
        }
        set(t) {
            this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
        }
        setWithVelocity(t, e, i) {
            this.set(e),
            this.prev = void 0,
            this.prevFrameValue = t,
            this.prevUpdatedAt = this.updatedAt - i
        }
        jump(t, e=!0) {
            this.updateAndNotify(t),
            this.prev = t,
            this.prevUpdatedAt = this.prevFrameValue = void 0,
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
            this.events.change?.notify(this.current)
        }
        addDependent(t) {
            this.dependents || (this.dependents = new Set),
            this.dependents.add(t)
        }
        removeDependent(t) {
            this.dependents && this.dependents.delete(t)
        }
        get() {
            return s && s.push(this),
            this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            var t;
            let e = t2.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30)
                return 0;
            let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return t = parseFloat(this.current) - parseFloat(this.prevFrameValue),
            i ? 1e3 / i * t : 0
        }
        start(t) {
            return this.stop(),
            new Promise(e => {
                this.hasAnimated = !0,
                this.animation = t(e),
                this.events.animationStart && this.events.animationStart.notify()
            }
            ).then( () => {
                this.events.animationComplete && this.events.animationComplete.notify(),
                this.clearAnimation()
            }
            )
        }
        stop() {
            this.animation && (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
        }
    }
    function t8(t, e) {
        return new t6(t,e)
    }
    let t9 = [...tt, tV, tz]
      , {schedule: t7} = tu(queueMicrotask, !1)
      , et = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    }
      , ee = {};
    for (let t in et)
        ee[t] = {
            isEnabled: e => et[t].some(t => !!e[t])
        };
    let ei = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    })
      , es = () => ({
        x: ei(),
        y: ei()
    })
      , en = () => ({
        min: 0,
        max: 0
    })
      , er = () => ({
        x: en(),
        y: en()
    })
      , ea = "undefined" != typeof window
      , eo = {
        current: null
    }
      , el = {
        current: !1
    }
      , eh = new WeakMap;
    function ec(t) {
        return null !== t && "object" == typeof t && "function" == typeof t.start
    }
    function ed(t) {
        return "string" == typeof t || Array.isArray(t)
    }
    let eu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
      , ep = ["initial", ...eu];
    function em(t) {
        return ec(t.animate) || ep.some(e => ed(t[e]))
    }
    function ef(t) {
        return !!(em(t) || t.variants)
    }
    function eg(t) {
        let e = [{}, {}];
        return t?.values.forEach( (t, i) => {
            e[0][i] = t.get(),
            e[1][i] = t.getVelocity()
        }
        ),
        e
    }
    function ex(t, e, i, s) {
        if ("function" == typeof e) {
            let[n,r] = eg(s);
            e = e(void 0 !== i ? i : t.custom, n, r)
        }
        if ("string" == typeof e && (e = t.variants && t.variants[e]),
        "function" == typeof e) {
            let[n,r] = eg(s);
            e = e(void 0 !== i ? i : t.custom, n, r)
        }
        return e
    }
    let ev = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
    class ey {
        scrapeMotionValuesFromProps(t, e, i) {
            return {}
        }
        constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: n, visualState: r}, a={}) {
            this.current = null,
            this.children = new Set,
            this.isVariantNode = !1,
            this.isControllingVariants = !1,
            this.shouldReduceMotion = null,
            this.values = new Map,
            this.KeyframeResolver = tN,
            this.features = {},
            this.valueSubscriptions = new Map,
            this.prevMotionValues = {},
            this.events = {},
            this.propEventSubscriptions = {},
            this.notifyUpdate = () => this.notify("Update", this.latestValues),
            this.render = () => {
                this.current && (this.triggerBuild(),
                this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }
            ,
            this.renderScheduledAt = 0,
            this.scheduleRender = () => {
                let t = t2.now();
                this.renderScheduledAt < t && (this.renderScheduledAt = t,
                tp.render(this.render, !1, !0))
            }
            ;
            const {latestValues: o, renderState: l} = r;
            this.latestValues = o,
            this.baseTarget = {
                ...o
            },
            this.initialValues = e.initial ? {
                ...o
            } : {},
            this.renderState = l,
            this.parent = t,
            this.props = e,
            this.presenceContext = i,
            this.depth = t ? t.depth + 1 : 0,
            this.reducedMotionConfig = s,
            this.options = a,
            this.blockInitialAnimation = !!n,
            this.isControllingVariants = em(e),
            this.isVariantNode = ef(e),
            this.isVariantNode && (this.variantChildren = new Set),
            this.manuallyAnimateOnMount = !!(t && t.current);
            const {willChange: h, ...c} = this.scrapeMotionValuesFromProps(e, {}, this);
            for (const t in c) {
                const e = c[t];
                void 0 !== o[t] && t0(e) && e.set(o[t])
            }
        }
        mount(t) {
            this.current = t,
            eh.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
            el.current || function() {
                if (el.current = !0,
                ea)
                    if (window.matchMedia) {
                        let t = window.matchMedia("(prefers-reduced-motion)")
                          , e = () => eo.current = t.matches;
                        t.addEventListener("change", e),
                        e()
                    } else
                        eo.current = !1
            }(),
            this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || eo.current),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext)
        }
        unmount() {
            for (let t in this.projection && this.projection.unmount(),
            tm(this.notifyUpdate),
            tm(this.render),
            this.valueSubscriptions.forEach(t => t()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent?.removeChild(this),
            this.events)
                this.events[t].clear();
            for (let t in this.features) {
                let e = this.features[t];
                e && (e.unmount(),
                e.isMounted = !1)
            }
            this.current = null
        }
        addChild(t) {
            this.children.add(t),
            this.enteringChildren ?? (this.enteringChildren = new Set),
            this.enteringChildren.add(t)
        }
        removeChild(t) {
            this.children.delete(t),
            this.enteringChildren && this.enteringChildren.delete(t)
        }
        bindToMotionValue(t, e) {
            let i;
            this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
            let s = u.has(t);
            s && this.onBindTransform && this.onBindTransform();
            let n = e.on("change", e => {
                this.latestValues[t] = e,
                this.props.onUpdate && tp.preRender(this.notifyUpdate),
                s && this.projection && (this.projection.isTransformDirty = !0),
                this.scheduleRender()
            }
            );
            window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
                n(),
                i && i(),
                e.owner && e.stop()
            }
            )
        }
        sortNodePosition(t) {
            return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        updateFeatures() {
            let t = "animation";
            for (t in ee) {
                let e = ee[t];
                if (!e)
                    continue;
                let {isEnabled: i, Feature: s} = e;
                if (!this.features[t] && s && i(this.props) && (this.features[t] = new s(this)),
                this.features[t]) {
                    let e = this.features[t];
                    e.isMounted ? e.update() : (e.mount(),
                    e.isMounted = !0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : er()
        }
        getStaticValue(t) {
            return this.latestValues[t]
        }
        setStaticValue(t, e) {
            this.latestValues[t] = e
        }
        update(t, e) {
            (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            this.prevProps = this.props,
            this.props = t,
            this.prevPresenceContext = this.presenceContext,
            this.presenceContext = e;
            for (let e = 0; e < ev.length; e++) {
                let i = ev[e];
                this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                delete this.propEventSubscriptions[i]);
                let s = t["on" + i];
                s && (this.propEventSubscriptions[i] = this.on(i, s))
            }
            this.prevMotionValues = function(t, e, i) {
                for (let s in e) {
                    let n = e[s]
                      , r = i[s];
                    if (t0(n))
                        t.addValue(s, n);
                    else if (t0(r))
                        t.addValue(s, t8(n, {
                            owner: t
                        }));
                    else if (r !== n)
                        if (t.hasValue(s)) {
                            let e = t.getValue(s);
                            !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n)
                        } else {
                            let e = t.getStaticValue(s);
                            t.addValue(s, t8(void 0 !== e ? e : n, {
                                owner: t
                            }))
                        }
                }
                for (let s in i)
                    void 0 === e[s] && t.removeValue(s);
                return e
            }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
            this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(t) {
            return this.props.variants ? this.props.variants[t] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(t) {
            let e = this.getClosestVariantNode();
            if (e)
                return e.variantChildren && e.variantChildren.add(t),
                () => e.variantChildren.delete(t)
        }
        addValue(t, e) {
            let i = this.values.get(t);
            e !== i && (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            this.latestValues[t] = e.get())
        }
        removeValue(t) {
            this.values.delete(t);
            let e = this.valueSubscriptions.get(t);
            e && (e(),
            this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
            return this.values.has(t)
        }
        getValue(t, e) {
            if (this.props.values && this.props.values[t])
                return this.props.values[t];
            let i = this.values.get(t);
            return void 0 === i && void 0 !== e && (i = t8(null === e ? void 0 : e, {
                owner: this
            }),
            this.addValue(t, i)),
            i
        }
        readValue(t, e) {
            let i = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
            if (null != i) {
                let s, n;
                if ("string" == typeof i && (s = i,
                /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(s) || (n = i,
                /^0[^.\s]+$/u.test(n))))
                    i = parseFloat(i);
                else {
                    let s;
                    s = i,
                    !t9.find(Q(s)) && tz.test(e) && (i = tZ(t, e))
                }
                this.setBaseTarget(t, t0(i) ? i.get() : i)
            }
            return t0(i) ? i.get() : i
        }
        setBaseTarget(t, e) {
            this.baseTarget[t] = e
        }
        getBaseTarget(t) {
            let e, {initial: i} = this.props;
            if ("string" == typeof i || "object" == typeof i) {
                let s = ex(this.props, i, this.presenceContext?.custom);
                s && (e = s[t])
            }
            if (i && void 0 !== e)
                return e;
            let s = this.getBaseTargetFromProps(this.props, t);
            return void 0 === s || t0(s) ? void 0 !== this.initialValues[t] && void 0 === e ? void 0 : this.baseTarget[t] : s
        }
        on(t, e) {
            return this.events[t] || (this.events[t] = new t4),
            this.events[t].add(e)
        }
        notify(t, ...e) {
            this.events[t] && this.events[t].notify(...e)
        }
        scheduleRenderMicrotask() {
            t7.render(this.render)
        }
    }
    class eb extends ey {
        constructor() {
            super(...arguments),
            this.KeyframeResolver = tQ
        }
        sortInstanceNodePosition(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
            return t.style ? t.style[e] : void 0
        }
        removeValueFromRenderState(t, {vars: e, style: i}) {
            delete e[t],
            delete i[t]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(),
            delete this.childSubscription);
            let {children: t} = this.props;
            t0(t) && (this.childSubscription = t.on("change", t => {
                this.current && (this.current.textContent = `${t}`)
            }
            ))
        }
    }
    let ew = (t, e) => e && "number" == typeof t ? e.transform(t) : t
      , ej = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    }
      , eN = d.length;
    function ek(t, e, i) {
        let {style: s, vars: n, transformOrigin: r} = t
          , a = !1
          , o = !1;
        for (let t in e) {
            let i = e[t];
            if (u.has(t)) {
                a = !0;
                continue
            }
            if (k(t)) {
                n[t] = i;
                continue
            }
            {
                let e = ew(i, tG[t]);
                t.startsWith("origin") ? (o = !0,
                r[t] = e) : s[t] = e
            }
        }
        if (!e.transform && (a || i ? s.transform = function(t, e, i) {
            let s = ""
              , n = !0;
            for (let r = 0; r < eN; r++) {
                let a = d[r]
                  , o = t[a];
                if (void 0 === o)
                    continue;
                let l = !0;
                if (!(l = "number" == typeof o ? o === +!!a.startsWith("scale") : 0 === parseFloat(o)) || i) {
                    let t = ew(o, tG[a]);
                    if (!l) {
                        n = !1;
                        let e = ej[a] || a;
                        s += `${e}(${t}) `
                    }
                    i && (e[a] = t)
                }
            }
            return s = s.trim(),
            i ? s = i(e, n ? "" : s) : n && (s = "none"),
            s
        }(e, t.transform, i) : s.transform && (s.transform = "none")),
        o) {
            let {originX: t="50%", originY: e="50%", originZ: i=0} = r;
            s.transformOrigin = `${t} ${e} ${i}`
        }
    }
    function eT(t, {style: e, vars: i}, s, n) {
        let r, a = t.style;
        for (r in e)
            a[r] = e[r];
        for (r in n?.applyProjectionStyles(a, s),
        i)
            a.setProperty(r, i[r])
    }
    function eM(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
    }
    let eS = {
        correct: (t, e) => {
            if (!e.target)
                return t;
            if ("string" == typeof t)
                if (!K.test(t))
                    return t;
                else
                    t = parseFloat(t);
            let i = eM(t, e.target.x)
              , s = eM(t, e.target.y);
            return `${i}% ${s}%`
        }
    }
      , eP = {
        borderRadius: {
            ...eS,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: eS,
        borderTopRightRadius: eS,
        borderBottomLeftRadius: eS,
        borderBottomRightRadius: eS,
        boxShadow: {
            correct: (t, {treeScale: e, projectionDelta: i}) => {
                let s = tz.parse(t);
                if (s.length > 5)
                    return t;
                let n = tz.createTransformer(t)
                  , r = +("number" != typeof s[0])
                  , a = i.x.scale * e.x
                  , o = i.y.scale * e.y;
                s[0 + r] /= a,
                s[1 + r] /= o;
                let l = C(a, o, .5);
                return "number" == typeof s[2 + r] && (s[2 + r] /= l),
                "number" == typeof s[3 + r] && (s[3 + r] /= l),
                n(s)
            }
        }
    };
    function eC(t, {layout: e, layoutId: i}) {
        return u.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!eP[t] || "opacity" === t)
    }
    function eA(t, e, i) {
        let {style: s} = t
          , n = {};
        for (let r in s)
            (t0(s[r]) || e.style && t0(e.style[r]) || eC(r, t) || i?.getValue(r)?.liveStyle !== void 0) && (n[r] = s[r]);
        return n
    }
    class eE extends eb {
        constructor() {
            super(...arguments),
            this.type = "html",
            this.renderInstance = eT
        }
        readValueFromInstance(t, e) {
            if (u.has(e))
                return this.projection?.isProjecting ? b(e) : ( (t, e) => {
                    let {transform: i="none"} = getComputedStyle(t);
                    return w(i, e)
                }
                )(t, e);
            {
                let i = window.getComputedStyle(t)
                  , s = (k(e) ? i.getPropertyValue(e) : i[e]) || 0;
                return "string" == typeof s ? s.trim() : s
            }
        }
        measureInstanceViewportBox(t, {transformPagePoint: e}) {
            return I(t, e)
        }
        build(t, e, i) {
            ek(t, e, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e, i) {
            return eA(t, e, i)
        }
    }
    let e_ = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
      , eV = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    }
      , eD = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };
    function eR(t, {attrX: e, attrY: i, attrScale: s, pathLength: n, pathSpacing: r=1, pathOffset: a=0, ...o}, l, h, c) {
        if (ek(t, o, h),
        l) {
            t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
            return
        }
        t.attrs = t.style,
        t.style = {};
        let {attrs: d, style: u} = t;
        d.transform && (u.transform = d.transform,
        delete d.transform),
        (u.transform || d.transformOrigin) && (u.transformOrigin = d.transformOrigin ?? "50% 50%",
        delete d.transformOrigin),
        u.transform && (u.transformBox = c?.transformBox ?? "fill-box",
        delete d.transformBox),
        void 0 !== e && (d.x = e),
        void 0 !== i && (d.y = i),
        void 0 !== s && (d.scale = s),
        void 0 !== n && function(t, e, i=1, s=0, n=!0) {
            t.pathLength = 1;
            let r = n ? eV : eD;
            t[r.offset] = K.transform(-s);
            let a = K.transform(e)
              , o = K.transform(i);
            t[r.array] = `${a} ${o}`
        }(d, n, r, a, !1)
    }
    let eL = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
      , eO = t => "string" == typeof t && "svg" === t.toLowerCase();
    function eB(t, e, i) {
        let s = eA(t, e, i);
        for (let i in t)
            (t0(t[i]) || t0(e[i])) && (s[-1 !== d.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
        return s
    }
    class eF extends eb {
        constructor() {
            super(...arguments),
            this.type = "svg",
            this.isSVGTag = !1,
            this.measureInstanceViewportBox = er
        }
        getBaseTargetFromProps(t, e) {
            return t[e]
        }
        readValueFromInstance(t, e) {
            if (u.has(e)) {
                let t = tq(e);
                return t && t.default || 0
            }
            return e = eL.has(e) ? e : e_(e),
            t.getAttribute(e)
        }
        scrapeMotionValuesFromProps(t, e, i) {
            return eB(t, e, i)
        }
        build(t, e, i) {
            eR(t, e, this.isSVGTag, i.transformTemplate, i.style)
        }
        renderInstance(t, e, i, s) {
            for (let i in eT(t, e, void 0, s),
            e.attrs)
                t.setAttribute(eL.has(i) ? i : e_(i), e.attrs[i])
        }
        mount(t) {
            this.isSVGTag = eO(t.tagName),
            super.mount(t)
        }
    }
    let eI = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
    function eU(t) {
        if ("string" != typeof t || t.includes("-"))
            ;
        else if (eI.indexOf(t) > -1 || /[A-Z]/u.test(t))
            return !0;
        return !1
    }
    let ez = (0,
    a.createContext)({})
      , e$ = (0,
    a.createContext)({
        strict: !1
    })
      , eW = (0,
    a.createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    })
      , eH = (0,
    a.createContext)({});
    function eY(t) {
        return Array.isArray(t) ? t.join(" ") : t
    }
    let eX = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });
    function eG(t, e, i) {
        for (let s in e)
            t0(e[s]) || eC(s, i) || (t[s] = e[s])
    }
    let eK = () => ({
        ...eX(),
        attrs: {}
    })
      , eq = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
    function eZ(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || eq.has(t)
    }
    let eJ = t => !eZ(t);
    try {
        n = ( () => {
            let t = Error("Cannot find module '@emotion/is-prop-valid'");
            throw t.code = "MODULE_NOT_FOUND",
            t
        }
        )().default,
        "function" == typeof n && (eJ = t => t.startsWith("on") ? !eZ(t) : n(t))
    } catch {}
    let eQ = (0,
    a.createContext)(null);
    function e0(t) {
        return t0(t) ? t.get() : t
    }
    let e1 = t => (e, i) => {
        let s, n = (0,
        a.useContext)(eH), r = (0,
        a.useContext)(eQ), o = () => (function({scrapeMotionValuesFromProps: t, createRenderState: e}, i, s, n) {
            return {
                latestValues: function(t, e, i, s) {
                    let n = {}
                      , r = s(t, {});
                    for (let t in r)
                        n[t] = e0(r[t]);
                    let {initial: a, animate: o} = t
                      , l = em(t)
                      , h = ef(t);
                    e && h && !l && !1 !== t.inherit && (void 0 === a && (a = e.initial),
                    void 0 === o && (o = e.animate));
                    let c = !!i && !1 === i.initial
                      , d = (c = c || !1 === a) ? o : a;
                    if (d && "boolean" != typeof d && !ec(d)) {
                        let e = Array.isArray(d) ? d : [d];
                        for (let i = 0; i < e.length; i++) {
                            let s = ex(t, e[i]);
                            if (s) {
                                let {transitionEnd: t, transition: e, ...i} = s;
                                for (let t in i) {
                                    let e = i[t];
                                    if (Array.isArray(e)) {
                                        let t = c ? e.length - 1 : 0;
                                        e = e[t]
                                    }
                                    null !== e && (n[t] = e)
                                }
                                for (let e in t)
                                    n[e] = t[e]
                            }
                        }
                    }
                    return n
                }(i, s, n, t),
                renderState: e()
            }
        }
        )(t, e, n, r);
        return i ? o() : (null === (s = (0,
        a.useRef)(null)).current && (s.current = o()),
        s.current)
    }
      , e2 = e1({
        scrapeMotionValuesFromProps: eA,
        createRenderState: eX
    })
      , e5 = e1({
        scrapeMotionValuesFromProps: eB,
        createRenderState: eK
    })
      , e3 = Symbol.for("motionComponentSymbol");
    function e4(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
    }
    let e6 = "data-" + e_("framerAppearId")
      , e8 = (0,
    a.createContext)({})
      , e9 = ea ? a.useLayoutEffect : a.useEffect;
    function e7(t, {forwardMotionProps: e=!1}={}, i, s) {
        i && function(t) {
            for (let e in t)
                ee[e] = {
                    ...ee[e],
                    ...t[e]
                }
        }(i);
        let n = eU(t) ? e5 : e2;
        function o(i, o) {
            var l;
            let h, c = {
                ...(0,
                a.useContext)(eW),
                ...i,
                layoutId: function({layoutId: t}) {
                    let e = (0,
                    a.useContext)(ez).id;
                    return e && void 0 !== t ? e + "-" + t : t
                }(i)
            }, {isStatic: d} = c, u = function(t) {
                let {initial: e, animate: i} = function(t, e) {
                    if (em(t)) {
                        let {initial: e, animate: i} = t;
                        return {
                            initial: !1 === e || ed(e) ? e : void 0,
                            animate: ed(i) ? i : void 0
                        }
                    }
                    return !1 !== t.inherit ? e : {}
                }(t, (0,
                a.useContext)(eH));
                return (0,
                a.useMemo)( () => ({
                    initial: e,
                    animate: i
                }), [eY(e), eY(i)])
            }(i), p = n(i, d);
            if (!d && ea) {
                (0,
                a.useContext)(e$).strict;
                let e = function(t) {
                    let {drag: e, layout: i} = ee;
                    if (!e && !i)
                        return {};
                    let s = {
                        ...e,
                        ...i
                    };
                    return {
                        MeasureLayout: e?.isEnabled(t) || i?.isEnabled(t) ? s.MeasureLayout : void 0,
                        ProjectionNode: s.ProjectionNode
                    }
                }(c);
                h = e.MeasureLayout,
                u.visualElement = function(t, e, i, s, n) {
                    let {visualElement: r} = (0,
                    a.useContext)(eH)
                      , o = (0,
                    a.useContext)(e$)
                      , l = (0,
                    a.useContext)(eQ)
                      , h = (0,
                    a.useContext)(eW).reducedMotion
                      , c = (0,
                    a.useRef)(null);
                    s = s || o.renderer,
                    !c.current && s && (c.current = s(t, {
                        visualState: e,
                        parent: r,
                        props: i,
                        presenceContext: l,
                        blockInitialAnimation: !!l && !1 === l.initial,
                        reducedMotionConfig: h
                    }));
                    let d = c.current
                      , u = (0,
                    a.useContext)(e8);
                    d && !d.projection && n && ("html" === d.type || "svg" === d.type) && function(t, e, i, s) {
                        let {layoutId: n, layout: r, drag: a, dragConstraints: o, layoutScroll: l, layoutRoot: h, layoutCrossfade: c} = e;
                        t.projection = new i(t.latestValues,e["data-framer-portal-id"] ? void 0 : function t(e) {
                            if (e)
                                return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                        }(t.parent)),
                        t.projection.setOptions({
                            layoutId: n,
                            layout: r,
                            alwaysMeasureLayout: !!a || o && e4(o),
                            visualElement: t,
                            animationType: "string" == typeof r ? r : "both",
                            initialPromotionConfig: s,
                            crossfade: c,
                            layoutScroll: l,
                            layoutRoot: h
                        })
                    }(c.current, i, n, u);
                    let p = (0,
                    a.useRef)(!1);
                    (0,
                    a.useInsertionEffect)( () => {
                        d && p.current && d.update(i, l)
                    }
                    );
                    let m = i[e6]
                      , f = (0,
                    a.useRef)(!!m && !window.MotionHandoffIsComplete?.(m) && window.MotionHasOptimisedAnimation?.(m));
                    return e9( () => {
                        d && (p.current = !0,
                        window.MotionIsMounted = !0,
                        d.updateFeatures(),
                        d.scheduleRenderMicrotask(),
                        f.current && d.animationState && d.animationState.animateChanges())
                    }
                    ),
                    (0,
                    a.useEffect)( () => {
                        d && (!f.current && d.animationState && d.animationState.animateChanges(),
                        f.current && (queueMicrotask( () => {
                            window.MotionHandoffMarkAsComplete?.(m)
                        }
                        ),
                        f.current = !1),
                        d.enteringChildren = void 0)
                    }
                    ),
                    d
                }(t, p, c, s, e.ProjectionNode)
            }
            return (0,
            r.jsxs)(eH.Provider, {
                value: u,
                children: [h && u.visualElement ? (0,
                r.jsx)(h, {
                    visualElement: u.visualElement,
                    ...c
                }) : null, function(t, e, i, {latestValues: s}, n, r=!1) {
                    let o = (eU(t) ? function(t, e, i, s) {
                        let n = (0,
                        a.useMemo)( () => {
                            let i = eK();
                            return eR(i, e, eO(s), t.transformTemplate, t.style),
                            {
                                ...i.attrs,
                                style: {
                                    ...i.style
                                }
                            }
                        }
                        , [e]);
                        if (t.style) {
                            let e = {};
                            eG(e, t.style, t),
                            n.style = {
                                ...e,
                                ...n.style
                            }
                        }
                        return n
                    }
                    : function(t, e) {
                        let i, s, n = {}, r = (i = t.style || {},
                        eG(s = {}, i, t),
                        Object.assign(s, function({transformTemplate: t}, e) {
                            return (0,
                            a.useMemo)( () => {
                                let i = eX();
                                return ek(i, e, t),
                                Object.assign({}, i.vars, i.style)
                            }
                            , [e])
                        }(t, e)),
                        s);
                        return t.drag && !1 !== t.dragListener && (n.draggable = !1,
                        r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
                        r.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                        void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
                        n.style = r,
                        n
                    }
                    )(e, s, n, t)
                      , l = function(t, e, i) {
                        let s = {};
                        for (let n in t)
                            ("values" !== n || "object" != typeof t.values) && (eJ(n) || !0 === i && eZ(n) || !e && !eZ(n) || t.draggable && n.startsWith("onDrag")) && (s[n] = t[n]);
                        return s
                    }(e, "string" == typeof t, r)
                      , h = t !== a.Fragment ? {
                        ...l,
                        ...o,
                        ref: i
                    } : {}
                      , {children: c} = e
                      , d = (0,
                    a.useMemo)( () => t0(c) ? c.get() : c, [c]);
                    return (0,
                    a.createElement)(t, {
                        ...h,
                        children: d
                    })
                }(t, i, (l = u.visualElement,
                (0,
                a.useCallback)(t => {
                    t && p.onMount && p.onMount(t),
                    l && (t ? l.mount(t) : l.unmount()),
                    o && ("function" == typeof o ? o(t) : e4(o) && (o.current = t))
                }
                , [l])), p, d, e)]
            })
        }
        o.displayName = `motion.${"string" == typeof t ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
        let l = (0,
        a.forwardRef)(o);
        return l[e3] = t,
        l
    }
    function it(t, e, i) {
        let s = t.getProps();
        return ex(s, e, void 0 !== i ? i : s.custom, t)
    }
    function ie(t, e) {
        return t?.[e] ?? t?.default ?? t
    }
    let ii = t => Array.isArray(t);
    function is(t, e) {
        let i = t.getValue("willChange");
        if (t0(i) && i.add)
            return i.add(e);
        if (!i && tc.WillChange) {
            let i = new tc.WillChange("auto");
            t.addValue("willChange", i),
            i.add(e)
        }
    }
    function ir(t) {
        t.duration = 0,
        t.type = "keyframes"
    }
    let ia = (t, e) => i => e(t(i))
      , io = (...t) => t.reduce(ia)
      , il = t => 1e3 * t
      , ih = {
        layout: 0,
        mainThread: 0,
        waapi: 0
    };
    function ic(t, e, i) {
        return (i < 0 && (i += 1),
        i > 1 && (i -= 1),
        i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
    }
    function id(t, e) {
        return i => i > 0 ? e : t
    }
    let iu = (t, e, i) => {
        let s = t * t
          , n = i * (e * e - s) + s;
        return n < 0 ? 0 : Math.sqrt(n)
    }
      , ip = [tE, tA, t_];
    function im(t) {
        let e = ip.find(e => e.test(t));
        if (ti(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
        !e)
            return !1;
        let i = e.parse(t);
        return e === t_ && (i = function({hue: t, saturation: e, lightness: i, alpha: s}) {
            t /= 360,
            i /= 100;
            let n = 0
              , r = 0
              , a = 0;
            if (e /= 100) {
                let s = i < .5 ? i * (1 + e) : i + e - i * e
                  , o = 2 * i - s;
                n = ic(o, s, t + 1 / 3),
                r = ic(o, s, t),
                a = ic(o, s, t - 1 / 3)
            } else
                n = r = a = i;
            return {
                red: Math.round(255 * n),
                green: Math.round(255 * r),
                blue: Math.round(255 * a),
                alpha: s
            }
        }(i)),
        i
    }
    let ig = (t, e) => {
        let i = im(t)
          , s = im(e);
        if (!i || !s)
            return id(t, e);
        let n = {
            ...i
        };
        return t => (n.red = iu(i.red, s.red, t),
        n.green = iu(i.green, s.green, t),
        n.blue = iu(i.blue, s.blue, t),
        n.alpha = C(i.alpha, s.alpha, t),
        tA.transform(n))
    }
      , ix = new Set(["none", "hidden"]);
    function iv(t, e) {
        return i => C(t, e, i)
    }
    function iy(t) {
        return "number" == typeof t ? iv : "string" == typeof t ? M(t) ? id : tV.test(t) ? ig : ij : Array.isArray(t) ? ib : "object" == typeof t ? tV.test(t) ? ig : iw : id
    }
    function ib(t, e) {
        let i = [...t]
          , s = i.length
          , n = t.map( (t, i) => iy(t)(t, e[i]));
        return t => {
            for (let e = 0; e < s; e++)
                i[e] = n[e](t);
            return i
        }
    }
    function iw(t, e) {
        let i = {
            ...t,
            ...e
        }
          , s = {};
        for (let n in i)
            void 0 !== t[n] && void 0 !== e[n] && (s[n] = iy(t[n])(t[n], e[n]));
        return t => {
            for (let e in s)
                i[e] = s[e](t);
            return i
        }
    }
    let ij = (t, e) => {
        let i = tz.createTransformer(e)
          , s = tB(t)
          , n = tB(e);
        if (!(s.indexes.var.length === n.indexes.var.length && s.indexes.color.length === n.indexes.color.length && s.indexes.number.length >= n.indexes.number.length))
            return ti(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
            id(t, e);
        if (ix.has(t) && !n.values.length || ix.has(e) && !s.values.length)
            return ix.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t;
        return io(ib(function(t, e) {
            let i = []
              , s = {
                color: 0,
                var: 0,
                number: 0
            };
            for (let n = 0; n < e.values.length; n++) {
                let r = e.types[n]
                  , a = t.indexes[r][s[r]]
                  , o = t.values[a] ?? 0;
                i[n] = o,
                s[r]++
            }
            return i
        }(s, n), n.values), i)
    }
    ;
    function iN(t, e, i) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof i ? C(t, e, i) : iy(t)(t, e)
    }
    let ik = t => {
        let e = ({timestamp: e}) => t(e);
        return {
            start: (t=!0) => tp.update(e, t),
            stop: () => tm(e),
            now: () => tf.isProcessing ? tf.timestamp : t2.now()
        }
    }
      , iT = (t, e, i=10) => {
        let s = ""
          , n = Math.max(Math.round(e / i), 2);
        for (let e = 0; e < n; e++)
            s += Math.round(1e4 * t(e / (n - 1))) / 1e4 + ", ";
        return `linear(${s.substring(0, s.length - 2)})`
    }
    ;
    function iM(t) {
        let e = 0
          , i = t.next(e);
        for (; !i.done && e < 2e4; )
            e += 50,
            i = t.next(e);
        return e >= 2e4 ? 1 / 0 : e
    }
    function iS(t, e, i) {
        var s, n;
        let r = Math.max(e - 5, 0);
        return s = i - t(r),
        (n = e - r) ? 1e3 / n * s : 0
    }
    let iP = .01
      , iC = 2
      , iA = .005
      , iE = .5;
    function i_(t, e) {
        return t * Math.sqrt(1 - e * e)
    }
    let iV = ["duration", "bounce"]
      , iD = ["stiffness", "damping", "mass"];
    function iR(t, e) {
        return e.some(e => void 0 !== t[e])
    }
    function iL(t=.3, e=.3) {
        let i, s = "object" != typeof t ? {
            visualDuration: t,
            keyframes: [0, 1],
            bounce: e
        } : t, {restSpeed: n, restDelta: r} = s, a = s.keyframes[0], o = s.keyframes[s.keyframes.length - 1], l = {
            done: !1,
            value: a
        }, {stiffness: h, damping: c, mass: d, duration: u, velocity: p, isResolvedFromDuration: m} = function(t) {
            let e = {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
                ...t
            };
            if (!iR(t, iD) && iR(t, iV))
                if (t.visualDuration) {
                    let i = 2 * Math.PI / (1.2 * t.visualDuration)
                      , s = i * i
                      , n = 2 * z(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                    e = {
                        ...e,
                        mass: 1,
                        stiffness: s,
                        damping: n
                    }
                } else {
                    let i = function({duration: t=800, bounce: e=.3, velocity: i=0, mass: s=1}) {
                        let n, r;
                        ti(t <= il(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                        let a = 1 - e;
                        a = z(.05, 1, a),
                        t = z(.01, 10, t / 1e3),
                        a < 1 ? (n = e => {
                            let s = e * a
                              , n = s * t;
                            return .001 - (s - i) / i_(e, a) * Math.exp(-n)
                        }
                        ,
                        r = e => {
                            let s = e * a * t
                              , r = Math.pow(a, 2) * Math.pow(e, 2) * t
                              , o = Math.exp(-s)
                              , l = i_(Math.pow(e, 2), a);
                            return (s * i + i - r) * o * (-n(e) + .001 > 0 ? -1 : 1) / l
                        }
                        ) : (n = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1),
                        r = e => t * t * (i - e) * Math.exp(-e * t));
                        let o = function(t, e, i) {
                            let s = i;
                            for (let i = 1; i < 12; i++)
                                s -= t(s) / e(s);
                            return s
                        }(n, r, 5 / t);
                        if (t = il(t),
                        isNaN(o))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            };
                        {
                            let e = Math.pow(o, 2) * s;
                            return {
                                stiffness: e,
                                damping: 2 * a * Math.sqrt(s * e),
                                duration: t
                            }
                        }
                    }(t);
                    (e = {
                        ...e,
                        ...i,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
            return e
        }({
            ...s,
            velocity: -((s.velocity || 0) / 1e3)
        }), f = p || 0, g = c / (2 * Math.sqrt(h * d)), x = o - a, v = Math.sqrt(h / d) / 1e3, y = 5 > Math.abs(x);
        if (n || (n = y ? iP : iC),
        r || (r = y ? iA : iE),
        g < 1) {
            let t = i_(v, g);
            i = e => o - Math.exp(-g * v * e) * ((f + g * v * x) / t * Math.sin(t * e) + x * Math.cos(t * e))
        } else if (1 === g)
            i = t => o - Math.exp(-v * t) * (x + (f + v * x) * t);
        else {
            let t = v * Math.sqrt(g * g - 1);
            i = e => {
                let i = Math.exp(-g * v * e)
                  , s = Math.min(t * e, 300);
                return o - i * ((f + g * v * x) * Math.sinh(s) + t * x * Math.cosh(s)) / t
            }
        }
        let b = {
            calculatedDuration: m && u || null,
            next: t => {
                let e = i(t);
                if (m)
                    l.done = t >= u;
                else {
                    let s = 0 === t ? f : 0;
                    g < 1 && (s = 0 === t ? il(f) : iS(i, t, e));
                    let a = Math.abs(o - e) <= r;
                    l.done = Math.abs(s) <= n && a
                }
                return l.value = l.done ? o : e,
                l
            }
            ,
            toString: () => {
                let t = Math.min(iM(b), 2e4)
                  , e = iT(e => b.next(t * e).value, t, 30);
                return t + "ms " + e
            }
            ,
            toTransition: () => {}
        };
        return b
    }
    function iO({keyframes: t, velocity: e=0, power: i=.8, timeConstant: s=325, bounceDamping: n=10, bounceStiffness: r=500, modifyTarget: a, min: o, max: l, restDelta: h=.5, restSpeed: c}) {
        let d, u, p = t[0], m = {
            done: !1,
            value: p
        }, f = i * e, g = p + f, x = void 0 === a ? g : a(g);
        x !== g && (f = x - p);
        let v = t => -f * Math.exp(-t / s)
          , y = t => x + v(t)
          , b = t => {
            let e = v(t)
              , i = y(t);
            m.done = Math.abs(e) <= h,
            m.value = m.done ? x : i
        }
          , w = t => {
            let e;
            if (e = m.value,
            void 0 !== o && e < o || void 0 !== l && e > l) {
                var i;
                d = t,
                u = iL({
                    keyframes: [m.value, (i = m.value,
                    void 0 === o ? l : void 0 === l || Math.abs(o - i) < Math.abs(l - i) ? o : l)],
                    velocity: iS(y, t, m.value),
                    damping: n,
                    stiffness: r,
                    restDelta: h,
                    restSpeed: c
                })
            }
        }
        ;
        return w(0),
        {
            calculatedDuration: null,
            next: t => {
                let e = !1;
                return (u || void 0 !== d || (e = !0,
                b(t),
                w(t)),
                void 0 !== d && t >= d) ? u.next(t - d) : (e || b(t),
                m)
            }
        }
    }
    iL.applyToOptions = t => {
        let e = function(t, e=100, i) {
            let s = i({
                ...t,
                keyframes: [0, e]
            })
              , n = Math.min(iM(s), 2e4);
            return {
                type: "keyframes",
                ease: t => s.next(n * t).value / e,
                duration: n / 1e3
            }
        }(t, 100, iL);
        return t.ease = e.ease,
        t.duration = il(e.duration),
        t.type = "keyframes",
        t
    }
    ;
    let iB = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
    function iF(t, e, i, s) {
        return t === e && i === s ? th : n => 0 === n || 1 === n ? n : iB(function(t, e, i, s, n) {
            let r, a, o = 0;
            do
                (r = iB(a = e + (i - e) / 2, s, n) - t) > 0 ? i = a : e = a;
            while (Math.abs(r) > 1e-7 && ++o < 12)return a
        }(n, 0, 1, t, i), e, s)
    }
    let iI = iF(.42, 0, 1, 1)
      , iU = iF(0, 0, .58, 1)
      , iz = iF(.42, 0, .58, 1)
      , i$ = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
      , iW = t => e => 1 - t(1 - e)
      , iH = iF(.33, 1.53, .69, .99)
      , iY = iW(iH)
      , iX = i$(iY)
      , iG = t => (t *= 2) < 1 ? .5 * iY(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
      , iK = t => 1 - Math.sin(Math.acos(t))
      , iq = iW(iK)
      , iZ = i$(iK)
      , iJ = t => Array.isArray(t) && "number" == typeof t[0]
      , iQ = {
        linear: th,
        easeIn: iI,
        easeInOut: iz,
        easeOut: iU,
        circIn: iK,
        circInOut: iZ,
        circOut: iq,
        backIn: iY,
        backInOut: iX,
        backOut: iH,
        anticipate: iG
    }
      , i0 = t => {
        if (iJ(t)) {
            ts(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            let[e,i,s,n] = t;
            return iF(e, i, s, n)
        }
        return "string" == typeof t ? (ts(void 0 !== iQ[t], `Invalid easing type '${t}'`, "invalid-easing-type"),
        iQ[t]) : t
    }
      , i1 = (t, e, i) => {
        let s = e - t;
        return 0 === s ? 1 : (i - t) / s
    }
    ;
    function i2({duration: t=300, keyframes: e, times: i, ease: s="easeInOut"}) {
        var n;
        let r, a = Array.isArray(s) && "number" != typeof s[0] ? s.map(i0) : i0(s), o = {
            done: !1,
            value: e[0]
        }, l = function(t, e, {clamp: i=!0, ease: s, mixer: n}={}) {
            let r = t.length;
            if (ts(r === e.length, "Both input and output ranges must be the same length", "range-length"),
            1 === r)
                return () => e[0];
            if (2 === r && e[0] === e[1])
                return () => e[1];
            let a = t[0] === t[1];
            t[0] > t[r - 1] && (t = [...t].reverse(),
            e = [...e].reverse());
            let o = function(t, e, i) {
                let s = []
                  , n = i || tc.mix || iN
                  , r = t.length - 1;
                for (let i = 0; i < r; i++) {
                    let r = n(t[i], t[i + 1]);
                    e && (r = io(Array.isArray(e) ? e[i] || th : e, r)),
                    s.push(r)
                }
                return s
            }(e, s, n)
              , l = o.length
              , h = i => {
                if (a && i < t[0])
                    return e[0];
                let s = 0;
                if (l > 1)
                    for (; s < t.length - 2 && !(i < t[s + 1]); s++)
                        ;
                let n = i1(t[s], t[s + 1], i);
                return o[s](n)
            }
            ;
            return i ? e => h(z(t[0], t[r - 1], e)) : h
        }((n = i && i.length === e.length ? i : (!function(t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
                let n = i1(0, e, s);
                t.push(C(i, 1, n))
            }
        }(r = [0], e.length - 1),
        r),
        n.map(e => e * t)), e, {
            ease: Array.isArray(a) ? a : e.map( () => a || iz).splice(0, e.length - 1)
        });
        return {
            calculatedDuration: t,
            next: e => (o.value = l(e),
            o.done = e >= t,
            o)
        }
    }
    let i5 = t => null !== t;
    function i3(t, {repeat: e, repeatType: i="loop"}, s, n=1) {
        let r = t.filter(i5)
          , a = n < 0 || e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return a && void 0 !== s ? s : r[a]
    }
    let i4 = {
        decay: iO,
        inertia: iO,
        tween: i2,
        keyframes: i2,
        spring: iL
    };
    function i6(t) {
        "string" == typeof t.type && (t.type = i4[t.type])
    }
    class i8 {
        constructor() {
            this.updateFinished()
        }
        get finished() {
            return this._finished
        }
        updateFinished() {
            this._finished = new Promise(t => {
                this.resolve = t
            }
            )
        }
        notifyFinished() {
            this.resolve()
        }
        then(t, e) {
            return this.finished.then(t, e)
        }
    }
    let i9 = t => t / 100;
    class i7 extends i8 {
        constructor(t) {
            super(),
            this.state = "idle",
            this.startTime = null,
            this.isStopped = !1,
            this.currentTime = 0,
            this.holdTime = null,
            this.playbackSpeed = 1,
            this.stop = () => {
                let {motionValue: t} = this.options;
                t && t.updatedAt !== t2.now() && this.tick(t2.now()),
                this.isStopped = !0,
                "idle" !== this.state && (this.teardown(),
                this.options.onStop?.())
            }
            ,
            ih.mainThread++,
            this.options = t,
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause()
        }
        initAnimation() {
            let {options: t} = this;
            i6(t);
            let {type: e=i2, repeat: i=0, repeatDelay: s=0, repeatType: n, velocity: r=0} = t
              , {keyframes: a} = t
              , o = e || i2;
            o !== i2 && "number" != typeof a[0] && (this.mixKeyframes = io(i9, iN(a[0], a[1])),
            a = [0, 100]);
            let l = o({
                ...t,
                keyframes: a
            });
            "mirror" === n && (this.mirroredGenerator = o({
                ...t,
                keyframes: [...a].reverse(),
                velocity: -r
            })),
            null === l.calculatedDuration && (l.calculatedDuration = iM(l));
            let {calculatedDuration: h} = l;
            this.calculatedDuration = h,
            this.resolvedDuration = h + s,
            this.totalDuration = this.resolvedDuration * (i + 1) - s,
            this.generator = l
        }
        updateTime(t) {
            let e = Math.round(t - this.startTime) * this.playbackSpeed;
            null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
        }
        tick(t, e=!1) {
            let {generator: i, totalDuration: s, mixKeyframes: n, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: o} = this;
            if (null === this.startTime)
                return i.next(0);
            let {delay: l=0, keyframes: h, repeat: c, repeatType: d, repeatDelay: u, type: p, onUpdate: m, finalKeyframe: f} = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - s / this.speed, this.startTime)),
            e ? this.currentTime = t : this.updateTime(t);
            let g = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1)
              , x = this.playbackSpeed >= 0 ? g < 0 : g > s;
            this.currentTime = Math.max(g, 0),
            "finished" === this.state && null === this.holdTime && (this.currentTime = s);
            let v = this.currentTime
              , y = i;
            if (c) {
                let t = Math.min(this.currentTime, s) / a
                  , e = Math.floor(t)
                  , i = t % 1;
                !i && t >= 1 && (i = 1),
                1 === i && e--,
                (e = Math.min(e, c + 1)) % 2 && ("reverse" === d ? (i = 1 - i,
                u && (i -= u / a)) : "mirror" === d && (y = r)),
                v = z(0, 1, i) * a
            }
            let b = x ? {
                done: !1,
                value: h[0]
            } : y.next(v);
            n && (b.value = n(b.value));
            let {done: w} = b;
            x || null === o || (w = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
            let j = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
            return j && p !== iO && (b.value = i3(h, this.options, f, this.speed)),
            m && m(b.value),
            j && this.finish(),
            b
        }
        then(t, e) {
            return this.finished.then(t, e)
        }
        get duration() {
            return this.calculatedDuration / 1e3
        }
        get iterationDuration() {
            let {delay: t=0} = this.options || {};
            return this.duration + t / 1e3
        }
        get time() {
            return this.currentTime / 1e3
        }
        set time(t) {
            t = il(t),
            this.currentTime = t,
            null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver?.start(!1)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(t) {
            this.updateTime(t2.now());
            let e = this.playbackSpeed !== t;
            this.playbackSpeed = t,
            e && (this.time = this.currentTime / 1e3)
        }
        play() {
            if (this.isStopped)
                return;
            let {driver: t=ik, startTime: e} = this.options;
            this.driver || (this.driver = t(t => this.tick(t))),
            this.options.onPlay?.();
            let i = this.driver.now();
            "finished" === this.state ? (this.updateFinished(),
            this.startTime = i) : null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = e ?? i),
            "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration),
            this.holdTime = null,
            this.state = "running",
            this.driver.start()
        }
        pause() {
            this.state = "paused",
            this.updateTime(t2.now()),
            this.holdTime = this.currentTime
        }
        complete() {
            "running" !== this.state && this.play(),
            this.state = "finished",
            this.holdTime = null
        }
        finish() {
            this.notifyFinished(),
            this.teardown(),
            this.state = "finished",
            this.options.onComplete?.()
        }
        cancel() {
            this.holdTime = null,
            this.startTime = 0,
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.()
        }
        teardown() {
            this.state = "idle",
            this.stopDriver(),
            this.startTime = this.holdTime = null,
            ih.mainThread--
        }
        stopDriver() {
            this.driver && (this.driver.stop(),
            this.driver = void 0)
        }
        sample(t) {
            return this.startTime = 0,
            this.tick(t, !0)
        }
        attachTimeline(t) {
            return this.options.allowFlatten && (this.options.type = "keyframes",
            this.options.ease = "linear",
            this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
        }
    }
    function st(t) {
        let e;
        return () => (void 0 === e && (e = t()),
        e)
    }
    let se = st( () => void 0 !== window.ScrollTimeline)
      , si = {}
      , ss = (i = st( () => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch (t) {
            return !1
        }
        return !0
    }
    ),
    () => si.linearEasing ?? i())
      , sn = ([t,e,i,s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`
      , sr = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: sn([0, .65, .55, 1]),
        circOut: sn([.55, 0, 1, .45]),
        backIn: sn([.31, .01, .66, -.59]),
        backOut: sn([.33, 1.53, .69, .99])
    };
    function sa(t) {
        return "function" == typeof t && "applyToOptions"in t
    }
    class so extends i8 {
        constructor(t) {
            if (super(),
            this.finishedTime = null,
            this.isStopped = !1,
            !t)
                return;
            const {element: e, name: i, keyframes: s, pseudoElement: n, allowFlatten: r=!1, finalKeyframe: a, onComplete: o} = t;
            this.isPseudoElement = !!n,
            this.allowFlatten = r,
            this.options = t,
            ts("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
            const l = function({type: t, ...e}) {
                return sa(t) && ss() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e)
            }(t);
            this.animation = function(t, e, i, {delay: s=0, duration: n=300, repeat: r=0, repeatType: a="loop", ease: o="easeOut", times: l}={}, h) {
                let c = {
                    [e]: i
                };
                l && (c.offset = l);
                let d = function t(e, i) {
                    if (e)
                        return "function" == typeof e ? ss() ? iT(e, i) : "ease-out" : iJ(e) ? sn(e) : Array.isArray(e) ? e.map(e => t(e, i) || sr.easeOut) : sr[e]
                }(o, n);
                Array.isArray(d) && (c.easing = d);
                let u = {
                    delay: s,
                    duration: n,
                    easing: Array.isArray(d) ? "linear" : d,
                    fill: "both",
                    iterations: r + 1,
                    direction: "reverse" === a ? "alternate" : "normal"
                };
                h && (u.pseudoElement = h);
                let p = t.animate(c, u);
                return p
            }(e, i, s, l, n),
            !1 === l.autoplay && this.animation.pause(),
            this.animation.onfinish = () => {
                if (this.finishedTime = this.time,
                !n) {
                    let t = i3(s, this.options, a, this.speed);
                    this.updateMotionValue ? this.updateMotionValue(t) : i.startsWith("--") ? e.style.setProperty(i, t) : e.style[i] = t,
                    this.animation.cancel()
                }
                o?.(),
                this.notifyFinished()
            }
        }
        play() {
            this.isStopped || (this.animation.play(),
            "finished" === this.state && this.updateFinished())
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.finish?.()
        }
        cancel() {
            try {
                this.animation.cancel()
            } catch (t) {}
        }
        stop() {
            if (this.isStopped)
                return;
            this.isStopped = !0;
            let {state: t} = this;
            "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
            this.isPseudoElement || this.cancel())
        }
        commitStyles() {
            this.isPseudoElement || this.animation.commitStyles?.()
        }
        get duration() {
            return Number(this.animation.effect?.getComputedTiming?.().duration || 0) / 1e3
        }
        get iterationDuration() {
            let {delay: t=0} = this.options || {};
            return this.duration + t / 1e3
        }
        get time() {
            return (Number(this.animation.currentTime) || 0) / 1e3
        }
        set time(t) {
            this.finishedTime = null,
            this.animation.currentTime = il(t)
        }
        get speed() {
            return this.animation.playbackRate
        }
        set speed(t) {
            t < 0 && (this.finishedTime = null),
            this.animation.playbackRate = t
        }
        get state() {
            return null !== this.finishedTime ? "finished" : this.animation.playState
        }
        get startTime() {
            return Number(this.animation.startTime)
        }
        set startTime(t) {
            this.animation.startTime = t
        }
        attachTimeline({timeline: t, observe: e}) {
            return (this.allowFlatten && this.animation.effect?.updateTiming({
                easing: "linear"
            }),
            this.animation.onfinish = null,
            t && se()) ? (this.animation.timeline = t,
            th) : e(this)
        }
    }
    let sl = {
        anticipate: iG,
        backInOut: iX,
        circInOut: iZ
    };
    class sh extends so {
        constructor(t) {
            !function(t) {
                "string" == typeof t.ease && t.ease in sl && (t.ease = sl[t.ease])
            }(t),
            i6(t),
            super(t),
            t.startTime && (this.startTime = t.startTime),
            this.options = t
        }
        updateMotionValue(t) {
            let {motionValue: e, onUpdate: i, onComplete: s, element: n, ...r} = this.options;
            if (!e)
                return;
            if (void 0 !== t)
                return void e.set(t);
            let a = new i7({
                ...r,
                autoplay: !1
            })
              , o = il(this.finishedTime ?? this.time);
            e.setWithVelocity(a.sample(o - 10).value, a.sample(o).value, 10),
            a.stop()
        }
    }
    let sc = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tz.test(t) || "0" === t) && !t.startsWith("url("))
      , sd = new Set(["opacity", "clipPath", "filter", "transform"])
      , su = st( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class sp extends i8 {
        constructor({autoplay: t=!0, delay: e=0, type: i="keyframes", repeat: s=0, repeatDelay: n=0, repeatType: r="loop", keyframes: a, name: o, motionValue: l, element: h, ...c}) {
            super(),
            this.stop = () => {
                this._animation && (this._animation.stop(),
                this.stopTimeline?.()),
                this.keyframeResolver?.cancel()
            }
            ,
            this.createdAt = t2.now();
            const d = {
                autoplay: t,
                delay: e,
                type: i,
                repeat: s,
                repeatDelay: n,
                repeatType: r,
                name: o,
                motionValue: l,
                element: h,
                ...c
            }
              , u = h?.KeyframeResolver || tN;
            this.keyframeResolver = new u(a, (t, e, i) => this.onKeyframesResolved(t, e, d, !i),o,l,h),
            this.keyframeResolver?.scheduleResolve()
        }
        onKeyframesResolved(t, e, i, s) {
            this.keyframeResolver = void 0;
            let {name: n, type: r, velocity: a, delay: o, isHandoff: l, onUpdate: h} = i;
            this.resolvedAt = t2.now(),
            !function(t, e, i, s) {
                let n = t[0];
                if (null === n)
                    return !1;
                if ("display" === e || "visibility" === e)
                    return !0;
                let r = t[t.length - 1]
                  , a = sc(n, e)
                  , o = sc(r, e);
                return ti(a === o, `You are trying to animate ${e} from "${n}" to "${r}". "${a ? r : n}" is not an animatable value.`, "value-not-animatable"),
                !!a && !!o && (function(t) {
                    let e = t[0];
                    if (1 === t.length)
                        return !0;
                    for (let i = 0; i < t.length; i++)
                        if (t[i] !== e)
                            return !0
                }(t) || ("spring" === i || sa(i)) && s)
            }(t, n, r, a) && ((tc.instantAnimations || !o) && h?.(i3(t, i, e)),
            t[0] = t[t.length - 1],
            ir(i),
            i.repeat = 0);
            let c = {
                startTime: s ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                finalKeyframe: e,
                ...i,
                keyframes: t
            }
              , d = !l && function(t) {
                let {motionValue: e, name: i, repeatDelay: s, repeatType: n, damping: r, type: a} = t;
                if (!(e?.owner?.current instanceof HTMLElement))
                    return !1;
                let {onUpdate: o, transformTemplate: l} = e.owner.getProps();
                return su() && i && sd.has(i) && ("transform" !== i || !l) && !o && !s && "mirror" !== n && 0 !== r && "inertia" !== a
            }(c) ? new sh({
                ...c,
                element: c.motionValue.owner.current
            }) : new i7(c);
            d.finished.then( () => this.notifyFinished()).catch(th),
            this.pendingTimeline && (this.stopTimeline = d.attachTimeline(this.pendingTimeline),
            this.pendingTimeline = void 0),
            this._animation = d
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(t, e) {
            return this.finished.finally(t).then( () => {}
            )
        }
        get animation() {
            return this._animation || (this.keyframeResolver?.resume(),
            tb = !0,
            tj(),
            tw(),
            tb = !1),
            this._animation
        }
        get duration() {
            return this.animation.duration
        }
        get iterationDuration() {
            return this.animation.iterationDuration
        }
        get time() {
            return this.animation.time
        }
        set time(t) {
            this.animation.time = t
        }
        get speed() {
            return this.animation.speed
        }
        get state() {
            return this.animation.state
        }
        set speed(t) {
            this.animation.speed = t
        }
        get startTime() {
            return this.animation.startTime
        }
        attachTimeline(t) {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
            () => this.stop()
        }
        play() {
            this.animation.play()
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.complete()
        }
        cancel() {
            this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel()
        }
    }
    let sm = t => null !== t
      , sf = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    }
      , sg = {
        type: "keyframes",
        duration: .8
    }
      , sx = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    }
      , sv = (t, e, i, s={}, n, r) => a => {
        let o = ie(s, t) || {}
          , l = o.delay || s.delay || 0
          , {elapsed: h=0} = s;
        h -= il(l);
        let c = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...o,
            delay: -h,
            onUpdate: t => {
                e.set(t),
                o.onUpdate && o.onUpdate(t)
            }
            ,
            onComplete: () => {
                a(),
                o.onComplete && o.onComplete()
            }
            ,
            name: t,
            motionValue: e,
            element: r ? void 0 : n
        };
        !function({when: t, delay: e, delayChildren: i, staggerChildren: s, staggerDirection: n, repeat: r, repeatType: a, repeatDelay: o, from: l, elapsed: h, ...c}) {
            return !!Object.keys(c).length
        }(o) && Object.assign(c, ( (t, {keyframes: e}) => e.length > 2 ? sg : u.has(t) ? t.startsWith("scale") ? {
            type: "spring",
            stiffness: 550,
            damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        } : sf : sx)(t, c)),
        c.duration && (c.duration = il(c.duration)),
        c.repeatDelay && (c.repeatDelay = il(c.repeatDelay)),
        void 0 !== c.from && (c.keyframes[0] = c.from);
        let d = !1;
        if (!1 !== c.type && (0 !== c.duration || c.repeatDelay) || (ir(c),
        0 === c.delay && (d = !0)),
        (tc.instantAnimations || tc.skipAnimations) && (d = !0,
        ir(c),
        c.delay = 0),
        c.allowFlatten = !o.type && !o.ease,
        d && !r && void 0 !== e.get()) {
            let t = function(t, {repeat: e, repeatType: i="loop"}, s) {
                let n = t.filter(sm)
                  , r = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
                return n[r]
            }(c.keyframes, o);
            if (void 0 !== t)
                return void tp.update( () => {
                    c.onUpdate(t),
                    c.onComplete()
                }
                )
        }
        return o.isSync ? new i7(c) : new sp(c)
    }
    ;
    function sy(t, e, {delay: i=0, transitionOverride: s, type: n}={}) {
        let {transition: r=t.getDefaultTransition(), transitionEnd: a, ...o} = e;
        s && (r = s);
        let l = []
          , h = n && t.animationState && t.animationState.getState()[n];
        for (let e in o) {
            let s = t.getValue(e, t.latestValues[e] ?? null)
              , n = o[e];
            if (void 0 === n || h && function({protectedKeys: t, needsAnimating: e}, i) {
                let s = t.hasOwnProperty(i) && !0 !== e[i];
                return e[i] = !1,
                s
            }(h, e))
                continue;
            let a = {
                delay: i,
                ...ie(r || {}, e)
            }
              , c = s.get();
            if (void 0 !== c && !s.isAnimating && !Array.isArray(n) && n === c && !a.velocity)
                continue;
            let d = !1;
            if (window.MotionHandoffAnimation) {
                let i = t.props[e6];
                if (i) {
                    let t = window.MotionHandoffAnimation(i, e, tp);
                    null !== t && (a.startTime = t,
                    d = !0)
                }
            }
            is(t, e),
            s.start(sv(e, s, n, t.shouldReduceMotion && U.has(e) ? {
                type: !1
            } : a, t, d));
            let u = s.animation;
            u && l.push(u)
        }
        return a && Promise.all(l).then( () => {
            tp.update( () => {
                a && function(t, e) {
                    let {transitionEnd: i={}, transition: s={}, ...n} = it(t, e) || {};
                    for (let e in n = {
                        ...n,
                        ...i
                    }) {
                        var r;
                        let i = ii(r = n[e]) ? r[r.length - 1] || 0 : r;
                        t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, t8(i))
                    }
                }(t, a)
            }
            )
        }
        ),
        l
    }
    function sb(t, e, i, s=0, n=1) {
        let r = Array.from(t).sort( (t, e) => t.sortNodePosition(e)).indexOf(e)
          , a = t.size
          , o = (a - 1) * s;
        return "function" == typeof i ? i(r, a) : 1 === n ? r * s : o - r * s
    }
    function sw(t, e, i={}) {
        let s = it(t, e, "exit" === i.type ? t.presenceContext?.custom : void 0)
          , {transition: n=t.getDefaultTransition() || {}} = s || {};
        i.transitionOverride && (n = i.transitionOverride);
        let r = s ? () => Promise.all(sy(t, s, i)) : () => Promise.resolve()
          , a = t.variantChildren && t.variantChildren.size ? (s=0) => {
            let {delayChildren: r=0, staggerChildren: a, staggerDirection: o} = n;
            return function(t, e, i=0, s=0, n=0, r=1, a) {
                let o = [];
                for (let l of t.variantChildren)
                    l.notify("AnimationStart", e),
                    o.push(sw(l, e, {
                        ...a,
                        delay: i + ("function" == typeof s ? 0 : s) + sb(t.variantChildren, l, s, n, r)
                    }).then( () => l.notify("AnimationComplete", e)));
                return Promise.all(o)
            }(t, e, s, r, a, o, i)
        }
        : () => Promise.resolve()
          , {when: o} = n;
        if (!o)
            return Promise.all([r(), a(i.delay)]);
        {
            let[t,e] = "beforeChildren" === o ? [r, a] : [a, r];
            return t().then( () => e())
        }
    }
    function sj(t, e) {
        if (!Array.isArray(e))
            return !1;
        let i = e.length;
        if (i !== t.length)
            return !1;
        for (let s = 0; s < i; s++)
            if (e[s] !== t[s])
                return !1;
        return !0
    }
    let sN = ep.length
      , sk = [...eu].reverse()
      , sT = eu.length;
    function sM(t=!1) {
        return {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }
    function sS() {
        return {
            animate: sM(!0),
            whileInView: sM(),
            whileHover: sM(),
            whileTap: sM(),
            whileDrag: sM(),
            whileFocus: sM(),
            exit: sM()
        }
    }
    class sP {
        constructor(t) {
            this.isMounted = !1,
            this.node = t
        }
        update() {}
    }
    let sC = 0
      , sA = {
        x: !1,
        y: !1
    };
    function sE(t, e, i, s={
        passive: !0
    }) {
        return t.addEventListener(e, i, s),
        () => t.removeEventListener(e, i)
    }
    let s_ = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
    function sV(t) {
        return {
            point: {
                x: t.pageX,
                y: t.pageY
            }
        }
    }
    function sD(t, e, i, s) {
        return sE(t, e, t => s_(t) && i(t, sV(t)), s)
    }
    function sR(t) {
        return t.max - t.min
    }
    function sL(t, e, i, s=.5) {
        t.origin = s,
        t.originPoint = C(e.min, e.max, t.origin),
        t.scale = sR(i) / sR(e),
        t.translate = C(i.min, i.max, t.origin) - t.originPoint,
        (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1),
        (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
    }
    function sO(t, e, i, s) {
        sL(t.x, e.x, i.x, s ? s.originX : void 0),
        sL(t.y, e.y, i.y, s ? s.originY : void 0)
    }
    function sB(t, e, i) {
        t.min = i.min + e.min,
        t.max = t.min + sR(e)
    }
    function sF(t, e, i) {
        t.min = e.min - i.min,
        t.max = t.min + sR(e)
    }
    function sI(t, e, i) {
        sF(t.x, e.x, i.x),
        sF(t.y, e.y, i.y)
    }
    function sU(t) {
        return [t("x"), t("y")]
    }
    let sz = ({current: t}) => t ? t.ownerDocument.defaultView : null
      , s$ = (t, e) => Math.abs(t - e);
    class sW {
        constructor(t, e, {transformPagePoint: i, contextWindow: s=window, dragSnapToOrigin: n=!1, distanceThreshold: r=3}={}) {
            if (this.startEvent = null,
            this.lastMoveEvent = null,
            this.lastMoveEventInfo = null,
            this.handlers = {},
            this.contextWindow = window,
            this.updatePoint = () => {
                var t, e;
                if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                let i = sX(this.lastMoveEventInfo, this.history)
                  , s = null !== this.startEvent
                  , n = (t = i.offset,
                e = {
                    x: 0,
                    y: 0
                },
                Math.sqrt(s$(t.x, e.x) ** 2 + s$(t.y, e.y) ** 2) >= this.distanceThreshold);
                if (!s && !n)
                    return;
                let {point: r} = i
                  , {timestamp: a} = tf;
                this.history.push({
                    ...r,
                    timestamp: a
                });
                let {onStart: o, onMove: l} = this.handlers;
                s || (o && o(this.lastMoveEvent, i),
                this.startEvent = this.lastMoveEvent),
                l && l(this.lastMoveEvent, i)
            }
            ,
            this.handlePointerMove = (t, e) => {
                this.lastMoveEvent = t,
                this.lastMoveEventInfo = sH(e, this.transformPagePoint),
                tp.update(this.updatePoint, !0)
            }
            ,
            this.handlePointerUp = (t, e) => {
                this.end();
                let {onEnd: i, onSessionEnd: s, resumeAnimation: n} = this.handlers;
                if (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                let r = sX("pointercancel" === t.type ? this.lastMoveEventInfo : sH(e, this.transformPagePoint), this.history);
                this.startEvent && i && i(t, r),
                s && s(t, r)
            }
            ,
            !s_(t))
                return;
            this.dragSnapToOrigin = n,
            this.handlers = e,
            this.transformPagePoint = i,
            this.distanceThreshold = r,
            this.contextWindow = s || window;
            const a = sH(sV(t), this.transformPagePoint)
              , {point: o} = a
              , {timestamp: l} = tf;
            this.history = [{
                ...o,
                timestamp: l
            }];
            const {onSessionStart: h} = e;
            h && h(t, sX(a, this.history)),
            this.removeListeners = io(sD(this.contextWindow, "pointermove", this.handlePointerMove), sD(this.contextWindow, "pointerup", this.handlePointerUp), sD(this.contextWindow, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
            this.handlers = t
        }
        end() {
            this.removeListeners && this.removeListeners(),
            tm(this.updatePoint)
        }
    }
    function sH(t, e) {
        return e ? {
            point: e(t.point)
        } : t
    }
    function sY(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }
    function sX({point: t}, e) {
        return {
            point: t,
            delta: sY(t, sG(e)),
            offset: sY(t, e[0]),
            velocity: function(t, e) {
                if (t.length < 2)
                    return {
                        x: 0,
                        y: 0
                    };
                let i = t.length - 1
                  , s = null
                  , n = sG(t);
                for (; i >= 0 && (s = t[i],
                !(n.timestamp - s.timestamp > il(.1))); )
                    i--;
                if (!s)
                    return {
                        x: 0,
                        y: 0
                    };
                let r = (n.timestamp - s.timestamp) / 1e3;
                if (0 === r)
                    return {
                        x: 0,
                        y: 0
                    };
                let a = {
                    x: (n.x - s.x) / r,
                    y: (n.y - s.y) / r
                };
                return a.x === 1 / 0 && (a.x = 0),
                a.y === 1 / 0 && (a.y = 0),
                a
            }(e, .1)
        }
    }
    function sG(t) {
        return t[t.length - 1]
    }
    function sK(t, e, i) {
        return {
            min: void 0 !== e ? t.min + e : void 0,
            max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
        }
    }
    function sq(t, e) {
        let i = e.min - t.min
          , s = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([i,s] = [s, i]),
        {
            min: i,
            max: s
        }
    }
    function sZ(t, e, i) {
        return {
            min: sJ(t, e),
            max: sJ(t, i)
        }
    }
    function sJ(t, e) {
        return "number" == typeof t ? t : t[e] || 0
    }
    let sQ = new WeakMap;
    class s0 {
        constructor(t) {
            this.openDragLock = null,
            this.isDragging = !1,
            this.currentDirection = null,
            this.originPoint = {
                x: 0,
                y: 0
            },
            this.constraints = !1,
            this.hasMutatedConstraints = !1,
            this.elastic = er(),
            this.latestPointerEvent = null,
            this.latestPanInfo = null,
            this.visualElement = t
        }
        start(t, {snapToCursor: e=!1, distanceThreshold: i}={}) {
            let {presenceContext: s} = this.visualElement;
            if (s && !1 === s.isPresent)
                return;
            let n = t => {
                let {dragSnapToOrigin: i} = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                e && this.snapToCursor(sV(t).point)
            }
              , r = (t, e) => {
                let {drag: i, dragPropagation: s, onDragStart: n} = this.getProps();
                if (i && !s && (this.openDragLock && this.openDragLock(),
                this.openDragLock = function(t) {
                    if ("x" === t || "y" === t)
                        if (sA[t])
                            return null;
                        else
                            return sA[t] = !0,
                            () => {
                                sA[t] = !1
                            }
                            ;
                    return sA.x || sA.y ? null : (sA.x = sA.y = !0,
                    () => {
                        sA.x = sA.y = !1
                    }
                    )
                }(i),
                !this.openDragLock))
                    return;
                this.latestPointerEvent = t,
                this.latestPanInfo = e,
                this.isDragging = !0,
                this.currentDirection = null,
                this.resolveConstraints(),
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                this.visualElement.projection.target = void 0),
                sU(t => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (G.test(e)) {
                        let {projection: i} = this.visualElement;
                        if (i && i.layout) {
                            let s = i.layout.layoutBox[t];
                            s && (e = sR(s) * (parseFloat(e) / 100))
                        }
                    }
                    this.originPoint[t] = e
                }
                ),
                n && tp.postRender( () => n(t, e)),
                is(this.visualElement, "transform");
                let {animationState: r} = this.visualElement;
                r && r.setActive("whileDrag", !0)
            }
              , a = (t, e) => {
                this.latestPointerEvent = t,
                this.latestPanInfo = e;
                let {dragPropagation: i, dragDirectionLock: s, onDirectionLock: n, onDrag: r} = this.getProps();
                if (!i && !this.openDragLock)
                    return;
                let {offset: a} = e;
                if (s && null === this.currentDirection) {
                    this.currentDirection = function(t, e=10) {
                        let i = null;
                        return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                        i
                    }(a),
                    null !== this.currentDirection && n && n(this.currentDirection);
                    return
                }
                this.updateAxis("x", e.point, a),
                this.updateAxis("y", e.point, a),
                this.visualElement.render(),
                r && r(t, e)
            }
              , o = (t, e) => {
                this.latestPointerEvent = t,
                this.latestPanInfo = e,
                this.stop(t, e),
                this.latestPointerEvent = null,
                this.latestPanInfo = null
            }
              , l = () => sU(t => "paused" === this.getAnimationState(t) && this.getAxisMotionValue(t).animation?.play())
              , {dragSnapToOrigin: h} = this.getProps();
            this.panSession = new sW(t,{
                onSessionStart: n,
                onStart: r,
                onMove: a,
                onSessionEnd: o,
                resumeAnimation: l
            },{
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: h,
                distanceThreshold: i,
                contextWindow: sz(this.visualElement)
            })
        }
        stop(t, e) {
            let i = t || this.latestPointerEvent
              , s = e || this.latestPanInfo
              , n = this.isDragging;
            if (this.cancel(),
            !n || !s || !i)
                return;
            let {velocity: r} = s;
            this.startAnimation(r);
            let {onDragEnd: a} = this.getProps();
            a && tp.postRender( () => a(i, s))
        }
        cancel() {
            this.isDragging = !1;
            let {projection: t, animationState: e} = this.visualElement;
            t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            this.panSession = void 0;
            let {dragPropagation: i} = this.getProps();
            !i && this.openDragLock && (this.openDragLock(),
            this.openDragLock = null),
            e && e.setActive("whileDrag", !1)
        }
        updateAxis(t, e, i) {
            let {drag: s} = this.getProps();
            if (!i || !s1(t, s, this.currentDirection))
                return;
            let n = this.getAxisMotionValue(t)
              , r = this.originPoint[t] + i[t];
            this.constraints && this.constraints[t] && (r = function(t, {min: e, max: i}, s) {
                return void 0 !== e && t < e ? t = s ? C(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? C(i, t, s.max) : Math.min(t, i)),
                t
            }(r, this.constraints[t], this.elastic[t])),
            n.set(r)
        }
        resolveConstraints() {
            let {dragConstraints: t, dragElastic: e} = this.getProps()
              , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout
              , s = this.constraints;
            t && e4(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {top: e, left: i, bottom: s, right: n}) {
                return {
                    x: sK(t.x, i, n),
                    y: sK(t.y, e, s)
                }
            }(i.layoutBox, t) : this.constraints = !1,
            this.elastic = function(t=.35) {
                return !1 === t ? t = 0 : !0 === t && (t = .35),
                {
                    x: sZ(t, "left", "right"),
                    y: sZ(t, "top", "bottom")
                }
            }(e),
            s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && sU(t => {
                var e, s;
                let n;
                !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = (e = i.layoutBox[t],
                s = this.constraints[t],
                n = {},
                void 0 !== s.min && (n.min = s.min - e.min),
                void 0 !== s.max && (n.max = s.max - e.min),
                n))
            }
            )
        }
        resolveRefConstraints() {
            var t;
            let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
            if (!e || !e4(e))
                return !1;
            let s = e.current;
            ts(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
            let {projection: n} = this.visualElement;
            if (!n || !n.layout)
                return !1;
            let r = function(t, e, i) {
                let s = I(t, i)
                  , {scroll: n} = e;
                return n && (O(s.x, n.offset.x),
                O(s.y, n.offset.y)),
                s
            }(s, n.root, this.visualElement.getTransformPagePoint())
              , a = (t = n.layout.layoutBox,
            {
                x: sq(t.x, r.x),
                y: sq(t.y, r.y)
            });
            if (i) {
                let t = i(function({x: t, y: e}) {
                    return {
                        top: e.min,
                        right: t.max,
                        bottom: e.max,
                        left: t.min
                    }
                }(a));
                this.hasMutatedConstraints = !!t,
                t && (a = P(t))
            }
            return a
        }
        startAnimation(t) {
            let {drag: e, dragMomentum: i, dragElastic: s, dragTransition: n, dragSnapToOrigin: r, onDragTransitionEnd: a} = this.getProps()
              , o = this.constraints || {};
            return Promise.all(sU(a => {
                if (!s1(a, e, this.currentDirection))
                    return;
                let l = o && o[a] || {};
                r && (l = {
                    min: 0,
                    max: 0
                });
                let h = {
                    type: "inertia",
                    velocity: i ? t[a] : 0,
                    bounceStiffness: s ? 200 : 1e6,
                    bounceDamping: s ? 40 : 1e7,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...n,
                    ...l
                };
                return this.startAxisValueAnimation(a, h)
            }
            )).then(a)
        }
        startAxisValueAnimation(t, e) {
            let i = this.getAxisMotionValue(t);
            return is(this.visualElement, t),
            i.start(sv(t, i, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
            sU(t => this.getAxisMotionValue(t).stop())
        }
        pauseAnimation() {
            sU(t => this.getAxisMotionValue(t).animation?.pause())
        }
        getAnimationState(t) {
            return this.getAxisMotionValue(t).animation?.state
        }
        getAxisMotionValue(t) {
            let e = `_drag${t.toUpperCase()}`
              , i = this.visualElement.getProps();
            return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
        }
        snapToCursor(t) {
            sU(e => {
                let {drag: i} = this.getProps();
                if (!s1(e, i, this.currentDirection))
                    return;
                let {projection: s} = this.visualElement
                  , n = this.getAxisMotionValue(e);
                if (s && s.layout) {
                    let {min: i, max: r} = s.layout.layoutBox[e];
                    n.set(t[e] - C(i, r, .5))
                }
            }
            )
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current)
                return;
            let {drag: t, dragConstraints: e} = this.getProps()
              , {projection: i} = this.visualElement;
            if (!e4(e) || !i || !this.constraints)
                return;
            this.stopAnimation();
            let s = {
                x: 0,
                y: 0
            };
            sU(t => {
                let e = this.getAxisMotionValue(t);
                if (e && !1 !== this.constraints) {
                    var i, n;
                    let r, a, o, l = e.get();
                    s[t] = (i = {
                        min: l,
                        max: l
                    },
                    n = this.constraints[t],
                    r = .5,
                    a = sR(i),
                    (o = sR(n)) > a ? r = i1(n.min, n.max - a, i.min) : a > o && (r = i1(i.min, i.max - o, n.min)),
                    z(0, 1, r))
                }
            }
            );
            let {transformTemplate: n} = this.visualElement.getProps();
            this.visualElement.current.style.transform = n ? n({}, "") : "none",
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            sU(e => {
                if (!s1(e, t, null))
                    return;
                let i = this.getAxisMotionValue(e)
                  , {min: n, max: r} = this.constraints[e];
                i.set(C(n, r, s[e]))
            }
            )
        }
        addListeners() {
            if (!this.visualElement.current)
                return;
            sQ.set(this.visualElement, this);
            let t = sD(this.visualElement.current, "pointerdown", t => {
                let {drag: e, dragListener: i=!0} = this.getProps();
                e && i && this.start(t)
            }
            )
              , e = () => {
                let {dragConstraints: t} = this.getProps();
                e4(t) && t.current && (this.constraints = this.resolveRefConstraints())
            }
              , {projection: i} = this.visualElement
              , s = i.addEventListener("measure", e);
            i && !i.layout && (i.root && i.root.updateScroll(),
            i.updateLayout()),
            tp.read(e);
            let n = sE(window, "resize", () => this.scalePositionWithinConstraints())
              , r = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                this.isDragging && e && (sU(e => {
                    let i = this.getAxisMotionValue(e);
                    i && (this.originPoint[e] += t[e].translate,
                    i.set(i.get() + t[e].translate))
                }
                ),
                this.visualElement.render())
            }
            );
            return () => {
                n(),
                t(),
                s(),
                r && r()
            }
        }
        getProps() {
            let t = this.visualElement.getProps()
              , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: s=!1, dragConstraints: n=!1, dragElastic: r=.35, dragMomentum: a=!0} = t;
            return {
                ...t,
                drag: e,
                dragDirectionLock: i,
                dragPropagation: s,
                dragConstraints: n,
                dragElastic: r,
                dragMomentum: a
            }
        }
    }
    function s1(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t)
    }
    let s2 = t => (e, i) => {
        t && tp.postRender( () => t(e, i))
    }
    ;
    var s5 = a;
    let s3 = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    }
      , s4 = !1;
    class s6 extends s5.Component {
        componentDidMount() {
            let {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: s} = this.props
              , {projection: n} = t;
            n && (e.group && e.group.add(n),
            i && i.register && s && i.register(n),
            s4 && n.root.didUpdate(),
            n.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }
            ),
            n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove()
            })),
            s3.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
            let {layoutDependency: e, visualElement: i, drag: s, isPresent: n} = this.props
              , {projection: r} = i;
            return r && (r.isPresent = n,
            s4 = !0,
            s || t.layoutDependency !== e || void 0 === e || t.isPresent !== n ? r.willUpdate() : this.safeToRemove(),
            t.isPresent !== n && (n ? r.promote() : r.relegate() || tp.postRender( () => {
                let t = r.getStack();
                t && t.members.length || this.safeToRemove()
            }
            ))),
            null
        }
        componentDidUpdate() {
            let {projection: t} = this.props.visualElement;
            t && (t.root.didUpdate(),
            t7.postRender( () => {
                !t.currentAnimation && t.isLead() && this.safeToRemove()
            }
            ))
        }
        componentWillUnmount() {
            let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
              , {projection: s} = t;
            s4 = !0,
            s && (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s))
        }
        safeToRemove() {
            let {safeToRemove: t} = this.props;
            t && t()
        }
        render() {
            return null
        }
    }
    function s8(t) {
        let[e,i] = function(t=!0) {
            let e = (0,
            a.useContext)(eQ);
            if (null === e)
                return [!0, null];
            let {isPresent: i, onExitComplete: s, register: n} = e
              , r = (0,
            a.useId)();
            (0,
            a.useEffect)( () => {
                if (t)
                    return n(r)
            }
            , [t]);
            let o = (0,
            a.useCallback)( () => t && s && s(r), [r, s, t]);
            return !i && s ? [!1, o] : [!0]
        }()
          , s = (0,
        s5.useContext)(ez);
        return (0,
        r.jsx)(s6, {
            ...t,
            layoutGroup: s,
            switchLayoutGroup: (0,
            s5.useContext)(e8),
            isPresent: e,
            safeToRemove: i
        })
    }
    function s9(t) {
        return "object" == typeof t && null !== t
    }
    function s7(t) {
        return s9(t) && "ownerSVGElement"in t
    }
    let nt = (t, e) => t.depth - e.depth;
    class ne {
        constructor() {
            this.children = [],
            this.isDirty = !1
        }
        add(t) {
            t5(this.children, t),
            this.isDirty = !0
        }
        remove(t) {
            t3(this.children, t),
            this.isDirty = !0
        }
        forEach(t) {
            this.isDirty && this.children.sort(nt),
            this.isDirty = !1,
            this.children.forEach(t)
        }
    }
    let ni = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
      , ns = ni.length
      , nn = t => "string" == typeof t ? parseFloat(t) : t
      , nr = t => "number" == typeof t || K.test(t);
    function na(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
    }
    let no = nh(0, .5, iq)
      , nl = nh(.5, .95, th);
    function nh(t, e, i) {
        return s => s < t ? 0 : s > e ? 1 : i(i1(t, e, s))
    }
    function nc(t, e) {
        t.min = e.min,
        t.max = e.max
    }
    function nd(t, e) {
        nc(t.x, e.x),
        nc(t.y, e.y)
    }
    function nu(t, e) {
        t.translate = e.translate,
        t.scale = e.scale,
        t.originPoint = e.originPoint,
        t.origin = e.origin
    }
    function np(t, e, i, s, n) {
        return t -= e,
        t = s + 1 / i * (t - s),
        void 0 !== n && (t = s + 1 / n * (t - s)),
        t
    }
    function nm(t, e, [i,s,n], r, a) {
        !function(t, e=0, i=1, s=.5, n, r=t, a=t) {
            if (G.test(e) && (e = parseFloat(e),
            e = C(a.min, a.max, e / 100) - a.min),
            "number" != typeof e)
                return;
            let o = C(r.min, r.max, s);
            t === r && (o -= e),
            t.min = np(t.min, e, i, o, n),
            t.max = np(t.max, e, i, o, n)
        }(t, e[i], e[s], e[n], e.scale, r, a)
    }
    let nf = ["x", "scaleX", "originX"]
      , ng = ["y", "scaleY", "originY"];
    function nx(t, e, i, s) {
        nm(t.x, e, nf, i ? i.x : void 0, s ? s.x : void 0),
        nm(t.y, e, ng, i ? i.y : void 0, s ? s.y : void 0)
    }
    function nv(t) {
        return 0 === t.translate && 1 === t.scale
    }
    function ny(t) {
        return nv(t.x) && nv(t.y)
    }
    function nb(t, e) {
        return t.min === e.min && t.max === e.max
    }
    function nw(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
    }
    function nj(t, e) {
        return nw(t.x, e.x) && nw(t.y, e.y)
    }
    function nN(t) {
        return sR(t.x) / sR(t.y)
    }
    function nk(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
    }
    class nT {
        constructor() {
            this.members = []
        }
        add(t) {
            t5(this.members, t),
            t.scheduleRender()
        }
        remove(t) {
            if (t3(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead) {
                let t = this.members[this.members.length - 1];
                t && this.promote(t)
            }
        }
        relegate(t) {
            let e, i = this.members.findIndex(e => t === e);
            if (0 === i)
                return !1;
            for (let t = i; t >= 0; t--) {
                let i = this.members[t];
                if (!1 !== i.isPresent) {
                    e = i;
                    break
                }
            }
            return !!e && (this.promote(e),
            !0)
        }
        promote(t, e) {
            let i = this.lead;
            if (t !== i && (this.prevLead = i,
            this.lead = t,
            t.show(),
            i)) {
                i.instance && i.scheduleRender(),
                t.scheduleRender(),
                t.resumeFrom = i,
                e && (t.resumeFrom.preserveOpacity = !0),
                i.snapshot && (t.snapshot = i.snapshot,
                t.snapshot.latestValues = i.animationValues || i.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                let {crossfade: s} = t.options;
                !1 === s && i.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(t => {
                let {options: e, resumingFrom: i} = t;
                e.onExitComplete && e.onExitComplete(),
                i && i.options.onExitComplete && i.options.onExitComplete()
            }
            )
        }
        scheduleRender() {
            this.members.forEach(t => {
                t.instance && t.scheduleRender(!1)
            }
            )
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
    }
    let nM = ["", "X", "Y", "Z"]
      , nS = 0;
    function nP(t, e, i, s) {
        let {latestValues: n} = e;
        n[t] && (i[t] = n[t],
        e.setStaticValue(t, 0),
        s && (s[t] = 0))
    }
    function nC({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: s, resetTransform: n}) {
        return class {
            constructor(t={}, i=e?.()) {
                this.id = nS++,
                this.animationId = 0,
                this.animationCommitId = 0,
                this.children = new Set,
                this.options = {},
                this.isTreeAnimating = !1,
                this.isAnimationBlocked = !1,
                this.isLayoutDirty = !1,
                this.isProjectionDirty = !1,
                this.isSharedProjectionDirty = !1,
                this.isTransformDirty = !1,
                this.updateManuallyBlocked = !1,
                this.updateBlockedByResize = !1,
                this.isUpdating = !1,
                this.isSVG = !1,
                this.needsReset = !1,
                this.shouldResetTransform = !1,
                this.hasCheckedOptimisedAppear = !1,
                this.treeScale = {
                    x: 1,
                    y: 1
                },
                this.eventHandlers = new Map,
                this.hasTreeAnimated = !1,
                this.layoutVersion = 0,
                this.updateScheduled = !1,
                this.scheduleUpdate = () => this.update(),
                this.projectionUpdateScheduled = !1,
                this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1,
                    this.clearAllSnapshots())
                }
                ,
                this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1,
                    this.nodes.forEach(n_),
                    this.nodes.forEach(nF),
                    this.nodes.forEach(nI),
                    this.nodes.forEach(nV)
                }
                ,
                this.resolvedRelativeTargetAt = 0,
                this.linkedParentVersion = 0,
                this.hasProjected = !1,
                this.isVisible = !0,
                this.animationProgress = 0,
                this.sharedNodes = new Map,
                this.latestValues = t,
                this.root = i ? i.root || i : this,
                this.path = i ? [...i.path, i] : [],
                this.parent = i,
                this.depth = i ? i.depth + 1 : 0;
                for (let t = 0; t < this.path.length; t++)
                    this.path[t].shouldResetTransform = !0;
                this.root === this && (this.nodes = new ne)
            }
            addEventListener(t, e) {
                return this.eventHandlers.has(t) || this.eventHandlers.set(t, new t4),
                this.eventHandlers.get(t).add(e)
            }
            notifyListeners(t, ...e) {
                let i = this.eventHandlers.get(t);
                i && i.notify(...e)
            }
            hasListeners(t) {
                return this.eventHandlers.has(t)
            }
            mount(e) {
                if (this.instance)
                    return;
                this.isSVG = s7(e) && !(s7(e) && "svg" === e.tagName),
                this.instance = e;
                let {layoutId: i, layout: s, visualElement: n} = this.options;
                if (n && !n.current && n.mount(e),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                this.root.hasTreeAnimated && (s || i) && (this.isLayoutDirty = !0),
                t) {
                    let i, s = 0, n = () => this.root.updateBlockedByResize = !1;
                    tp.read( () => {
                        s = window.innerWidth
                    }
                    ),
                    t(e, () => {
                        let t = window.innerWidth;
                        if (t !== s) {
                            let e, r;
                            s = t,
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            e = t2.now(),
                            r = ({timestamp: t}) => {
                                let i = t - e;
                                i >= 250 && (tm(r),
                                n(i - 250))
                            }
                            ,
                            tp.setup(r, !0),
                            i = () => tm(r),
                            s3.hasAnimatedSinceResize && (s3.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(nB))
                        }
                    }
                    )
                }
                i && this.root.registerSharedNode(i, this),
                !1 !== this.options.animate && n && (i || s) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeLayoutChanged: i, layout: s}) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0,
                        this.relativeTarget = void 0;
                        return
                    }
                    let r = this.options.transition || n.getDefaultTransition() || nY
                      , {onLayoutAnimationStart: a, onLayoutAnimationComplete: o} = n.getProps()
                      , l = !this.targetLayout || !nj(this.targetLayout, s)
                      , h = !e && i;
                    if (this.options.layoutRoot || this.resumeFrom || h || e && (l || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                        this.resumingFrom.resumingFrom = void 0);
                        let e = {
                            ...ie(r, "layout"),
                            onPlay: a,
                            onComplete: o
                        };
                        (n.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                        e.type = !1),
                        this.startAnimation(e),
                        this.setAnimationOrigin(t, h)
                    } else
                        e || nB(this),
                        this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = s
                }
                )
            }
            unmount() {
                this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
                let t = this.getStack();
                t && t.remove(this),
                this.parent && this.parent.children.delete(this),
                this.instance = void 0,
                this.eventHandlers.clear(),
                tm(this.updateProjection)
            }
            blockUpdate() {
                this.updateManuallyBlocked = !0
            }
            unblockUpdate() {
                this.updateManuallyBlocked = !1
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize
            }
            isTreeAnimationBlocked() {
                return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
            }
            startUpdate() {
                !this.isUpdateBlocked() && (this.isUpdating = !0,
                this.nodes && this.nodes.forEach(nU),
                this.animationId++)
            }
            getTransformTemplate() {
                let {visualElement: t} = this.options;
                return t && t.getProps().transformTemplate
            }
            willUpdate(t=!0) {
                if (this.root.hasTreeAnimated = !0,
                this.root.isUpdateBlocked()) {
                    this.options.onExitComplete && this.options.onExitComplete();
                    return
                }
                if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                    if (e.hasCheckedOptimisedAppear = !0,
                    e.root === e)
                        return;
                    let {visualElement: i} = e.options;
                    if (!i)
                        return;
                    let s = i.props[e6];
                    if (window.MotionHasOptimisedAnimation(s, "transform")) {
                        let {layout: t, layoutId: i} = e.options;
                        window.MotionCancelOptimisedAnimation(s, "transform", tp, !(t || i))
                    }
                    let {parent: n} = e;
                    n && !n.hasCheckedOptimisedAppear && t(n)
                }(this),
                this.root.isUpdating || this.root.startUpdate(),
                this.isLayoutDirty)
                    return;
                this.isLayoutDirty = !0;
                for (let t = 0; t < this.path.length; t++) {
                    let e = this.path[t];
                    e.shouldResetTransform = !0,
                    e.updateScroll("snapshot"),
                    e.options.layoutRoot && e.willUpdate(!1)
                }
                let {layoutId: e, layout: i} = this.options;
                if (void 0 === e && !i)
                    return;
                let s = this.getTransformTemplate();
                this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0,
                this.updateSnapshot(),
                t && this.notifyListeners("willUpdate")
            }
            update() {
                if (this.updateScheduled = !1,
                this.isUpdateBlocked()) {
                    this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    this.nodes.forEach(nR);
                    return
                }
                if (this.animationId <= this.animationCommitId)
                    return void this.nodes.forEach(nL);
                this.animationCommitId = this.animationId,
                this.isUpdating ? (this.isUpdating = !1,
                this.nodes.forEach(nO),
                this.nodes.forEach(nA),
                this.nodes.forEach(nE)) : this.nodes.forEach(nL),
                this.clearAllSnapshots();
                let t = t2.now();
                tf.delta = z(0, 1e3 / 60, t - tf.timestamp),
                tf.timestamp = t,
                tf.isProcessing = !0,
                tg.update.process(tf),
                tg.preRender.process(tf),
                tg.render.process(tf),
                tf.isProcessing = !1
            }
            didUpdate() {
                this.updateScheduled || (this.updateScheduled = !0,
                t7.read(this.scheduleUpdate))
            }
            clearAllSnapshots() {
                this.nodes.forEach(nD),
                this.sharedNodes.forEach(nz)
            }
            scheduleUpdateProjection() {
                this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                tp.preRender(this.updateProjection, !1, !0))
            }
            scheduleCheckAfterUnmount() {
                tp.postRender( () => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                }
                )
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure(),
                !this.snapshot || sR(this.snapshot.measuredBox.x) || sR(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
            }
            updateLayout() {
                if (!this.instance || (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                    return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].updateScroll();
                let t = this.layout;
                this.layout = this.measure(!1),
                this.layoutVersion++,
                this.layoutCorrected = er(),
                this.isLayoutDirty = !1,
                this.projectionDelta = void 0,
                this.notifyListeners("measure", this.layout.layoutBox);
                let {visualElement: e} = this.options;
                e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
            }
            updateScroll(t="measure") {
                let e = !!(this.options.layoutScroll && this.instance);
                if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                e && this.instance) {
                    let e = s(this.instance);
                    this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: e,
                        offset: i(this.instance),
                        wasRoot: this.scroll ? this.scroll.isRoot : e
                    }
                }
            }
            resetTransform() {
                if (!n)
                    return;
                let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                  , e = this.projectionDelta && !ny(this.projectionDelta)
                  , i = this.getTransformTemplate()
                  , s = i ? i(this.latestValues, "") : void 0
                  , r = s !== this.prevTransformTemplateValue;
                t && this.instance && (e || _(this.latestValues) || r) && (n(this.instance, s),
                this.shouldResetTransform = !1,
                this.scheduleRender())
            }
            measure(t=!0) {
                var e;
                let i = this.measurePageBox()
                  , s = this.removeElementScroll(i);
                return t && (s = this.removeTransform(s)),
                nK((e = s).x),
                nK(e.y),
                {
                    animationId: this.root.animationId,
                    measuredBox: i,
                    layoutBox: s,
                    latestValues: {},
                    source: this.id
                }
            }
            measurePageBox() {
                let {visualElement: t} = this.options;
                if (!t)
                    return er();
                let e = t.measureViewportBox();
                if (!(this.scroll?.wasRoot || this.path.some(nZ))) {
                    let {scroll: t} = this.root;
                    t && (O(e.x, t.offset.x),
                    O(e.y, t.offset.y))
                }
                return e
            }
            removeElementScroll(t) {
                let e = er();
                if (nd(e, t),
                this.scroll?.wasRoot)
                    return e;
                for (let i = 0; i < this.path.length; i++) {
                    let s = this.path[i]
                      , {scroll: n, options: r} = s;
                    s !== this.root && n && r.layoutScroll && (n.wasRoot && nd(e, t),
                    O(e.x, n.offset.x),
                    O(e.y, n.offset.y))
                }
                return e
            }
            applyTransform(t, e=!1) {
                let i = er();
                nd(i, t);
                for (let t = 0; t < this.path.length; t++) {
                    let s = this.path[t];
                    !e && s.options.layoutScroll && s.scroll && s !== s.root && F(i, {
                        x: -s.scroll.offset.x,
                        y: -s.scroll.offset.y
                    }),
                    _(s.latestValues) && F(i, s.latestValues)
                }
                return _(this.latestValues) && F(i, this.latestValues),
                i
            }
            removeTransform(t) {
                let e = er();
                nd(e, t);
                for (let t = 0; t < this.path.length; t++) {
                    let i = this.path[t];
                    if (!i.instance || !_(i.latestValues))
                        continue;
                    E(i.latestValues) && i.updateSnapshot();
                    let s = er();
                    nd(s, i.measurePageBox()),
                    nx(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s)
                }
                return _(this.latestValues) && nx(e, this.latestValues),
                e
            }
            setTargetDelta(t) {
                this.targetDelta = t,
                this.root.scheduleUpdateProjection(),
                this.isProjectionDirty = !0
            }
            setOptions(t) {
                this.options = {
                    ...this.options,
                    ...t,
                    crossfade: void 0 === t.crossfade || t.crossfade
                }
            }
            clearMeasurements() {
                this.scroll = void 0,
                this.layout = void 0,
                this.snapshot = void 0,
                this.prevTransformTemplateValue = void 0,
                this.targetDelta = void 0,
                this.target = void 0,
                this.isLayoutDirty = !1
            }
            forceRelativeParentToResolveTarget() {
                this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tf.timestamp && this.relativeParent.resolveTargetDelta(!0)
            }
            resolveTargetDelta(t=!1) {
                let e = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty),
                this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty),
                this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
                let i = !!this.resumingFrom || this !== e;
                if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                    return;
                let {layout: s, layoutId: n} = this.options;
                if (!this.layout || !(s || n))
                    return;
                this.resolvedRelativeTargetAt = tf.timestamp;
                let r = this.getClosestProjectingParent();
                if (r && this.linkedParentVersion !== r.layoutVersion && !r.options.layoutRoot && this.removeRelativeTarget(),
                this.targetDelta || this.relativeTarget || (r && r.layout ? this.createRelativeTarget(r, this.layout.layoutBox, r.layout.layoutBox) : this.removeRelativeTarget()),
                this.relativeTarget || this.targetDelta) {
                    if (this.target || (this.target = er(),
                    this.targetWithTransforms = er()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                        var a, o, l;
                        this.forceRelativeParentToResolveTarget(),
                        a = this.target,
                        o = this.relativeTarget,
                        l = this.relativeParent.target,
                        sB(a.x, o.x, l.x),
                        sB(a.y, o.y, l.y)
                    } else
                        this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nd(this.target, this.layout.layoutBox),
                        L(this.target, this.targetDelta)) : nd(this.target, this.layout.layoutBox);
                    this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
                    r && !!r.resumingFrom == !!this.resumingFrom && !r.options.layoutScroll && r.target && 1 !== this.animationProgress ? this.createRelativeTarget(r, this.target, r.target) : this.relativeParent = this.relativeTarget = void 0)
                }
            }
            getClosestProjectingParent() {
                if (!(!this.parent || E(this.parent.latestValues) || V(this.parent.latestValues)))
                    if (this.parent.isProjecting())
                        return this.parent;
                    else
                        return this.parent.getClosestProjectingParent()
            }
            isProjecting() {
                return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
            }
            createRelativeTarget(t, e, i) {
                this.relativeParent = t,
                this.linkedParentVersion = t.layoutVersion,
                this.forceRelativeParentToResolveTarget(),
                this.relativeTarget = er(),
                this.relativeTargetOrigin = er(),
                sI(this.relativeTargetOrigin, e, i),
                nd(this.relativeTarget, this.relativeTargetOrigin)
            }
            removeRelativeTarget() {
                this.relativeParent = this.relativeTarget = void 0
            }
            calcProjection() {
                let t = this.getLead()
                  , e = !!this.resumingFrom || this !== t
                  , i = !0;
                if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i = !1),
                e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1),
                this.resolvedRelativeTargetAt === tf.timestamp && (i = !1),
                i)
                    return;
                let {layout: s, layoutId: n} = this.options;
                if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(s || n))
                    return;
                nd(this.layoutCorrected, this.layout.layoutBox);
                let r = this.treeScale.x
                  , a = this.treeScale.y;
                !function(t, e, i, s=!1) {
                    let n, r, a = i.length;
                    if (a) {
                        e.x = e.y = 1;
                        for (let o = 0; o < a; o++) {
                            r = (n = i[o]).projectionDelta;
                            let {visualElement: a} = n.options;
                            (!a || !a.props.style || "contents" !== a.props.style.display) && (s && n.options.layoutScroll && n.scroll && n !== n.root && F(t, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }),
                            r && (e.x *= r.x.scale,
                            e.y *= r.y.scale,
                            L(t, r)),
                            s && _(n.latestValues) && F(t, n.latestValues))
                        }
                        e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1),
                        e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                    }
                }(this.layoutCorrected, this.treeScale, this.path, e),
                t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox,
                t.targetWithTransforms = er());
                let {target: o} = t;
                if (!o) {
                    this.prevProjectionDelta && (this.createProjectionDeltas(),
                    this.scheduleRender());
                    return
                }
                this.projectionDelta && this.prevProjectionDelta ? (nu(this.prevProjectionDelta.x, this.projectionDelta.x),
                nu(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                sO(this.projectionDelta, this.layoutCorrected, o, this.latestValues),
                this.treeScale.x === r && this.treeScale.y === a && nk(this.projectionDelta.x, this.prevProjectionDelta.x) && nk(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", o))
            }
            hide() {
                this.isVisible = !1
            }
            show() {
                this.isVisible = !0
            }
            scheduleRender(t=!0) {
                if (this.options.visualElement?.scheduleRender(),
                t) {
                    let t = this.getStack();
                    t && t.scheduleRender()
                }
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
            createProjectionDeltas() {
                this.prevProjectionDelta = es(),
                this.projectionDelta = es(),
                this.projectionDeltaWithTransform = es()
            }
            setAnimationOrigin(t, e=!1) {
                let i, s = this.snapshot, n = s ? s.latestValues : {}, r = {
                    ...this.latestValues
                }, a = es();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                this.attemptToResolveRelativeTarget = !e;
                let o = er()
                  , l = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0)
                  , h = this.getStack()
                  , c = !h || h.members.length <= 1
                  , d = !!(l && !c && !0 === this.options.crossfade && !this.path.some(nH));
                this.animationProgress = 0,
                this.mixTargetDelta = e => {
                    let s = e / 1e3;
                    if (n$(a.x, t.x, s),
                    n$(a.y, t.y, s),
                    this.setTargetDelta(a),
                    this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                        var h, u, p, m, f, g;
                        sI(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        p = this.relativeTarget,
                        m = this.relativeTargetOrigin,
                        f = o,
                        g = s,
                        nW(p.x, m.x, f.x, g),
                        nW(p.y, m.y, f.y, g),
                        i && (h = this.relativeTarget,
                        u = i,
                        nb(h.x, u.x) && nb(h.y, u.y)) && (this.isProjectionDirty = !1),
                        i || (i = er()),
                        nd(i, this.relativeTarget)
                    }
                    l && (this.animationValues = r,
                    function(t, e, i, s, n, r) {
                        n ? (t.opacity = C(0, i.opacity ?? 1, no(s)),
                        t.opacityExit = C(e.opacity ?? 1, 0, nl(s))) : r && (t.opacity = C(e.opacity ?? 1, i.opacity ?? 1, s));
                        for (let n = 0; n < ns; n++) {
                            let r = `border${ni[n]}Radius`
                              , a = na(e, r)
                              , o = na(i, r);
                            (void 0 !== a || void 0 !== o) && (a || (a = 0),
                            o || (o = 0),
                            0 === a || 0 === o || nr(a) === nr(o) ? (t[r] = Math.max(C(nn(a), nn(o), s), 0),
                            (G.test(o) || G.test(a)) && (t[r] += "%")) : t[r] = o)
                        }
                        (e.rotate || i.rotate) && (t.rotate = C(e.rotate || 0, i.rotate || 0, s))
                    }(r, n, this.latestValues, s, d, c)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    this.animationProgress = s
                }
                ,
                this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
            }
            startAnimation(t) {
                this.notifyListeners("animationStart"),
                this.currentAnimation?.stop(),
                this.resumingFrom?.currentAnimation?.stop(),
                this.pendingAnimation && (tm(this.pendingAnimation),
                this.pendingAnimation = void 0),
                this.pendingAnimation = tp.update( () => {
                    var e, i, s;
                    let n;
                    s3.hasAnimatedSinceResize = !0,
                    ih.layout++,
                    this.motionValue || (this.motionValue = t8(0)),
                    this.currentAnimation = (e = this.motionValue,
                    i = [0, 1e3],
                    s = {
                        ...t,
                        velocity: 0,
                        isSync: !0,
                        onUpdate: e => {
                            this.mixTargetDelta(e),
                            t.onUpdate && t.onUpdate(e)
                        }
                        ,
                        onStop: () => {
                            ih.layout--
                        }
                        ,
                        onComplete: () => {
                            ih.layout--,
                            t.onComplete && t.onComplete(),
                            this.completeAnimation()
                        }
                    },
                    (n = t0(e) ? e : t8(e)).start(sv("", n, i, s)),
                    n.animation),
                    this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                    this.pendingAnimation = void 0
                }
                )
            }
            completeAnimation() {
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                this.resumingFrom.preserveOpacity = void 0);
                let t = this.getStack();
                t && t.exitAnimationComplete(),
                this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                this.notifyListeners("animationComplete")
            }
            finishAnimation() {
                this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                this.currentAnimation.stop()),
                this.completeAnimation()
            }
            applyTransformsToTarget() {
                let t = this.getLead()
                  , {targetWithTransforms: e, target: i, layout: s, latestValues: n} = t;
                if (e && i && s) {
                    if (this !== t && this.layout && s && nq(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                        i = this.target || er();
                        let e = sR(this.layout.layoutBox.x);
                        i.x.min = t.target.x.min,
                        i.x.max = i.x.min + e;
                        let s = sR(this.layout.layoutBox.y);
                        i.y.min = t.target.y.min,
                        i.y.max = i.y.min + s
                    }
                    nd(e, i),
                    F(e, n),
                    sO(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                }
            }
            registerSharedNode(t, e) {
                this.sharedNodes.has(t) || this.sharedNodes.set(t, new nT),
                this.sharedNodes.get(t).add(e);
                let i = e.options.initialPromotionConfig;
                e.promote({
                    transition: i ? i.transition : void 0,
                    preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                })
            }
            isLead() {
                let t = this.getStack();
                return !t || t.lead === this
            }
            getLead() {
                let {layoutId: t} = this.options;
                return t && this.getStack()?.lead || this
            }
            getPrevLead() {
                let {layoutId: t} = this.options;
                return t ? this.getStack()?.prevLead : void 0
            }
            getStack() {
                let {layoutId: t} = this.options;
                if (t)
                    return this.root.sharedNodes.get(t)
            }
            promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                let s = this.getStack();
                s && s.promote(this, i),
                t && (this.projectionDelta = void 0,
                this.needsReset = !0),
                e && this.setOptions({
                    transition: e
                })
            }
            relegate() {
                let t = this.getStack();
                return !!t && t.relegate(this)
            }
            resetSkewAndRotation() {
                let {visualElement: t} = this.options;
                if (!t)
                    return;
                let e = !1
                  , {latestValues: i} = t;
                if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0),
                !e)
                    return;
                let s = {};
                i.z && nP("z", t, s, this.animationValues);
                for (let e = 0; e < nM.length; e++)
                    nP(`rotate${nM[e]}`, t, s, this.animationValues),
                    nP(`skew${nM[e]}`, t, s, this.animationValues);
                for (let e in t.render(),
                s)
                    t.setStaticValue(e, s[e]),
                    this.animationValues && (this.animationValues[e] = s[e]);
                t.scheduleRender()
            }
            applyProjectionStyles(t, e) {
                if (!this.instance || this.isSVG)
                    return;
                if (!this.isVisible) {
                    t.visibility = "hidden";
                    return
                }
                let i = this.getTransformTemplate();
                if (this.needsReset) {
                    this.needsReset = !1,
                    t.visibility = "",
                    t.opacity = "",
                    t.pointerEvents = e0(e?.pointerEvents) || "",
                    t.transform = i ? i(this.latestValues, "") : "none";
                    return
                }
                let s = this.getLead();
                if (!this.projectionDelta || !this.layout || !s.target) {
                    this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                    t.pointerEvents = e0(e?.pointerEvents) || ""),
                    this.hasProjected && !_(this.latestValues) && (t.transform = i ? i({}, "") : "none",
                    this.hasProjected = !1);
                    return
                }
                t.visibility = "";
                let n = s.animationValues || s.latestValues;
                this.applyTransformsToTarget();
                let r = function(t, e, i) {
                    let s = ""
                      , n = t.x.translate / e.x
                      , r = t.y.translate / e.y
                      , a = i?.z || 0;
                    if ((n || r || a) && (s = `translate3d(${n}px, ${r}px, ${a}px) `),
                    (1 !== e.x || 1 !== e.y) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                    i) {
                        let {transformPerspective: t, rotate: e, rotateX: n, rotateY: r, skewX: a, skewY: o} = i;
                        t && (s = `perspective(${t}px) ${s}`),
                        e && (s += `rotate(${e}deg) `),
                        n && (s += `rotateX(${n}deg) `),
                        r && (s += `rotateY(${r}deg) `),
                        a && (s += `skewX(${a}deg) `),
                        o && (s += `skewY(${o}deg) `)
                    }
                    let o = t.x.scale * e.x
                      , l = t.y.scale * e.y;
                    return (1 !== o || 1 !== l) && (s += `scale(${o}, ${l})`),
                    s || "none"
                }(this.projectionDeltaWithTransform, this.treeScale, n);
                i && (r = i(n, r)),
                t.transform = r;
                let {x: a, y: o} = this.projectionDelta;
                for (let e in t.transformOrigin = `${100 * a.origin}% ${100 * o.origin}% 0`,
                s.animationValues ? t.opacity = s === this ? n.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : n.opacityExit : t.opacity = s === this ? void 0 !== n.opacity ? n.opacity : "" : void 0 !== n.opacityExit ? n.opacityExit : 0,
                eP) {
                    if (void 0 === n[e])
                        continue;
                    let {correct: i, applyTo: a, isCSSVariable: o} = eP[e]
                      , l = "none" === r ? n[e] : i(n[e], s);
                    if (a) {
                        let e = a.length;
                        for (let i = 0; i < e; i++)
                            t[a[i]] = l
                    } else
                        o ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
                }
                this.options.layoutId && (t.pointerEvents = s === this ? e0(e?.pointerEvents) || "" : "none")
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0
            }
            resetTree() {
                this.root.nodes.forEach(t => t.currentAnimation?.stop()),
                this.root.nodes.forEach(nR),
                this.root.sharedNodes.clear()
            }
        }
    }
    function nA(t) {
        t.updateLayout()
    }
    function nE(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
            let {layoutBox: i, measuredBox: s} = t.layout
              , {animationType: n} = t.options
              , r = e.source !== t.layout.source;
            "size" === n ? sU(t => {
                let s = r ? e.measuredBox[t] : e.layoutBox[t]
                  , n = sR(s);
                s.min = i[t].min,
                s.max = s.min + n
            }
            ) : nq(n, e.layoutBox, i) && sU(s => {
                let n = r ? e.measuredBox[s] : e.layoutBox[s]
                  , a = sR(i[s]);
                n.max = n.min + a,
                t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                t.relativeTarget[s].max = t.relativeTarget[s].min + a)
            }
            );
            let a = es();
            sO(a, i, e.layoutBox);
            let o = es();
            r ? sO(o, t.applyTransform(s, !0), e.measuredBox) : sO(o, i, e.layoutBox);
            let l = !ny(a)
              , h = !1;
            if (!t.resumeFrom) {
                let s = t.getClosestProjectingParent();
                if (s && !s.resumeFrom) {
                    let {snapshot: n, layout: r} = s;
                    if (n && r) {
                        let a = er();
                        sI(a, e.layoutBox, n.layoutBox);
                        let o = er();
                        sI(o, i, r.layoutBox),
                        nj(a, o) || (h = !0),
                        s.options.layoutRoot && (t.relativeTarget = o,
                        t.relativeTargetOrigin = a,
                        t.relativeParent = s)
                    }
                }
            }
            t.notifyListeners("didUpdate", {
                layout: i,
                snapshot: e,
                delta: o,
                layoutDelta: a,
                hasLayoutChanged: l,
                hasRelativeLayoutChanged: h
            })
        } else if (t.isLead()) {
            let {onExitComplete: e} = t.options;
            e && e()
        }
        t.options.transition = void 0
    }
    function n_(t) {
        t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
        t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
        t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
    }
    function nV(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
    }
    function nD(t) {
        t.clearSnapshot()
    }
    function nR(t) {
        t.clearMeasurements()
    }
    function nL(t) {
        t.isLayoutDirty = !1
    }
    function nO(t) {
        let {visualElement: e} = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
        t.resetTransform()
    }
    function nB(t) {
        t.finishAnimation(),
        t.targetDelta = t.relativeTarget = t.target = void 0,
        t.isProjectionDirty = !0
    }
    function nF(t) {
        t.resolveTargetDelta()
    }
    function nI(t) {
        t.calcProjection()
    }
    function nU(t) {
        t.resetSkewAndRotation()
    }
    function nz(t) {
        t.removeLeadSnapshot()
    }
    function n$(t, e, i) {
        t.translate = C(e.translate, 0, i),
        t.scale = C(e.scale, 1, i),
        t.origin = e.origin,
        t.originPoint = e.originPoint
    }
    function nW(t, e, i, s) {
        t.min = C(e.min, i.min, s),
        t.max = C(e.max, i.max, s)
    }
    function nH(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
    }
    let nY = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    }
      , nX = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
      , nG = nX("applewebkit/") && !nX("chrome/") ? Math.round : th;
    function nK(t) {
        t.min = nG(t.min),
        t.max = nG(t.max)
    }
    function nq(t, e, i) {
        return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(nN(e) - nN(i)))
    }
    function nZ(t) {
        return t !== t.root && t.scroll?.wasRoot
    }
    let nJ = nC({
        attachResizeListener: (t, e) => sE(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    })
      , nQ = {
        current: void 0
    }
      , n0 = nC({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!nQ.current) {
                let t = new nJ({});
                t.mount(window),
                t.setOptions({
                    layoutScroll: !0
                }),
                nQ.current = t
            }
            return nQ.current
        }
        ,
        resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
        }
        ,
        checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
    });
    function n1(t, e) {
        let i = function(t, e, i) {
            if (t instanceof EventTarget)
                return [t];
            if ("string" == typeof t) {
                let e = document
                  , i = (void 0) ?? e.querySelectorAll(t);
                return i ? Array.from(i) : []
            }
            return Array.from(t)
        }(t)
          , s = new AbortController;
        return [i, {
            passive: !0,
            ...e,
            signal: s.signal
        }, () => s.abort()]
    }
    function n2(t) {
        return !("touch" === t.pointerType || sA.x || sA.y)
    }
    function n5(t, e, i) {
        let {props: s} = t;
        t.animationState && s.whileHover && t.animationState.setActive("whileHover", "Start" === i);
        let n = s["onHover" + i];
        n && tp.postRender( () => n(e, sV(e)))
    }
    let n3 = (t, e) => !!e && (t === e || n3(t, e.parentElement))
      , n4 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
      , n6 = new WeakSet;
    function n8(t) {
        return e => {
            "Enter" === e.key && t(e)
        }
    }
    function n9(t, e) {
        t.dispatchEvent(new PointerEvent("pointer" + e,{
            isPrimary: !0,
            bubbles: !0
        }))
    }
    function n7(t) {
        return s_(t) && !(sA.x || sA.y)
    }
    function rt(t, e, i) {
        let {props: s} = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
            return;
        t.animationState && s.whileTap && t.animationState.setActive("whileTap", "Start" === i);
        let n = s["onTap" + ("End" === i ? "" : i)];
        n && tp.postRender( () => n(e, sV(e)))
    }
    let re = new WeakMap
      , ri = new WeakMap
      , rs = t => {
        let e = re.get(t.target);
        e && e(t)
    }
      , rn = t => {
        t.forEach(rs)
    }
      , rr = {
        some: 0,
        all: 1
    }
      , ra = function(t, e) {
        if ("undefined" == typeof Proxy)
            return e7;
        let i = new Map
          , s = (i, s) => e7(i, s, t, e);
        return new Proxy( (t, e) => s(t, e),{
            get: (n, r) => "create" === r ? s : (i.has(r) || i.set(r, e7(r, void 0, t, e)),
            i.get(r))
        })
    }({
        animation: {
            Feature: class extends sP {
                constructor(t) {
                    super(t),
                    t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map( ({animation: e, options: i}) => (function(t, e, i={}) {
                            let s;
                            if (t.notify("AnimationStart", e),
                            Array.isArray(e))
                                s = Promise.all(e.map(e => sw(t, e, i)));
                            else if ("string" == typeof e)
                                s = sw(t, e, i);
                            else {
                                let n = "function" == typeof e ? it(t, e, i.custom) : e;
                                s = Promise.all(sy(t, n, i))
                            }
                            return s.then( () => {
                                t.notify("AnimationComplete", e)
                            }
                            )
                        }
                        )(t, e, i)))
                          , i = sS()
                          , s = !0
                          , n = e => (i, s) => {
                            let n = it(t, s, "exit" === e ? t.presenceContext?.custom : void 0);
                            if (n) {
                                let {transition: t, transitionEnd: e, ...s} = n;
                                i = {
                                    ...i,
                                    ...s,
                                    ...e
                                }
                            }
                            return i
                        }
                        ;
                        function r(r) {
                            let {props: a} = t
                              , o = function t(e) {
                                if (!e)
                                    return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial),
                                    i
                                }
                                let i = {};
                                for (let t = 0; t < sN; t++) {
                                    let s = ep[t]
                                      , n = e.props[s];
                                    (ed(n) || !1 === n) && (i[s] = n)
                                }
                                return i
                            }(t.parent) || {}
                              , l = []
                              , h = new Set
                              , c = {}
                              , d = 1 / 0;
                            for (let e = 0; e < sT; e++) {
                                var u, p;
                                let m = sk[e]
                                  , f = i[m]
                                  , g = void 0 !== a[m] ? a[m] : o[m]
                                  , x = ed(g)
                                  , v = m === r ? f.isActive : null;
                                !1 === v && (d = e);
                                let y = g === o[m] && g !== a[m] && x;
                                if (y && s && t.manuallyAnimateOnMount && (y = !1),
                                f.protectedKeys = {
                                    ...c
                                },
                                !f.isActive && null === v || !g && !f.prevProp || ec(g) || "boolean" == typeof g)
                                    continue;
                                let b = (u = f.prevProp,
                                "string" == typeof (p = g) ? p !== u : !!Array.isArray(p) && !sj(p, u))
                                  , w = b || m === r && f.isActive && !y && x || e > d && x
                                  , j = !1
                                  , N = Array.isArray(g) ? g : [g]
                                  , k = N.reduce(n(m), {});
                                !1 === v && (k = {});
                                let {prevResolvedValues: T={}} = f
                                  , M = {
                                    ...T,
                                    ...k
                                }
                                  , S = e => {
                                    w = !0,
                                    h.has(e) && (j = !0,
                                    h.delete(e)),
                                    f.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                }
                                ;
                                for (let t in M) {
                                    let e = k[t]
                                      , i = T[t];
                                    if (!c.hasOwnProperty(t))
                                        (ii(e) && ii(i) ? sj(e, i) : e === i) ? void 0 !== e && h.has(t) ? S(t) : f.protectedKeys[t] = !0 : null != e ? S(t) : h.add(t)
                                }
                                f.prevProp = g,
                                f.prevResolvedValues = k,
                                f.isActive && (c = {
                                    ...c,
                                    ...k
                                }),
                                s && t.blockInitialAnimation && (w = !1);
                                let P = y && b
                                  , C = !P || j;
                                w && C && l.push(...N.map(e => {
                                    let i = {
                                        type: m
                                    };
                                    if ("string" == typeof e && s && !P && t.manuallyAnimateOnMount && t.parent) {
                                        let {parent: s} = t
                                          , n = it(s, e);
                                        if (s.enteringChildren && n) {
                                            let {delayChildren: e} = n.transition || {};
                                            i.delay = sb(s.enteringChildren, t, e)
                                        }
                                    }
                                    return {
                                        animation: e,
                                        options: i
                                    }
                                }
                                ))
                            }
                            if (h.size) {
                                let e = {};
                                if ("boolean" != typeof a.initial) {
                                    let i = it(t, Array.isArray(a.initial) ? a.initial[0] : a.initial);
                                    i && i.transition && (e.transition = i.transition)
                                }
                                h.forEach(i => {
                                    let s = t.getBaseTarget(i)
                                      , n = t.getValue(i);
                                    n && (n.liveStyle = !0),
                                    e[i] = s ?? null
                                }
                                ),
                                l.push({
                                    animation: e
                                })
                            }
                            let m = !!l.length;
                            return s && (!1 === a.initial || a.initial === a.animate) && !t.manuallyAnimateOnMount && (m = !1),
                            s = !1,
                            m ? e(l) : Promise.resolve()
                        }
                        return {
                            animateChanges: r,
                            setActive: function(e, s) {
                                if (i[e].isActive === s)
                                    return Promise.resolve();
                                t.variantChildren?.forEach(t => t.animationState?.setActive(e, s)),
                                i[e].isActive = s;
                                let n = r(e);
                                for (let t in i)
                                    i[t].protectedKeys = {};
                                return n
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = sS()
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {animate: t} = this.node.getProps();
                    ec(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {animate: t} = this.node.getProps()
                      , {animate: e} = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    this.node.animationState.reset(),
                    this.unmountControls?.()
                }
            }
        },
        exit: {
            Feature: class extends sP {
                constructor() {
                    super(...arguments),
                    this.id = sC++
                }
                update() {
                    if (!this.node.presenceContext)
                        return;
                    let {isPresent: t, onExitComplete: e} = this.node.presenceContext
                      , {isPresent: i} = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i)
                        return;
                    let s = this.node.animationState.setActive("exit", !t);
                    e && !t && s.then( () => {
                        e(this.id)
                    }
                    )
                }
                mount() {
                    let {register: t, onExitComplete: e} = this.node.presenceContext || {};
                    e && e(this.id),
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
        },
        inView: {
            Feature: class extends sP {
                constructor() {
                    super(...arguments),
                    this.hasEnteredView = !1,
                    this.isInView = !1
                }
                startObserver() {
                    var t;
                    let e;
                    this.unmount();
                    let {viewport: i={}} = this.node.getProps()
                      , {root: s, margin: n, amount: r="some", once: a} = i
                      , o = {
                        root: s ? s.current : void 0,
                        rootMargin: n,
                        threshold: "number" == typeof r ? r : rr[r]
                    }
                      , l = t => {
                        let {isIntersecting: e} = t;
                        if (this.isInView === e || (this.isInView = e,
                        a && !e && this.hasEnteredView))
                            return;
                        e && (this.hasEnteredView = !0),
                        this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {onViewportEnter: i, onViewportLeave: s} = this.node.getProps()
                          , n = e ? i : s;
                        n && n(t)
                    }
                    ;
                    return t = this.node.current,
                    e = function({root: t, ...e}) {
                        let i = t || document;
                        ri.has(i) || ri.set(i, {});
                        let s = ri.get(i)
                          , n = JSON.stringify(e);
                        return s[n] || (s[n] = new IntersectionObserver(rn,{
                            root: t,
                            ...e
                        })),
                        s[n]
                    }(o),
                    re.set(t, l),
                    e.observe(t),
                    () => {
                        re.delete(t),
                        e.unobserve(t)
                    }
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver)
                        return;
                    let {props: t, prevProps: e} = this.node;
                    ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
        },
        tap: {
            Feature: class extends sP {
                mount() {
                    let {current: t} = this.node;
                    t && (this.unmount = function(t, e, i={}) {
                        let[s,n,r] = n1(t, i)
                          , a = t => {
                            let s = t.currentTarget;
                            if (!n7(t))
                                return;
                            n6.add(s);
                            let r = e(s, t)
                              , a = (t, e) => {
                                window.removeEventListener("pointerup", o),
                                window.removeEventListener("pointercancel", l),
                                n6.has(s) && n6.delete(s),
                                n7(t) && "function" == typeof r && r(t, {
                                    success: e
                                })
                            }
                              , o = t => {
                                a(t, s === window || s === document || i.useGlobalTarget || n3(s, t.target))
                            }
                              , l = t => {
                                a(t, !1)
                            }
                            ;
                            window.addEventListener("pointerup", o, n),
                            window.addEventListener("pointercancel", l, n)
                        }
                        ;
                        return s.forEach(t => {
                            (i.useGlobalTarget ? window : t).addEventListener("pointerdown", a, n),
                            s9(t) && "offsetHeight"in t && (t.addEventListener("focus", t => ( (t, e) => {
                                let i = t.currentTarget;
                                if (!i)
                                    return;
                                let s = n8( () => {
                                    if (n6.has(i))
                                        return;
                                    n9(i, "down");
                                    let t = n8( () => {
                                        n9(i, "up")
                                    }
                                    );
                                    i.addEventListener("keyup", t, e),
                                    i.addEventListener("blur", () => n9(i, "cancel"), e)
                                }
                                );
                                i.addEventListener("keydown", s, e),
                                i.addEventListener("blur", () => i.removeEventListener("keydown", s), e)
                            }
                            )(t, n)),
                            n4.has(t.tagName) || -1 !== t.tabIndex || t.hasAttribute("tabindex") || (t.tabIndex = 0))
                        }
                        ),
                        r
                    }(t, (t, e) => (rt(this.node, e, "Start"),
                    (t, {success: e}) => rt(this.node, t, e ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
        },
        focus: {
            Feature: class extends sP {
                constructor() {
                    super(...arguments),
                    this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                    this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                    this.isActive = !1)
                }
                mount() {
                    this.unmount = io(sE(this.node.current, "focus", () => this.onFocus()), sE(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
        },
        hover: {
            Feature: class extends sP {
                mount() {
                    let {current: t} = this.node;
                    t && (this.unmount = function(t, e, i={}) {
                        let[s,n,r] = n1(t, i)
                          , a = t => {
                            if (!n2(t))
                                return;
                            let {target: i} = t
                              , s = e(i, t);
                            if ("function" != typeof s || !i)
                                return;
                            let r = t => {
                                n2(t) && (s(t),
                                i.removeEventListener("pointerleave", r))
                            }
                            ;
                            i.addEventListener("pointerleave", r, n)
                        }
                        ;
                        return s.forEach(t => {
                            t.addEventListener("pointerenter", a, n)
                        }
                        ),
                        r
                    }(t, (t, e) => (n5(this.node, e, "Start"),
                    t => n5(this.node, t, "End"))))
                }
                unmount() {}
            }
        },
        pan: {
            Feature: class extends sP {
                constructor() {
                    super(...arguments),
                    this.removePointerDownListener = th
                }
                onPointerDown(t) {
                    this.session = new sW(t,this.createPanHandlers(),{
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: sz(this.node)
                    })
                }
                createPanHandlers() {
                    let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: s} = this.node.getProps();
                    return {
                        onSessionStart: s2(t),
                        onStart: s2(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session,
                            s && tp.postRender( () => s(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = sD(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(),
                    this.session && this.session.end()
                }
            }
        },
        drag: {
            Feature: class extends sP {
                constructor(t) {
                    super(t),
                    this.removeGroupControls = th,
                    this.removeListeners = th,
                    this.controls = new s0(t)
                }
                mount() {
                    let {dragControls: t} = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)),
                    this.removeListeners = this.controls.addListeners() || th
                }
                unmount() {
                    this.removeGroupControls(),
                    this.removeListeners()
                }
            }
            ,
            ProjectionNode: n0,
            MeasureLayout: s8
        },
        layout: {
            ProjectionNode: n0,
            MeasureLayout: s8
        }
    }, (t, e) => eU(t) ? new eF(e) : new eE(e,{
        allowProjection: t !== a.Fragment
    }))
      , ro = [{
        time: "11:00",
        title: "Tập trung tại Cland & xuất phát",
        iconClass: "fas fa-bus",
        color: "cyan"
    }, {
        time: "13:30",
        title: "Check in villa",
        iconClass: "fas fa-hotel",
        color: "purple"
    }, {
        time: "14:45",
        title: "Đổi vé checkin sự kiện",
        iconClass: "fas fa-ticket-alt",
        color: "yellow"
    }, {
        time: "15:00 - 17:00",
        title: "Team-tertaining",
        description: "Games & team building",
        iconClass: "fas fa-users",
        color: "pink"
    }, {
        time: "18:00",
        title: 'Gala "Owniverse"',
        iconClass: "fas fa-star",
        color: "red",
        highlight: !0
    }, {
        time: "21:00",
        title: "Onw-night share",
        description: "Cocktail session & Founders' notes",
        iconClass: "fas fa-glass-cheers",
        color: "blue"
    }];
    function rl() {
        return (0,
        r.jsx)("section", {
            id: "schedule",
            className: "py-12 md:py-20 relative overflow-hidden scroll-mt-24",
            children: (0,
            r.jsxs)("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [(0,
                r.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                    children: [(0,
                    r.jsx)("div", {
                        className: "lg:col-span-4",
                        children: (0,
                        r.jsx)("div", {
                            className: "sticky top-24 flex items-center gap-6",
                            children: (0,
                            r.jsx)("h2", {
                                className: "text-3xl md:text-5xl font-display font-bold uppercase tracking-wide text-white border-l-4 border-cosmic-cyan pl-6",
                                children: "Lịch trình"
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "lg:col-span-8",
                        children: (0,
                        r.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            r.jsx)("div", {
                                className: "absolute left-[42px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cosmic-cyan via-cosmic-purple to-transparent md:-translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                            }), (0,
                            r.jsx)("div", {
                                className: "space-y-12",
                                children: ro.map( (t, e) => (0,
                                r.jsxs)(ra.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 50
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: !0,
                                        margin: "-50px"
                                    },
                                    transition: {
                                        duration: .6,
                                        delay: .1 * e
                                    },
                                    className: `relative flex flex-col md:flex-row items-center gap-8 ${e % 2 == 0 ? "md:flex-row-reverse" : ""}`,
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "absolute left-8 md:left-1/2 w-6 h-6 bg-[#050510] border-4 rounded-full z-20 md:-translate-x-1/2 translate-y-1/2 md:translate-y-0 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_currentColor]",
                                        style: {
                                            borderColor: "cyan" === t.color ? "#06b6d4" : "purple" === t.color ? "#8b5cf6" : "pink" === t.color ? "#ec4899" : "yellow" === t.color ? "#eab308" : "red" === t.color ? "#ef4444" : "#9ca3af"
                                        },
                                        children: (0,
                                        r.jsx)("div", {
                                            className: "absolute inset-0 rounded-full animate-pulse bg-white/50"
                                        })
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "hidden md:block w-1/2"
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "w-full md:w-[calc(50%-3rem)] pl-24 md:pl-0 group",
                                        children: (0,
                                        r.jsxs)("div", {
                                            className: `glass-card p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-105 relative overflow-hidden
                                                ${t.highlight ? "border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.3)] bg-red-500/10 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]" : "cyan" === t.color ? "hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]" : "purple" === t.color ? "hover:border-purple-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]" : "pink" === t.color ? "hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]" : "yellow" === t.color ? "hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]" : "red" === t.color ? "hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]" : "hover:border-gray-400 hover:shadow-[0_0_20px_rgba(156,163,175,0.3)]"}`,
                                            children: [(0,
                                            r.jsx)("div", {
                                                className: `hidden md:block absolute top-1/2 w-12 h-[2px] bg-white/20 ${e % 2 == 0 ? "-right-12" : "-left-12"}`
                                            }), (0,
                                            r.jsxs)("div", {
                                                className: "flex items-center gap-4 mb-4",
                                                children: [(0,
                                                r.jsx)("div", {
                                                    className: `w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400 shadow-[0_0_10px_rgba(255,255,255,0.1)]
                                                        ${"cyan" === t.color ? "bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.2)]" : "purple" === t.color ? "bg-purple-500/10 border-purple-500/20 shadow-[0_0_10px_rgba(139,92,246,0.2)]" : "pink" === t.color ? "bg-pink-500/10 border-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.2)]" : "yellow" === t.color ? "bg-yellow-500/10 border-yellow-500/20 shadow-[0_0_10px_rgba(234,179,8,0.2)]" : "red" === t.color ? "bg-red-500/10 border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.2)]" : "bg-gray-500/10 border-gray-500/20 shadow-[0_0_10px_rgba(156,163,175,0.2)]"}`,
                                                    children: (0,
                                                    r.jsx)("i", {
                                                        className: `${t.iconClass} text-xl ${"cyan" === t.color ? "text-cyan-400" : "purple" === t.color ? "text-purple-400" : "pink" === t.color ? "text-pink-400" : "yellow" === t.color ? "text-yellow-400" : "red" === t.color ? "text-red-500" : "text-gray-400"}`
                                                    })
                                                }), (0,
                                                r.jsx)("span", {
                                                    className: `text-2xl font-display font-bold ${"cyan" === t.color ? "text-cyan-400" : "purple" === t.color ? "text-purple-400" : "pink" === t.color ? "text-pink-400" : "yellow" === t.color ? "text-yellow-400" : "red" === t.color ? "text-red-500" : "text-gray-400"}`,
                                                    children: t.time
                                                })]
                                            }), (0,
                                            r.jsx)("h3", {
                                                className: `text-xl font-bold mb-1 font-display ${t.highlight ? "text-white text-2xl" : "text-white"}`,
                                                children: t.title
                                            }), t.description && (0,
                                            r.jsx)("p", {
                                                className: "text-gray-300 text-base font-sans tracking-widest",
                                                children: t.description
                                            })]
                                        })
                                    })]
                                }, e))
                            })]
                        })
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-20"
                })]
            })
        })
    }
    function rh({onBookTicket: t, isSoldOut: e, isBookingOpen: i}) {
        return (0,
        r.jsx)("section", {
            className: "container mx-auto px-4 pt-32 pb-24 relative z-10",
            children: (0,
            r.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                children: [(0,
                r.jsxs)("div", {
                    className: "lg:col-span-2 space-y-12",
                    children: [(0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsx)("h2", {
                            className: "text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-widest mb-4",
                            children: "Tickets"
                        }), (0,
                        r.jsx)("div", {
                            className: "h-1 w-32 bg-gradient-to-r from-cosmic-purple to-transparent mb-12"
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "space-y-6",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "group relative glass-card rounded-2xl p-8 overflow-hidden transition-all duration-500 opacity-60 grayscale hover:grayscale-0 hover:opacity-80 cursor-not-allowed",
                            children: [(0,
                            r.jsx)("div", {
                                className: "absolute left-0 top-0 bottom-0 w-1 bg-cosmic-purple"
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex flex-col md:flex-row justify-between items-center gap-8",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "flex items-center gap-8",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "w-24 h-24 rounded-full border-2 border-cosmic-purple/30 bg-black/50 flex flex-col items-center justify-center text-cosmic-purple relative overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)]",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "absolute inset-0 bg-cosmic-purple/10"
                                        }), (0,
                                        r.jsx)("span", {
                                            className: "text-4xl",
                                            children: "👑"
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        children: [(0,
                                        r.jsx)("h3", {
                                            className: "text-2xl font-bold text-white mb-2 font-display tracking-wide",
                                            children: "Thẻ Phi Hành Đoàn"
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "text-stardust text-xl max-w-md font-sans",
                                            children: "(Sound check & all access) Dành riêng cho đội ngũ vận hành - ekip kiến tạo nên trải nghiệm Owniverse hoàn hảo."
                                        })]
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "text-right min-w-[140px]",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "text-3xl font-bold text-cosmic-purple mb-2 flex items-center justify-end gap-2",
                                        children: ["50 ", (0,
                                        r.jsx)("span", {
                                            children: (0,
                                            r.jsx)("img", {
                                                src: "/images/banhmi.png",
                                                alt: "Banhmi",
                                                className: "w-8 h-auto inline-block filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                                            })
                                        })]
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "text-white font-bold text-xs uppercase tracking-widest border border-white/20 bg-white/5 px-3 py-1 rounded-full inline-block font-display",
                                        children: "Sold Out"
                                    })]
                                })]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            onClick: e || !i ? void 0 : t,
                            className: `group relative glass-card rounded-2xl p-8 overflow-hidden transition-all duration-500 ${e || !i ? "opacity-60 grayscale cursor-not-allowed hover:grayscale-0 hover:opacity-80" : "cursor-pointer hover:border-cosmic-cyan hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-1"}`,
                            children: [(0,
                            r.jsx)("div", {
                                className: "absolute left-0 top-0 bottom-0 w-1 bg-cosmic-cyan"
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex flex-col md:flex-row justify-between items-center gap-8",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "flex items-center gap-8",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "w-24 h-24 rounded-full border-2 border-cosmic-cyan/30 bg-black/50 flex flex-col items-center justify-center text-cosmic-cyan relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)]",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "absolute inset-0 bg-cosmic-cyan/10"
                                        }), (0,
                                        r.jsx)("span", {
                                            className: "text-4xl",
                                            children: "🪐"
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        children: [(0,
                                        r.jsx)("h3", {
                                            className: "text-2xl font-bold text-white mb-2 font-display tracking-wide",
                                            children: "Vé Nhà Du Hành"
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "text-stardust text-xl max-w-md font-sans",
                                            children: "(Full experience) Tấm vé thông hành giúp bạn chính thức gia nhập Owniverse với đặc quyền tận hưởng trọn vẹn đêm gala."
                                        })]
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "text-right min-w-[140px]",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "text-3xl font-bold text-cosmic-cyan mb-2 flex items-center justify-end gap-2 text-shadow-glow",
                                        children: ["20 ", (0,
                                        r.jsx)("span", {
                                            children: (0,
                                            r.jsx)("img", {
                                                src: "/images/banhmi.png",
                                                alt: "Banhmi",
                                                className: "w-8 h-auto inline-block filter drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]"
                                            })
                                        })]
                                    }), (0,
                                    r.jsx)("div", {
                                        className: `flex items-center justify-end gap-2 ${e || !i ? "" : "text-xs font-bold uppercase tracking-widest animate-pulse text-cosmic-cyan"}`,
                                        children: e ? (0,
                                        r.jsx)("div", {
                                            className: "text-white font-bold text-xs uppercase tracking-widest border border-white/20 bg-white/5 px-3 py-1 rounded-full inline-block font-display",
                                            children: "Sold Out"
                                        }) : (0,
                                        r.jsxs)(r.Fragment, {
                                            children: [(0,
                                            r.jsx)("span", {
                                                className: `w-2 h-2 rounded-full bg-cosmic-cyan inline-block ${!i ? "opacity-50" : ""}`
                                            }), (0,
                                            r.jsx)("span", {
                                                className: `font-display ${!i ? "opacity-50" : ""}`,
                                                children: i ? "Đang mở bán" : "14h30 - 29/12"
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "lg:col-span-1",
                    children: (0,
                    r.jsxs)("div", {
                        className: "glass-panel rounded-2xl p-6 text-left sticky top-24 h-full flex flex-col",
                        children: [(0,
                        r.jsx)("div", {
                            className: "w-24 h-24 bg-white rounded-full mb-6 flex items-center justify-center overflow-hidden p-1 shadow-[0_0_20px_rgba(255,255,255,0.2)] mx-auto",
                            children: (0,
                            r.jsx)("img", {
                                src: "/images/ownego_logo.png",
                                alt: "Ownego Logo",
                                className: "w-full h-full object-contain rounded-full"
                            })
                        }), (0,
                        r.jsxs)("div", {
                            className: "grid grid-cols-3 items-center mb-6",
                            children: [(0,
                            r.jsx)("div", {}), " ", (0,
                            r.jsx)("h3", {
                                className: "text-xl font-display font-bold text-white uppercase tracking-widest text-center",
                                children: "OWNEGO"
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex gap-4 justify-end",
                                children: [(0,
                                r.jsx)("a", {
                                    href: "https://www.facebook.com/ownego",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]",
                                    children: (0,
                                    r.jsx)("span", {
                                        className: "font-bold text-lg",
                                        children: "f"
                                    })
                                }), (0,
                                r.jsx)("a", {
                                    href: "https://chat.ownego.com/channel/chat-anything",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all border border-gray-700 hover:border-cosmic-cyan hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] overflow-hidden",
                                    children: (0,
                                    r.jsx)("img", {
                                        src: "/images/rocketchat.png",
                                        alt: "Chat",
                                        className: "w-6 h-6 object-contain"
                                    })
                                })]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "bg-white/5 rounded-xl p-5 text-left space-y-4 border border-white/10 flex-grow",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "flex items-start gap-4 text-stardust text-xl",
                                children: [(0,
                                r.jsx)("span", {
                                    className: "text-2xl mt-1",
                                    children: "🏢"
                                }), (0,
                                r.jsx)("span", {
                                    className: "font-sans leading-snug",
                                    children: "Tầng 17-18, Tòa nhà CLand, 156 Xã Đàn 2, Đống Đa, Hà Nội"
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex items-center gap-4 text-stardust text-xl",
                                children: [(0,
                                r.jsx)("span", {
                                    className: "text-2xl",
                                    children: "✉️"
                                }), (0,
                                r.jsx)("span", {
                                    className: "font-sans",
                                    children: "contact@ownego.com"
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex items-center gap-4 text-stardust text-xl",
                                children: [(0,
                                r.jsx)("span", {
                                    className: "text-2xl",
                                    children: "🌐"
                                }), (0,
                                r.jsx)("span", {
                                    className: "font-sans",
                                    children: "ownego.com"
                                })]
                            })]
                        })]
                    })
                })]
            })
        })
    }
    var rc = t.i(48545);
    function rd({onComplete: t}) {
        let[e,i] = (0,
        a.useState)(null);
        return (0,
        a.useEffect)( () => {
            0 === e && t()
        }
        , [e, t]),
        (0,
        a.useEffect)( () => {
            let t, e = Math.floor(11 * Math.random()) + 39;
            i(e);
            let s = [5e3, 6e3, 7e3]
              , n = s[Math.floor(Math.random() * s.length)] / (e / 1.5)
              , r = () => {
                let e = .4 * n;
                t = setTimeout( () => {
                    i(t => {
                        if (null === t || t <= 0)
                            return 0;
                        let e = t - (Math.floor(2 * Math.random()) + 1);
                        return e <= 0 ? 0 : (r(),
                        e)
                    }
                    )
                }
                , Math.floor(n + (Math.random() * e - e / 2)))
            }
            ;
            return r(),
            () => clearTimeout(t)
        }
        , []),
        (0,
        r.jsxs)("div", {
            className: "fixed inset-0 z-[110] flex flex-col items-center justify-center bg-black/60 backdrop-blur-xl text-white overflow-hidden",
            children: [(0,
            r.jsx)("div", {
                className: "absolute inset-0 bg-[url('/images/stardust.png')] opacity-30 animate-pulse-slow pointer-events-none"
            }), (0,
            r.jsx)("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cosmic-cyan/10 blur-[100px] rounded-full pointer-events-none"
            }), (0,
            r.jsxs)("div", {
                className: "relative w-80 h-80 flex items-center justify-center mb-10",
                children: [(0,
                r.jsx)("div", {
                    className: "w-64 h-64 rounded-full flex items-center justify-center relative z-10 animate-spin-slow",
                    children: (0,
                    r.jsx)("img", {
                        src: "/images/ownego_logo_new.png",
                        alt: "Ownego",
                        className: "w-full h-full object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.6)] brightness-125"
                    })
                }), (0,
                r.jsx)("div", {
                    className: "absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"
                }), (0,
                r.jsx)("div", {
                    className: "absolute inset-4 border border-cosmic-cyan/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"
                })]
            }), (0,
            r.jsx)("h2", {
                className: "text-4xl md:text-6xl font-display font-bold tracking-widest mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] text-center px-4",
                children: "Chờ xíu..."
            }), (0,
            r.jsxs)("div", {
                className: "flex flex-col items-center gap-2 mb-8",
                children: [(0,
                r.jsx)("p", {
                    className: "text-gray-300 text-xl md:text-2xl font-light tracking-wide font-display",
                    children: "Số người trước bạn"
                }), (0,
                r.jsx)("span", {
                    className: "text-7xl md:text-9xl font-bold text-cosmic-cyan drop-shadow-[0_0_40px_rgba(6,182,212,0.8)] font-chatime animate-pulse",
                    children: e
                })]
            }), (0,
            r.jsx)("p", {
                className: "text-gray-400 text-base md:text-lg mt-4 animate-bounce bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm font-sans",
                children: "⚠️ Vui lòng không tắt trình duyệt"
            })]
        })
    }
    var ru = {};
    !function t(e, i, s, n) {
        var r, a, o, l, h, c, d, u, p, m, f, g = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL), x = "function" == typeof Path2D && "function" == typeof DOMMatrix;
        function v() {}
        function y(t) {
            var s = i.exports.Promise
              , n = void 0 !== s ? s : e.Promise;
            return "function" == typeof n ? new n(t) : (t(v, v),
            null)
        }
        var b = (r = function() {
            if (!e.OffscreenCanvas)
                return !1;
            try {
                var t = new OffscreenCanvas(1,1)
                  , i = t.getContext("2d");
                i.fillRect(0, 0, 1, 1);
                var s = t.transferToImageBitmap();
                i.createPattern(s, "no-repeat")
            } catch (t) {
                return !1
            }
            return !0
        }(),
        a = new Map,
        {
            transform: function(t) {
                if (r)
                    return t;
                if (a.has(t))
                    return a.get(t);
                var e = new OffscreenCanvas(t.width,t.height);
                return e.getContext("2d").drawImage(t, 0, 0),
                a.set(t, e),
                e
            },
            clear: function() {
                a.clear()
            }
        })
          , w = (h = Math.floor(1e3 / 60),
        c = {},
        d = 0,
        "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (o = function(t) {
            var e = Math.random();
            return c[e] = requestAnimationFrame(function i(s) {
                d === s || d + h - 1 < s ? (d = s,
                delete c[e],
                t()) : c[e] = requestAnimationFrame(i)
            }),
            e
        }
        ,
        l = function(t) {
            c[t] && cancelAnimationFrame(c[t])
        }
        ) : (o = function(t) {
            return setTimeout(t, h)
        }
        ,
        l = function(t) {
            return clearTimeout(t)
        }
        ),
        {
            frame: o,
            cancel: l
        })
          , j = (m = {},
        function() {
            if (u)
                return u;
            if (!s && g) {
                var e = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {\n  if (msg.data.options) {\n    CONFETTI(msg.data.options).then(function () {\n      if (msg.data.callback) {\n        postMessage({ callback: msg.data.callback });\n      }\n    });\n  } else if (msg.data.reset) {\n    CONFETTI && CONFETTI.reset();\n  } else if (msg.data.resize) {\n    SIZE.width = msg.data.resize.width;\n    SIZE.height = msg.data.resize.height;\n  } else if (msg.data.canvas) {\n    SIZE.width = msg.data.canvas.width;\n    SIZE.height = msg.data.canvas.height;\n    CONFETTI = module.exports.create(msg.data.canvas);\n  }\n}"].join("\n");
                try {
                    u = new Worker(URL.createObjectURL(new Blob([e])))
                } catch (t) {
                    return "undefined" != typeof console && "function" == typeof console.warn && console.warn("🎊 Could not load worker", t),
                    null
                }
                var i = u;
                function n(t, e) {
                    i.postMessage({
                        options: t || {},
                        callback: e
                    })
                }
                i.init = function(t) {
                    var e = t.transferControlToOffscreen();
                    i.postMessage({
                        canvas: e
                    }, [e])
                }
                ,
                i.fire = function(t, e, s) {
                    if (p)
                        return n(t, null),
                        p;
                    var r = Math.random().toString(36).slice(2);
                    return p = y(function(e) {
                        function a(t) {
                            t.data.callback === r && (delete m[r],
                            i.removeEventListener("message", a),
                            p = null,
                            b.clear(),
                            s(),
                            e())
                        }
                        i.addEventListener("message", a),
                        n(t, r),
                        m[r] = a.bind(null, {
                            data: {
                                callback: r
                            }
                        })
                    })
                }
                ,
                i.reset = function() {
                    for (var t in i.postMessage({
                        reset: !0
                    }),
                    m)
                        m[t](),
                        delete m[t]
                }
            }
            return u
        }
        )
          , N = {
            particleCount: 50,
            angle: 90,
            spread: 45,
            startVelocity: 45,
            decay: .9,
            gravity: 1,
            drift: 0,
            ticks: 200,
            x: .5,
            y: .5,
            shapes: ["square", "circle"],
            zIndex: 100,
            colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
            disableForReducedMotion: !1,
            scalar: 1
        };
        function k(t, e, i) {
            var s;
            return s = t && null != t[e] ? t[e] : N[e],
            i ? i(s) : s
        }
        function T(t) {
            return t < 0 ? 0 : Math.floor(t)
        }
        function M(t) {
            return parseInt(t, 16)
        }
        function S(t) {
            return t.map(P)
        }
        function P(t) {
            var e = String(t).replace(/[^0-9a-f]/gi, "");
            return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
            {
                r: M(e.substring(0, 2)),
                g: M(e.substring(2, 4)),
                b: M(e.substring(4, 6))
            }
        }
        function C(t) {
            t.width = document.documentElement.clientWidth,
            t.height = document.documentElement.clientHeight
        }
        function A(t) {
            var e = t.getBoundingClientRect();
            t.width = e.width,
            t.height = e.height
        }
        function E(t, i) {
            var r, a = !t, o = !!k(i || {}, "resize"), l = !1, h = k(i, "disableForReducedMotion", Boolean), c = g && k(i || {}, "useWorker") ? j() : null, d = a ? C : A, u = !!t && !!c && !!t.__confetti_initialized, p = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches;
            function m(i) {
                var m, f = h || k(i, "disableForReducedMotion", Boolean), g = k(i, "zIndex", Number);
                if (f && p)
                    return y(function(t) {
                        t()
                    });
                a && r ? t = r.canvas : a && !t && ((m = document.createElement("canvas")).style.position = "fixed",
                m.style.top = "0px",
                m.style.left = "0px",
                m.style.pointerEvents = "none",
                m.style.zIndex = g,
                t = m,
                document.body.appendChild(t)),
                o && !u && d(t);
                var v = {
                    width: t.width,
                    height: t.height
                };
                function j() {
                    if (c) {
                        var e = {
                            getBoundingClientRect: function() {
                                if (!a)
                                    return t.getBoundingClientRect()
                            }
                        };
                        d(e),
                        c.postMessage({
                            resize: {
                                width: e.width,
                                height: e.height
                            }
                        });
                        return
                    }
                    v.width = v.height = null
                }
                function N() {
                    r = null,
                    o && (l = !1,
                    e.removeEventListener("resize", j)),
                    a && t && (document.body.contains(t) && document.body.removeChild(t),
                    t = null,
                    u = !1)
                }
                return (c && !u && c.init(t),
                u = !0,
                c && (t.__confetti_initialized = !0),
                o && !l && (l = !0,
                e.addEventListener("resize", j, !1)),
                c) ? c.fire(i, v, N) : function(e, i, a) {
                    for (var o, l, h, c, u, p, m, f = k(e, "particleCount", T), g = k(e, "angle", Number), v = k(e, "spread", Number), j = k(e, "startVelocity", Number), N = k(e, "decay", Number), M = k(e, "gravity", Number), P = k(e, "drift", Number), C = k(e, "colors", S), A = k(e, "ticks", Number), E = k(e, "shapes"), _ = k(e, "scalar"), V = !!k(e, "flat"), D = ((o = k(e, "origin", Object)).x = k(o, "x", Number),
                    o.y = k(o, "y", Number),
                    o), R = f, L = [], O = t.width * D.x, B = t.height * D.y; R--; )
                        L.push(function(t) {
                            var e = t.angle * (Math.PI / 180)
                              , i = t.spread * (Math.PI / 180);
                            return {
                                x: t.x,
                                y: t.y,
                                wobble: 10 * Math.random(),
                                wobbleSpeed: Math.min(.11, .1 * Math.random() + .05),
                                velocity: .5 * t.startVelocity + Math.random() * t.startVelocity,
                                angle2D: -e + (.5 * i - Math.random() * i),
                                tiltAngle: (.5 * Math.random() + .25) * Math.PI,
                                color: t.color,
                                shape: t.shape,
                                tick: 0,
                                totalTicks: t.ticks,
                                decay: t.decay,
                                drift: t.drift,
                                random: Math.random() + 2,
                                tiltSin: 0,
                                tiltCos: 0,
                                wobbleX: 0,
                                wobbleY: 0,
                                gravity: 3 * t.gravity,
                                ovalScalar: .6,
                                scalar: t.scalar,
                                flat: t.flat
                            }
                        }({
                            x: O,
                            y: B,
                            angle: g,
                            spread: v,
                            startVelocity: j,
                            color: C[R % C.length],
                            shape: E[Math.floor(Math.random() * (E.length - 0)) + 0],
                            ticks: A,
                            decay: N,
                            gravity: M,
                            drift: P,
                            scalar: _,
                            flat: V
                        }));
                    return r ? r.addFettis(L) : (l = t,
                    u = L.slice(),
                    p = l.getContext("2d"),
                    m = y(function(t) {
                        function e() {
                            h = c = null,
                            p.clearRect(0, 0, i.width, i.height),
                            b.clear(),
                            a(),
                            t()
                        }
                        h = w.frame(function t() {
                            s && (i.width !== n.width || i.height !== n.height) && (i.width = l.width = n.width,
                            i.height = l.height = n.height),
                            i.width || i.height || (d(l),
                            i.width = l.width,
                            i.height = l.height),
                            p.clearRect(0, 0, i.width, i.height),
                            (u = u.filter(function(t) {
                                return function(t, e) {
                                    e.x += Math.cos(e.angle2D) * e.velocity + e.drift,
                                    e.y += Math.sin(e.angle2D) * e.velocity + e.gravity,
                                    e.velocity *= e.decay,
                                    e.flat ? (e.wobble = 0,
                                    e.wobbleX = e.x + 10 * e.scalar,
                                    e.wobbleY = e.y + 10 * e.scalar,
                                    e.tiltSin = 0,
                                    e.tiltCos = 0,
                                    e.random = 1) : (e.wobble += e.wobbleSpeed,
                                    e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble),
                                    e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble),
                                    e.tiltAngle += .1,
                                    e.tiltSin = Math.sin(e.tiltAngle),
                                    e.tiltCos = Math.cos(e.tiltAngle),
                                    e.random = Math.random() + 2);
                                    var i, s, n, r, a, o, l, h, c, d, u, p, m, f, g, v, y = e.tick++ / e.totalTicks, w = e.x + e.random * e.tiltCos, j = e.y + e.random * e.tiltSin, N = e.wobbleX + e.random * e.tiltCos, k = e.wobbleY + e.random * e.tiltSin;
                                    if (t.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - y) + ")",
                                    t.beginPath(),
                                    x && "path" === e.shape.type && "string" == typeof e.shape.path && Array.isArray(e.shape.matrix)) {
                                        t.fill((i = e.shape.path,
                                        s = e.shape.matrix,
                                        n = e.x,
                                        r = e.y,
                                        a = .1 * Math.abs(N - w),
                                        o = .1 * Math.abs(k - j),
                                        l = Math.PI / 10 * e.wobble,
                                        h = new Path2D(i),
                                        (c = new Path2D).addPath(h, new DOMMatrix(s)),
                                        (d = new Path2D).addPath(c, new DOMMatrix([Math.cos(l) * a, Math.sin(l) * a, -Math.sin(l) * o, Math.cos(l) * o, n, r])),
                                        d))
                                    } else if ("bitmap" === e.shape.type) {
                                        var T = Math.PI / 10 * e.wobble
                                          , M = .1 * Math.abs(N - w)
                                          , S = .1 * Math.abs(k - j)
                                          , P = e.shape.bitmap.width * e.scalar
                                          , C = e.shape.bitmap.height * e.scalar
                                          , A = new DOMMatrix([Math.cos(T) * M, Math.sin(T) * M, -Math.sin(T) * S, Math.cos(T) * S, e.x, e.y]);
                                        A.multiplySelf(new DOMMatrix(e.shape.matrix));
                                        var E = t.createPattern(b.transform(e.shape.bitmap), "no-repeat");
                                        E.setTransform(A),
                                        t.globalAlpha = 1 - y,
                                        t.fillStyle = E,
                                        t.fillRect(e.x - P / 2, e.y - C / 2, P, C),
                                        t.globalAlpha = 1
                                    } else if ("circle" === e.shape)
                                        t.ellipse ? t.ellipse(e.x, e.y, Math.abs(N - w) * e.ovalScalar, Math.abs(k - j) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : (u = e.x,
                                        p = e.y,
                                        m = Math.abs(N - w) * e.ovalScalar,
                                        f = Math.abs(k - j) * e.ovalScalar,
                                        g = Math.PI / 10 * e.wobble,
                                        v = 2 * Math.PI,
                                        t.save(),
                                        t.translate(u, p),
                                        t.rotate(g),
                                        t.scale(m, f),
                                        t.arc(0, 0, 1, 0, v, void 0),
                                        t.restore());
                                    else if ("star" === e.shape)
                                        for (var _ = Math.PI / 2 * 3, V = 4 * e.scalar, D = 8 * e.scalar, R = e.x, L = e.y, O = 5, B = Math.PI / 5; O--; )
                                            R = e.x + Math.cos(_) * D,
                                            L = e.y + Math.sin(_) * D,
                                            t.lineTo(R, L),
                                            _ += B,
                                            R = e.x + Math.cos(_) * V,
                                            L = e.y + Math.sin(_) * V,
                                            t.lineTo(R, L),
                                            _ += B;
                                    else
                                        t.moveTo(Math.floor(e.x), Math.floor(e.y)),
                                        t.lineTo(Math.floor(e.wobbleX), Math.floor(j)),
                                        t.lineTo(Math.floor(N), Math.floor(k)),
                                        t.lineTo(Math.floor(w), Math.floor(e.wobbleY));
                                    return t.closePath(),
                                    t.fill(),
                                    e.tick < e.totalTicks
                                }(p, t)
                            })).length ? h = w.frame(t) : e()
                        }),
                        c = e
                    }),
                    (r = {
                        addFettis: function(t) {
                            return u = u.concat(t),
                            m
                        },
                        canvas: l,
                        promise: m,
                        reset: function() {
                            h && w.cancel(h),
                            c && c()
                        }
                    }).promise)
                }(i, v, N)
            }
            return m.reset = function() {
                c && c.reset(),
                r && r.reset()
            }
            ,
            m
        }
        function _() {
            return f || (f = E(null, {
                useWorker: !0,
                resize: !0
            })),
            f
        }
        i.exports = function() {
            return _().apply(this, arguments)
        }
        ,
        i.exports.reset = function() {
            _().reset()
        }
        ,
        i.exports.create = E,
        i.exports.shapeFromPath = function(t) {
            if (!x)
                throw Error("path confetti are not supported in this browser");
            "string" == typeof t ? s = t : (s = t.path,
            n = t.matrix);
            var e = new Path2D(s)
              , i = document.createElement("canvas").getContext("2d");
            if (!n) {
                for (var s, n, r, a, o = 1e3, l = 1e3, h = 0, c = 0, d = 0; d < 1e3; d += 2)
                    for (var u = 0; u < 1e3; u += 2)
                        i.isPointInPath(e, d, u, "nonzero") && (o = Math.min(o, d),
                        l = Math.min(l, u),
                        h = Math.max(h, d),
                        c = Math.max(c, u));
                r = h - o;
                var p = Math.min(10 / r, 10 / (a = c - l));
                n = [p, 0, 0, p, -Math.round(r / 2 + o) * p, -Math.round(a / 2 + l) * p]
            }
            return {
                type: "path",
                path: s,
                matrix: n
            }
        }
        ,
        i.exports.shapeFromText = function(t) {
            var e, i = 1, s = "#000000", n = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
            "string" == typeof t ? e = t : (e = t.text,
            i = "scalar"in t ? t.scalar : i,
            n = "fontFamily"in t ? t.fontFamily : n,
            s = "color"in t ? t.color : s);
            var r = 10 * i
              , a = "" + r + "px " + n
              , o = new OffscreenCanvas(r,r)
              , l = o.getContext("2d");
            l.font = a;
            var h = l.measureText(e)
              , c = Math.ceil(h.actualBoundingBoxRight + h.actualBoundingBoxLeft)
              , d = Math.ceil(h.actualBoundingBoxAscent + h.actualBoundingBoxDescent)
              , u = h.actualBoundingBoxLeft + 2
              , p = h.actualBoundingBoxAscent + 2;
            c += 4,
            d += 4,
            (l = (o = new OffscreenCanvas(c,d)).getContext("2d")).font = a,
            l.fillStyle = s,
            l.fillText(e, u, p);
            var m = 1 / i;
            return {
                type: "bitmap",
                bitmap: o.transferToImageBitmap(),
                matrix: [m, 0, 0, m, -c * m / 2, -d * m / 2]
            }
        }
    }(function() {
        return "undefined" != typeof window ? window : "undefined" != typeof self ? self : this || {}
    }(), ru, !1);
    let rp = ru.exports;
    function rm({isOpen: t, onClose: e, isSoldOut: i}) {
        let[s,n] = (0,
        a.useState)([])
          , [l,h] = (0,
        a.useState)({
            name: "",
            employeeId: "",
            phoneNumber: ""
        })
          , [c,d] = (0,
        a.useState)(!1)
          , [u,p] = (0,
        a.useState)(!i)
          , [m,f] = (0,
        a.useState)(!1)
          , [g,x] = (0,
        a.useState)(!1)
          , [v,y] = (0,
        a.useState)(!1)
          , [b,w] = (0,
        a.useState)("")
          , [j,N] = (0,
        a.useState)(0)
          , [k,T] = (0,
        a.useState)(null)
          , [M,S] = (0,
        a.useState)(null);
        if ((0,
        a.useEffect)( () => {
            t ? (p(!i),
            requestAnimationFrame( () => f(!0))) : f(!1)
        }
        , [t, i]),
        (0,
        a.useEffect)( () => {
            let t = setTimeout(async () => {
                if (l.name && l.employeeId && l.phoneNumber)
                    try {
                        let t = await fetch("/api/verify", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(l)
                        })
                          , e = await t.json();
                        d(e.verified)
                    } catch (t) {
                        console.error("Verification error", t),
                        d(!1)
                    }
                else
                    d(!1)
            }
            , 500);
            return () => clearTimeout(t)
        }
        , [l]),
        (0,
        a.useEffect)( () => {
            g ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset"
        }
        , [g]),
        !t)
            return null;
        if (u)
            return (0,
            r.jsx)(rd, {
                onComplete: () => p(!1)
            });
        let P = s.reduce( (t, e) => t + e.price, 0)
          , C = c ? 0 : P
          , A = async () => {
            if (0 === s.length)
                return void alert("Vui lòng chọn ít nhất 1 vé!");
            if (!l.name || !l.employeeId || !l.phoneNumber)
                return void alert("Vui lòng điền đầy đủ thông tin thanh toán!");
            try {
                let t = await fetch("/api/bookings", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        seats: s,
                        user: l
                    })
                })
                  , e = await t.json();
                if (t.ok) {
                    let t, i, {isEarlyBird: s, booking: n} = e, r = "";
                    r = s ? "Chúc mừng bạn đã trở thành những người đầu tiên mua vé thành công cho sự kiện Owniverse 2025\n\nĐặc quyền cho vé Early bird sẽ được gửi đến cho bạn trong những ngày sớm nhất\n\nHãy kiểm tra oeapp.bot trên rocketchat nhé\n\nHẹn gặp bạn tại sự kiện vào ngày 09/01/2026" : "Chúc mừng bạn đã mua vé thành công cho sự kiện Owniverse 2025\n\nHãy kiểm tra oeapp.bot trên rocketchat nhé\n\nHẹn gặp bạn tại sự kiện vào ngày 09/01/2026",
                    t = Date.now() + 5e3,
                    i = setInterval(function() {
                        if (t - Date.now() <= 0)
                            return clearInterval(i);
                        rp({
                            particleCount: 40,
                            startVelocity: 25,
                            spread: 360,
                            origin: {
                                x: Math.random(),
                                y: Math.random() - .2
                            },
                            gravity: .8,
                            scalar: .9,
                            ticks: 200,
                            colors: ["#06b6d4", "#8b5cf6", "#ec4899", "#ffffff", "#FFD700"]
                        }),
                        rp({
                            particleCount: 10,
                            angle: 90,
                            spread: 100,
                            origin: {
                                x: .5,
                                y: 1.1
                            },
                            startVelocity: 45,
                            gravity: .6,
                            scalar: 1.2,
                            drift: 0,
                            ticks: 300,
                            colors: ["#06b6d4", "#8b5cf6", "#ec4899"]
                        })
                    }, 250),
                    T({
                        booking: n,
                        isEarlyBird: s,
                        message: r
                    })
                } else
                    409 === t.status ? "GREEDY_USER" === e.errorCode || e.ticketId ? (w(e.ticketId || "UNKNOWN"),
                    y(!0)) : S({
                        title: "CHẬM TAY MẤT RỒI!",
                        message: "Ghế này có người khác đặt ồi =))) bạn vui lòng đặt ghế khác nhaaa"
                    }) : S({
                        title: "CÓ LỖI XẢY RA",
                        message: e.error || "Có lỗi xảy ra, vui lòng thử lại."
                    })
            } catch (t) {
                S({
                    title: "CÓ LỖI XẢY RA",
                    message: "Hệ thống đang bận. Vui lòng thử lại sau."
                })
            }
        }
          , E = () => {
            T(null),
            n([]),
            h({
                name: "",
                employeeId: "",
                phoneNumber: ""
            }),
            N(t => t + 1),
            p(!1)
        }
        ;
        return (0,
        r.jsxs)("div", {
            className: "fixed inset-0 z-[100] flex items-center justify-center bg-deep-space/90 backdrop-blur-md p-4 transition-opacity duration-300",
            children: [(0,
            r.jsxs)("div", {
                className: `bg-deep-space border border-white/10 rounded-3xl w-full max-w-[95vw] h-[90vh] flex flex-col overflow-hidden shadow-[0_0_100px_rgba(6,182,212,0.2)] transition-all duration-500 ease-out transform ${m ? "scale-100 opacity-100" : "scale-75 opacity-0"}`,
                children: [(0,
                r.jsxs)("div", {
                    className: "flex justify-between items-center p-6 border-b border-white/10 bg-white/5 backdrop-blur-xl",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [(0,
                        r.jsx)("img", {
                            src: "/images/ownego_logo.png",
                            alt: "Ownego",
                            className: "h-10 w-auto"
                        }), (0,
                        r.jsxs)("div", {
                            children: [(0,
                            r.jsx)("h2", {
                                className: "text-xl font-display font-bold text-white uppercase tracking-wider",
                                children: "Chọn vị trí"
                            }), (0,
                            r.jsx)("p", {
                                className: "text-stardust text-lg font-sans",
                                children: "Owniverse 2025 • Melorita Hòa Lạc"
                            })]
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex items-center gap-8",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "flex gap-6 text-base text-stardust",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "w-3 h-3 rounded-full border border-cosmic-cyan/50 bg-black/40"
                                }), (0,
                                r.jsx)("span", {
                                    className: "font-sans",
                                    children: "Ghế trống"
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "w-3 h-3 bg-white border border-white rounded-full shadow-[0_0_8px_white]"
                                }), (0,
                                r.jsx)("span", {
                                    className: "font-sans",
                                    children: "Đang chọn"
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "w-3 h-3 bg-white/5 border border-white/10 rounded-full"
                                }), (0,
                                r.jsx)("span", {
                                    className: "font-sans",
                                    children: "Đã bán"
                                })]
                            })]
                        }), (0,
                        r.jsx)("button", {
                            onClick: e,
                            className: "text-stardust hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full",
                            children: (0,
                            r.jsxs)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [(0,
                                r.jsx)("path", {
                                    d: "M18 6L6 18"
                                }), (0,
                                r.jsx)("path", {
                                    d: "M6 6l12 12"
                                })]
                            })
                        })]
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex-1 flex flex-col overflow-y-auto relative bg-[url('/images/stardust.png')] custom-scrollbar",
                    children: [(0,
                    r.jsx)("div", {
                        className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
                    }), (0,
                    r.jsx)("div", {
                        className: "shrink-0 min-h-[400px] p-4 md:p-8 flex items-center justify-center relative z-10",
                        children: (0,
                        r.jsx)(rc.SeatMap, {
                            onSelectionChange: t => n(t),
                            onLimitReached: () => x(!0)
                        }, j)
                    }), (0,
                    r.jsx)("div", {
                        className: "w-full bg-deep-space/95 border-t border-white/10 backdrop-blur-xl p-4 md:p-6 shrink-0 relative z-20",
                        children: (0,
                        r.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "flex flex-col h-full order-2 lg:order-1",
                                children: [(0,
                                r.jsx)("h3", {
                                    className: "text-stardust uppercase text-xs font-display font-bold tracking-widest mb-2 lg:mb-4",
                                    children: "Vé đã chọn"
                                }), (0,
                                r.jsx)("div", {
                                    className: "flex-1 overflow-auto pr-2 custom-scrollbar max-h-[100px] lg:max-h-[150px]",
                                    children: 0 === s.length ? (0,
                                    r.jsx)("div", {
                                        className: "border border-white/10 border-dashed rounded-xl h-full flex flex-col items-center justify-center text-stardust min-h-[60px] lg:min-h-[100px] bg-white/5",
                                        children: (0,
                                        r.jsx)("span", {
                                            className: "text-lg lg:text-xl font-sans",
                                            children: "Chưa chọn ghế nào"
                                        })
                                    }) : (0,
                                    r.jsx)("div", {
                                        className: "space-y-2",
                                        children: s.map(t => (0,
                                        r.jsxs)("div", {
                                            className: "bg-white/5 border border-cosmic-cyan/30 rounded-xl p-2 lg:p-3 flex justify-between items-center relative overflow-hidden group hover:bg-white/10 transition-colors",
                                            children: [(0,
                                            r.jsxs)("div", {
                                                className: "flex items-center gap-3 relative z-10",
                                                children: [(0,
                                                r.jsxs)("div", {
                                                    className: "w-8 h-8 lg:w-10 lg:h-10 rounded-lg border border-cosmic-cyan/30 bg-black/50 flex items-center justify-center text-cosmic-cyan relative overflow-hidden shrink-0",
                                                    children: [(0,
                                                    r.jsx)("div", {
                                                        className: "absolute inset-0 bg-cosmic-cyan/10"
                                                    }), (0,
                                                    r.jsx)("span", {
                                                        className: "text-sm lg:text-lg",
                                                        children: "🪐"
                                                    })]
                                                }), (0,
                                                r.jsxs)("div", {
                                                    children: [(0,
                                                    r.jsx)("div", {
                                                        className: "font-bold text-xs lg:text-sm text-cosmic-cyan",
                                                        children: t.id
                                                    }), (0,
                                                    r.jsxs)("div", {
                                                        className: "text-stardust text-[10px]",
                                                        children: ["Hàng ", t.row, " • Ghế ", t.col]
                                                    })]
                                                })]
                                            }), (0,
                                            r.jsxs)("div", {
                                                className: "text-white font-bold text-xs lg:text-sm flex items-center gap-1 relative z-10",
                                                children: [t.price, " ", (0,
                                                r.jsx)("span", {
                                                    children: (0,
                                                    r.jsx)("img", {
                                                        src: "/images/banhmi.png",
                                                        alt: "Banhmi",
                                                        className: "w-3 h-auto lg:w-4 inline-block"
                                                    })
                                                })]
                                            })]
                                        }, t.id))
                                    })
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex flex-col order-1 lg:order-2",
                                children: [(0,
                                r.jsx)("h3", {
                                    className: "text-stardust uppercase text-xs font-display font-bold tracking-widest mb-2 lg:mb-4",
                                    children: "Thông tin người đặt"
                                }), (0,
                                r.jsxs)("div", {
                                    className: "space-y-2 lg:space-y-3",
                                    children: [(0,
                                    r.jsx)("input", {
                                        type: "text",
                                        placeholder: "Họ và tên",
                                        className: "w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 lg:px-4 lg:py-3 text-lg lg:text-xl text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all font-sans",
                                        value: l.name,
                                        onChange: t => h({
                                            ...l,
                                            name: t.target.value
                                        })
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex gap-2 lg:gap-3",
                                        children: [(0,
                                        r.jsx)("input", {
                                            type: "text",
                                            placeholder: "Tên Rocket",
                                            className: "w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 lg:px-4 lg:py-3 text-lg lg:text-xl text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all font-sans",
                                            value: l.employeeId,
                                            onChange: t => h({
                                                ...l,
                                                employeeId: t.target.value
                                            })
                                        }), (0,
                                        r.jsx)("input", {
                                            type: "tel",
                                            placeholder: "Số điện thoại",
                                            className: "w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2 lg:px-4 lg:py-3 text-lg lg:text-xl text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-cyan focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all font-sans",
                                            value: l.phoneNumber,
                                            onChange: t => h({
                                                ...l,
                                                phoneNumber: t.target.value
                                            })
                                        })]
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "p-2 lg:p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl",
                                        children: (0,
                                        r.jsxs)("p", {
                                            className: "text-yellow-500 text-[10px] flex gap-2 items-center",
                                            children: [(0,
                                            r.jsx)("span", {
                                                children: "⚠️"
                                            }), "Nhập đúng thông tin ở Ownego của bạn để nhận discount từ Ban tổ chức"]
                                        })
                                    })]
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex flex-col justify-between order-3",
                                children: [(0,
                                r.jsxs)("div", {
                                    children: [(0,
                                    r.jsx)("h3", {
                                        className: "text-stardust uppercase text-xs font-bold font-display tracking-widest mb-2 lg:mb-4",
                                        children: "Thanh toán"
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex justify-between items-center mb-4 bg-white/5 p-3 lg:p-4 rounded-xl border border-white/10",
                                        children: [(0,
                                        r.jsx)("span", {
                                            className: "text-stardust text-sm font-display",
                                            children: "Tổng cộng"
                                        }), (0,
                                        r.jsxs)("div", {
                                            className: "text-right",
                                            children: [c && (0,
                                            r.jsx)("span", {
                                                className: "text-gray-500 line-through text-xs lg:text-sm mr-2",
                                                children: P
                                            }), (0,
                                            r.jsxs)("span", {
                                                className: "text-cosmic-cyan font-bold text-2xl lg:text-3xl text-shadow-glow flex items-center gap-2 justify-end",
                                                children: [C, " ", (0,
                                                r.jsx)("span", {
                                                    children: (0,
                                                    r.jsx)("img", {
                                                        src: "/images/banhmi.png",
                                                        alt: "Banhmi",
                                                        className: "w-5 h-auto lg:w-6 inline-block drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0,
                                r.jsx)(o.Button, {
                                    onClick: A,
                                    className: "btn-shiny w-full bg-gradient-to-r from-cosmic-purple to-cosmic-cyan text-white border-none py-3 lg:py-4 text-base lg:text-lg font-bold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-[1.02] transition-transform duration-300 rounded-xl font-display",
                                    disabled: 0 === s.length,
                                    children: "Xác nhận đặt vé"
                                })]
                            })]
                        })
                    })]
                })]
            }), k && (0,
            r.jsx)("div", {
                className: "fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300",
                children: (0,
                r.jsxs)("div", {
                    className: "bg-deep-space border border-cosmic-cyan/50 rounded-3xl w-full max-w-md p-8 relative shadow-[0_0_50px_rgba(6,182,212,0.3)] flex flex-col items-center",
                    children: [(0,
                    r.jsx)("button", {
                        onClick: E,
                        className: "absolute top-4 right-4 text-stardust hover:text-white transition-colors",
                        children: (0,
                        r.jsxs)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [(0,
                            r.jsx)("path", {
                                d: "M18 6L6 18"
                            }), (0,
                            r.jsx)("path", {
                                d: "M6 6l12 12"
                            })]
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "w-20 h-20 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mb-6 animate-bounce",
                        children: (0,
                        r.jsx)("svg", {
                            width: "40",
                            height: "40",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#22c55e",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: (0,
                            r.jsx)("polyline", {
                                points: "20 6 9 17 4 12"
                            })
                        })
                    }), (0,
                    r.jsx)("h2", {
                        className: "text-2xl font-display font-bold text-white uppercase tracking-wider mb-2 text-center",
                        children: "Đặt vé thành công!"
                    }), (0,
                    r.jsx)("p", {
                        className: "text-stardust text-center text-sm mb-8 whitespace-pre-line",
                        children: k.message
                    }), (0,
                    r.jsxs)("div", {
                        className: "w-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 relative overflow-hidden group hover:border-cosmic-cyan/50 transition-colors",
                        children: [(0,
                        r.jsx)("div", {
                            className: "absolute -top-10 -right-10 w-32 h-32 bg-cosmic-cyan/20 blur-[50px] rounded-full"
                        }), (0,
                        r.jsx)("div", {
                            className: "absolute -bottom-10 -left-10 w-32 h-32 bg-cosmic-purple/20 blur-[50px] rounded-full"
                        }), (0,
                        r.jsxs)("div", {
                            className: "flex justify-between items-start mb-6 relative z-10",
                            children: [(0,
                            r.jsxs)("div", {
                                children: [(0,
                                r.jsx)("h3", {
                                    className: "text-cosmic-cyan font-display font-bold text-lg tracking-widest",
                                    children: "OWNIVERSE 2025"
                                }), (0,
                                r.jsx)("p", {
                                    className: "text-white/60 text-xs uppercase",
                                    children: "Melorita Hòa Lạc • 09/01/2026"
                                })]
                            }), (0,
                            r.jsx)("img", {
                                src: "/images/ownego_logo.png",
                                alt: "Ownego",
                                className: "h-8 w-auto opacity-80"
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "space-y-4 relative z-10",
                            children: [(0,
                            r.jsxs)("div", {
                                children: [(0,
                                r.jsx)("p", {
                                    className: "text-stardust text-[10px] uppercase tracking-wider font-display",
                                    children: "Người tham dự"
                                }), (0,
                                r.jsx)("p", {
                                    className: "text-white font-bold text-lg",
                                    children: k.booking.user.name
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0,
                                r.jsxs)("div", {
                                    children: [(0,
                                    r.jsx)("p", {
                                        className: "text-stardust text-[10px] uppercase tracking-wider font-display",
                                        children: "Vị trí ghế"
                                    }), (0,
                                    r.jsx)("p", {
                                        className: "text-cosmic-cyan font-bold text-xl text-shadow-glow",
                                        children: k.booking.seats.map(t => t.id).join(", ")
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "text-right",
                                    children: [(0,
                                    r.jsx)("p", {
                                        className: "text-stardust text-[10px] uppercase tracking-wider font-display",
                                        children: "Ticket ID"
                                    }), (0,
                                    r.jsx)("p", {
                                        className: "text-white font-mono text-sm",
                                        children: k.booking.seats.map(t => t.id).join(", ")
                                    })]
                                })]
                            })]
                        })]
                    }), (0,
                    r.jsx)(o.Button, {
                        onClick: E,
                        className: "mt-8 w-full bg-white/10 hover:bg-white/20 text-white border border-white/20",
                        children: "Đóng & Tiếp tục"
                    })]
                })
            }), g && (0,
            r.jsx)("div", {
                className: "fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200",
                onClick: t => t.stopPropagation(),
                children: (0,
                r.jsxs)("div", {
                    className: "bg-black border border-white/10 rounded-3xl w-[400px] h-[400px] shadow-[0_0_50px_rgba(6,182,212,0.2)] flex flex-col items-center justify-center text-center p-8 relative",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-40 h-40 mb-2",
                        children: (0,
                        r.jsx)("img", {
                            src: "/images/cute_astronaut.png",
                            alt: "Only one ticket",
                            className: "w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        })
                    }), (0,
                    r.jsx)("h3", {
                        className: "text-2xl font-display font-bold text-white mb-2 uppercase tracking-wide",
                        children: "ÚI CHÀ CHÀ!"
                    }), (0,
                    r.jsx)("p", {
                        className: "text-gray-400 text-lg mb-8 font-sans",
                        children: "Mỗi thành viên chỉ được pick 1 ghế thôi nha"
                    }), (0,
                    r.jsx)("button", {
                        onClick: () => x(!1),
                        className: "bg-cosmic-cyan hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)] text-lg",
                        children: "Đã hiểu"
                    })]
                })
            }), v && (0,
            r.jsx)("div", {
                className: "fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200",
                onClick: t => t.stopPropagation(),
                children: (0,
                r.jsxs)("div", {
                    className: "bg-black border border-white/10 rounded-3xl w-[400px] aspect-square shadow-[0_0_50px_rgba(6,182,212,0.2)] flex flex-col items-center justify-center text-center p-8 relative",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-32 h-32 mb-6",
                        children: (0,
                        r.jsx)("img", {
                            src: "/images/mini_fig-removebg-preview.png",
                            alt: "Greedy",
                            className: "w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                        })
                    }), (0,
                    r.jsx)("h3", {
                        className: "text-xl font-bold text-cyan-400 mb-2 uppercase tracking-wide",
                        children: "ĐỒ THAM LAM =)))"
                    }), (0,
                    r.jsxs)("p", {
                        className: "text-stardust text-sm mb-6 px-6",
                        children: ["Bạn chỉ được mua 1 vé thôi, bạn đã mua vé ", (0,
                        r.jsx)("span", {
                            className: "font-mono font-bold text-white",
                            children: b
                        }), " rồi"]
                    }), (0,
                    r.jsx)("button", {
                        onClick: () => y(!1),
                        className: "bg-cosmic-cyan hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)]",
                        children: "Đã hiểu :))"
                    })]
                })
            }), M && (0,
            r.jsx)("div", {
                className: "fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200",
                onClick: t => t.stopPropagation(),
                children: (0,
                r.jsxs)("div", {
                    className: "bg-black border border-white/10 rounded-3xl w-[400px] shadow-[0_0_50px_rgba(6,182,212,0.2)] flex flex-col items-center justify-center text-center p-8 relative",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-40 h-40 mb-2",
                        children: (0,
                        r.jsx)("img", {
                            src: "/images/cute_astronaut.png",
                            alt: "Error",
                            className: "w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        })
                    }), (0,
                    r.jsx)("h3", {
                        className: "text-2xl font-display font-bold text-white mb-2 uppercase tracking-wide",
                        children: M.title
                    }), (0,
                    r.jsx)("p", {
                        className: "text-gray-400 text-lg mb-8 font-sans px-4 whitespace-pre-line",
                        children: M.message
                    }), (0,
                    r.jsx)("button", {
                        onClick: () => {
                            S(null),
                            N(t => t + 1),
                            n([])
                        }
                        ,
                        className: "bg-cosmic-cyan hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)] text-lg",
                        children: "Đã hiểu"
                    })]
                })
            })]
        })
    }
    ru.exports.create;
    var rf = t.i(95736);
    function rg() {
        let[t,e] = (0,
        a.useState)(!1)
          , [i,s] = (0,
        a.useState)(!1)
          , [n,o] = (0,
        a.useState)(!1);
        (0,
        a.useEffect)( () => {
            let t = () => {
                o(new Date().getTime() >= new Date("2025-12-29T14:30:00+07:00").getTime())
            }
            ;
            t();
            let e = setInterval(t, 1e3);
            return () => clearInterval(e)
        }
        , []),
        (0,
        a.useEffect)( () => {
            (async () => {
                try {
                    let t = await fetch("/api/bookings", {
                        cache: "no-store",
                        headers: {
                            Pragma: "no-cache",
                            "Cache-Control": "no-cache"
                        }
                    });
                    t.ok && ((await t.json()).reduce( (t, e) => t + (Array.isArray(e.seats) ? e.seats.length : 0), 0) >= 68 ? s(!0) : s(!1))
                } catch (t) {
                    console.error("Failed to check booking status", t)
                }
            }
            )()
        }
        , []);
        let l = () => e(!0);
        return (0,
        r.jsxs)("div", {
            className: "min-h-screen bg-black relative",
            children: [(0,
            r.jsx)(rf.StardustBackground, {}), (0,
            r.jsx)(h, {
                onBookTicket: l,
                isSoldOut: i,
                isBookingOpen: n
            }), (0,
            r.jsx)(c, {}), (0,
            r.jsx)(rl, {}), (0,
            r.jsx)(rh, {
                onBookTicket: l,
                isSoldOut: i,
                isBookingOpen: n
            }), (0,
            r.jsx)(rm, {
                isOpen: t,
                onClose: () => e(!1),
                isSoldOut: i
            })]
        })
    }
    t.s(["default", () => rg], 52683)
}
]);
