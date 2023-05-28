var cpu = '';
    var ula = '';
    var registradores = '';
    var ram = '';
    var rom = '';
    var eprom = '';
    var cpu = '';
    var flash = '';
    var memoriaDeMassa = '';
    var dma = '';
    var cs = '';
    var addressBus = '';
    var dataBus = '';
    var i5 = '';
    var i7 = '';
    var dualCore = '';
    var quadCore = '';
    var thread = '';
    var cache = '';

var principal = '#F3F3F3';
var verde = '#42d48b';
var vermelho = '#FF4949';

// ------------- cpu ------------------------------------------------------------------------
function validarPalavras(palavra1, palavra2, palavra3) {
    if (palavra1 == 'cpu' || palavra2 == 'cpu') {
        var c_cpu = document.getElementById('input_quadCore_cpu_c');
        var p_cpu = document.getElementById('input_cpu_p');
        var u_cpu = document.getElementById('input_ula_cpu_u');

        if (c_cpu.value.toLowerCase() == 'c' && p_cpu.value.toLowerCase() == 'p' && u_cpu.value.toLowerCase() == 'u') {
            c_cpu.style.backgroundColor = verde;
            p_cpu.style.backgroundColor = verde;
            u_cpu.style.backgroundColor = verde;
            palavra_1.style.color= 'white'
            palavra_1.style.textDecoration = 'line-through'
        } else {
            palavra_1.style.color= 'black'
            palavra_1.style.textDecoration = 'none'

            if (c_cpu.value.toLowerCase() == 'c') {
                c_cpu.style.backgroundColor = verde;
            } else if (c_cpu.value == '') {
                c_cpu.style.backgroundColor = principal;
            } else {
                c_cpu.style.backgroundColor = vermelho;
            }

            if (p_cpu.value.toLowerCase() == 'p') {
                p_cpu.style.backgroundColor = verde;
            } else if (p_cpu.value == '') {
                p_cpu.style.backgroundColor = principal;
            } else {
                p_cpu.style.backgroundColor = vermelho;
            }

            if (u_cpu.value.toLowerCase() == 'u') {
                u_cpu.style.backgroundColor = verde;
            } else if (u_cpu.value == '') {
                u_cpu.style.backgroundColor = principal;
            } else {
                u_cpu.style.backgroundColor = vermelho;
            }
        }

        // ----------------- ula ------------------------------------------------------
    } else if (palavra1 == 'ula' || palavra2 == 'ula') {
        var u_ula = document.getElementById('input_ula_cpu_u');
        var l_ula = document.getElementById('input_ula_l');
        var a_ula = document.getElementById('input_ula_a');

        if (u_ula.value.toLowerCase() == 'u' && l_ula.value.toLowerCase() == 'l' && a_ula.value.toLowerCase() == 'a') {
            // u_ula.style.backgroundColor = verde;
            l_ula.style.backgroundColor = verde;
            a_ula.style.backgroundColor = verde;

            palavra_2.style.color= 'white'
            palavra_2.style.textDecoration = 'line-through'
        } else {
            palavra_2.style.color= 'black'
            palavra_2.style.textDecoration = 'none'

            if (l_ula.value.toLowerCase() == 'l') {
                l_ula.style.backgroundColor = verde;
            } else if (l_ula.value == '') {
                l_ula.style.backgroundColor = principal;
            } else {
                l_ula.style.backgroundColor = vermelho;
            }

            if (a_ula.value.toLowerCase() == 'a') {
                a_ula.style.backgroundColor = verde;
            } else if (a_ula.value == '') {
                a_ula.style.backgroundColor = principal;
            } else {
                a_ula.style.backgroundColor = vermelho;
            }
        }

        // ---------------- registradores ----------------------------------------
    } else if (palavra1 == 'registradores' || palavra2 == 'registradores') {
        var r1_registradores = document.getElementById('input_registradores_address_r');
        var e1_registradores = document.getElementById('input_registradores_e');
        var g_registradores = document.getElementById('input_registradores_g');
        var i_registradores = document.getElementById('input_registradores_i5_i');
        var s1_registradores = document.getElementById('input_registradores_s');
        var t_registradores = document.getElementById('input_registradores_t');
        var r2_registradores = document.getElementById('input_registradores_r2');
        var a_registradores = document.getElementById('input_registradores_flash_a');
        var d_registradores = document.getElementById('input_registradores_d');
        var o_registradores = document.getElementById('input_registradores_rom_o');
        var r3_registradores = document.getElementById('input_registradores_r3');
        var e2_registradores = document.getElementById('input_registradores_eprom_e');
        var s2_registradores = document.getElementById('input_registradores_cs_s');

        if (r1_registradores.value.toLowerCase() == 'r' && e1_registradores.value.toLowerCase() == 'e'
            && g_registradores.value.toLowerCase() == 'g' && i_registradores.value.toLowerCase() == 'i'
            && s1_registradores.value.toLowerCase() == 's' && t_registradores.value.toLowerCase() == 't'
            && r2_registradores.value.toLowerCase() == 'r' && a_registradores.value.toLowerCase() == 'a'
            && d_registradores.value.toLowerCase() == 'd' && o_registradores.value.toLowerCase() == 'o'
            && r3_registradores.value.toLowerCase() == 'r' && e2_registradores.value.toLowerCase() == 'e'
            && s2_registradores.value.toLowerCase() == 's') {
            r1_registradores.style.backgroundColor = verde;
            e1_registradores.style.backgroundColor = verde;
            g_registradores.style.backgroundColor = verde;
            i_registradores.style.backgroundColor = verde;
            s1_registradores.style.backgroundColor = verde;
            r2_registradores.style.backgroundColor = verde;
            a_registradores.style.backgroundColor = verde;
            d_registradores.style.backgroundColor = verde;
            o_registradores.style.backgroundColor = verde;
            r3_registradores.style.backgroundColor = verde;
            e2_registradores.style.backgroundColor = verde;
            s2_registradores.style.backgroundColor = verde;
            registradores = 1;
        } else {
            if (r1_registradores.value.toLowerCase() == 'r') {
                r1_registradores.style.backgroundColor = verde;
            } else if (r1_registradores.value == '') {
                r1_registradores.style.backgroundColor = principal;
            } else {
                r1_registradores.style.backgroundColor = vermelho;
            }

            if (e1_registradores.value.toLowerCase() == 'e') {
                e1_registradores.style.backgroundColor = verde;
            } else if (e1_registradores.value == '') {
                e1_registradores.style.backgroundColor = principal;
            } else {
                e1_registradores.style.backgroundColor = vermelho;
            }

            if (g_registradores.value.toLowerCase() == 'g') {
                g_registradores.style.backgroundColor = verde;
            } else if (g_registradores.value == '') {
                g_registradores.style.backgroundColor = principal;
            } else {
                g_registradores.style.backgroundColor = vermelho;
            }

            if (i_registradores.value.toLowerCase() == 'i') {
                i_registradores.style.backgroundColor = verde;
            } else if (i_registradores.value == '') {
                i_registradores.style.backgroundColor = principal;
            } else {
                i_registradores.style.backgroundColor = vermelho;
            }

            if (s1_registradores.value.toLowerCase() == 's') {
                s1_registradores.style.backgroundColor = verde;
            } else if (s1_registradores.value == '') {
                s1_registradores.style.backgroundColor = principal;
            } else {
                s1_registradores.style.backgroundColor = vermelho;
            }

            if (t_registradores.value.toLowerCase() == 't') {
                t_registradores.style.backgroundColor = verde;
            } else if (t_registradores.value == '') {
                t_registradores.style.backgroundColor = principal;
            } else {
                t_registradores.style.backgroundColor = vermelho;
            }

            if (r2_registradores.value.toLowerCase() == 'r') {
                r2_registradores.style.backgroundColor = verde;
            } else if (r2_registradores.value == '') {
                r2_registradores.style.backgroundColor = principal;
            } else {
                r2_registradores.style.backgroundColor = vermelho;
            }

            if (a_registradores.value.toLowerCase() == 'a') {
                a_registradores.style.backgroundColor = verde;
            } else if (a_registradores.value == '') {
                a_registradores.style.backgroundColor = principal;
            } else {
                a_registradores.style.backgroundColor = vermelho;
            }

            if (d_registradores.value.toLowerCase() == 'd') {
                d_registradores.style.backgroundColor = verde;
            } else if (d_registradores.value == '') {
                d_registradores.style.backgroundColor = principal;
            } else {
                d_registradores.style.backgroundColor = vermelho;
            }

            if (o_registradores.value.toLowerCase() == 'o') {
                o_registradores.style.backgroundColor = verde;
            } else if (o_registradores.value == '') {
                o_registradores.style.backgroundColor = principal;
            } else {
                o_registradores.style.backgroundColor = vermelho;
            }

            if (r3_registradores.value.toLowerCase() == 'r') {
                r3_registradores.style.backgroundColor = verde;
            } else if (r3_registradores.value == '') {
                r3_registradores.style.backgroundColor = principal;
            } else {
                r3_registradores.style.backgroundColor = vermelho;
            }

            if (e2_registradores.value.toLowerCase() == 'e') {
                e2_registradores.style.backgroundColor = verde;
            } else if (e2_registradores.value == '') {
                e2_registradores.style.backgroundColor = principal;
            } else {
                e2_registradores.style.backgroundColor = vermelho;
            }

            if (s2_registradores.value.toLowerCase() == 's') {
                s2_registradores.style.backgroundColor = verde;
            } else if (s2_registradores.value == '') {
                s2_registradores.style.backgroundColor = principal;
            } else {
                s2_registradores.style.backgroundColor = vermelho;
            }
        }
        // --------------- ram --------------------------------------
    } else if (palavra1 == 'ram' || palavra2 == 'ram') {
        var r_ram = document.getElementById('input_ram_r');
        var a_ram = document.getElementById('input_ram_address_a');
        var m_ram = document.getElementById('input_ram_m');

        if (r_ram.value.toLowerCase() == 'r' && a_ram.value.toLowerCase() == 'a' && m_ram.value.toLowerCase() == 'm') {
            r_ram.style.backgroundColor = ' ';
            a_ram.style.backgroundColor = verde;
            m_ram.style.backgroundColor = verde;
            rom = r_ram.value.toLowerCase() + a_ram.value.toLowerCase() + m_ram.value.toLowerCase();
        } else {
            if (r_ram.value.toLowerCase() == 'r') {
                r_ram.style.backgroundColor = verde;
            } else if (r_ram.value == '') {
                r_ram.style.backgroundColor = principal;
            } else {
                r_ram.style.backgroundColor = vermelho;
            }

            if (a_ram.value.toLowerCase() == 'a') {
                a_ram.style.backgroundColor = verde;
            } else if (a_ram.value == '') {
                a_ram.style.backgroundColor = principal;
            } else {
                a_ram.style.backgroundColor = vermelho;
            }

            if (m_ram.value.toLowerCase() == 'm') {
                m_ram.style.backgroundColor = verde;
            } else if (m_ram.value == '') {
                m_ram.style.backgroundColor = principal;
            } else {
                m_ram.style.backgroundColor = vermelho;
            }
        }

// ------------------------- rom ----------------------------------
    } else if (palavra1 == 'rom' || palavra2 == 'rom') {
        var r_rom = document.getElementById('input_rom_r');
        var o_rom = document.getElementById('input_registradores_rom_o');
        var m_rom = document.getElementById('input_rom_m');

        if (r_rom.value.toLowerCase() == 'r' && o_rom.value.toLowerCase() == 'o' && m_rom.value.toLowerCase() == 'm') {
            r_rom.style.backgroundColor = verde;
            o_rom.style.backgroundColor = verde;
            m_rom.style.backgroundColor = verde;
            rom = r_rom.value.toLowerCase() + o_rom.value.toLowerCase() + m_rom.value.toLowerCase();
        } else {
            if (r_rom.value.toLowerCase() == 'r') {
                r_rom.style.backgroundColor = verde;
            } else if (r_rom.value == '') {
                r_rom.style.backgroundColor = principal;
            } else {
                r_rom.style.backgroundColor = vermelho;
            }

            if (o_rom.value.toLowerCase() == 'o') {
                o_rom.style.backgroundColor = verde;
            } else if (o_rom.value == '') {
                o_rom.style.backgroundColor = principal;
            } else {
                o_rom.style.backgroundColor = vermelho;
            }

            if (m_rom.value.toLowerCase() == 'm') {
                m_rom.style.backgroundColor = verde;
            } else if (m_rom.value == '') {
                m_rom.style.backgroundColor = principal;
            } else {
                m_rom.style.backgroundColor = vermelho;
            }
        }

    // ------------------- eprom --------------------------
    } else if (palavra1 == 'eprom' || palavra2 == 'eprom') {
        var e_eprom = document.getElementById('input_registradores_eprom_e');
        var p_eprom = document.getElementById('input_eprom_p');
        var r_eprom = document.getElementById('input_eprom_r');
        var o_eprom = document.getElementById('input_eprom_o');
        var m_eprom = document.getElementById('input_eprom_m');

        if (e_eprom.value.toLowerCase() == 'e' && p_eprom.value.toLowerCase() == 'p' 
        && r_eprom.value.toLowerCase() == 'r' && o_eprom.value.toLowerCase() == 'o' 
        && m_eprom.value.toLowerCase() == 'm'){
            e_eprom.style.backgroundColor = verde
            p_eprom.style.backgroundColor = verde
            r_eprom.style.backgroundColor = verde
            o_eprom.style.backgroundColor = verde
            m_eprom.style.backgroundColor = verde
        } else {
            if (p_eprom.value.toLowerCase() == 'p') {
                p_eprom.style.backgroundColor = verde;
            } else if (p_eprom.value == '') {
                p_eprom.style.backgroundColor = principal;
            } else {
                p_eprom.style.backgroundColor = vermelho;
            }

            if (p_eprom.value.toLowerCase() == 'p') {
                p_eprom.style.backgroundColor = verde;
            } else if (p_eprom.value == '') {
                p_eprom.style.backgroundColor = principal;
            } else {
                p_eprom.style.backgroundColor = vermelho;
            }

            if (r_eprom.value.toLowerCase() == 'r') {
                r_eprom.style.backgroundColor = verde;
            } else if (r_eprom.value == '') {
                r_eprom.style.backgroundColor = principal;
            } else {
                r_eprom.style.backgroundColor = vermelho;
            }

            if (o_eprom.value.toLowerCase() == 'o') {
                o_eprom.style.backgroundColor = verde;
            } else if (o_eprom.value == '') {
                o_eprom.style.backgroundColor = principal;
            } else {
                o_eprom.style.backgroundColor = vermelho;
            }

            if (m_eprom.value.toLowerCase() == 'm') {
                m_eprom.style.backgroundColor = verde;
            } else if (m_eprom.value == '') {
                m_eprom.style.backgroundColor = principal;
            } else {
                m_eprom.style.backgroundColor = vermelho;
            }
        }
    // ------------------- flash --------------------------
    } else if (palavra1 == 'flash' || palavra2 == 'flash') {
        var f_flash = document.getElementById('input_flash_f');
        var l_flash = document.getElementById('input_flash_l');
        var a_flash = document.getElementById('input_registradores_flash_a');
        var s_flash = document.getElementById('input_flash_s');
        var h_flash = document.getElementById('input_flash_h'); 

        if (f_flash.value.toLowerCase() == 'f' && l_flash.value.toLowerCase() == 'l' 
        && a_flash.value.toLowerCase() == 'a' && s_flash.value.toLowerCase() == 's' 
        && h_flash.value.toLowerCase() == 'h'){
            f_flash.style.backgroundColor = verde
            l_flash.style.backgroundColor = verde
            a_flash.style.backgroundColor = verde
            s_flash.style.backgroundColor = verde
            h_flash.style.backgroundColor = verde
        } else {
            if (f_flash.value.toLowerCase() == 'f') {
                f_flash.style.backgroundColor = verde;
            } else if (f_flash.value == '') {
                f_flash.style.backgroundColor = principal;
            } else {
                f_flash.style.backgroundColor = vermelho;
            }

            if (l_flash.value.toLowerCase() == 'l') {
                l_flash.style.backgroundColor = verde;
            } else if (l_flash.value == '') {
                l_flash.style.backgroundColor = principal;
            } else {
                l_flash.style.backgroundColor = vermelho;
            }

            if (a_flash.value.toLowerCase() == 'a') {
                a_flash.style.backgroundColor = verde;
            } else if (r_flash.value == '') {
                a_flash.style.backgroundColor = principal;
            } else {
                a_flash.style.backgroundColor = vermelho;
            }

            if (s_flash.value.toLowerCase() == 's') {
                s_flash.style.backgroundColor = verde;
            } else if (s_flash.value == '') {
                s_flash.style.backgroundColor = principal;
            } else {
                s_flash.style.backgroundColor = vermelho;
            }

            if (h_flash.value.toLowerCase() == 'h') {
                h_flash.style.backgroundColor = verde;
            } else if (h_flash.value == '') {
                h_flash.style.backgroundColor = principal;
            } else {
                h_flash.style.backgroundColor = vermelho;
            }
        }
    // ------------------- memoriaDeMassa --------------------------
    } else if (palavra1 == 'memoriaDeMassa' || palavra2 == 'memoriaDeMassa') {
        var m1_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_m1');
        var e1_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_e1');
        var m2_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_m2');
        var o_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_o');
        var r_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_r'); ///
        var i7_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_i7_i');
        var a1_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_a1');
        var d_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_d');
        var e2_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_e2');
        var m3_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_m3'); 
        var a_dtbus_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_dataBus_a');
        var s1_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_s1');
        var s2_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_s2');
        var a2_memoriaDeMassa = document.getElementById('input_memoriaDeMassa_a2');
        
        if (m1_memoriaDeMassa.value.toLowerCase() == 'm' && e1_memoriaDeMassa.value.toLowerCase() == 'e'
            && m2_memoriaDeMassa.value.toLowerCase() == 'm' && ( o_memoriaDeMassa.value.toLowerCase() == 'o' || 
            o_memoriaDeMassa.value.toLowerCase() == 'ó')
            && r_memoriaDeMassa.value.toLowerCase() == 'r' && i7_memoriaDeMassa.value.toLowerCase() == 'i'
            && a1_memoriaDeMassa.value.toLowerCase() == 'a' && d_memoriaDeMassa.value.toLowerCase() == 'd'
            && e2_memoriaDeMassa.value.toLowerCase() == 'e' && m3_memoriaDeMassa.value.toLowerCase() == 'm'
            && a_dtbus_memoriaDeMassa.value.toLowerCase() == 'a' && s1_memoriaDeMassa.value.toLowerCase() == 's'
            && s2_memoriaDeMassa.value.toLowerCase() == 's' && a2_memoriaDeMassa.value.toLowerCase() == 'a') {
            m1_memoriaDeMassa.style.backgroundColor = verde;
            e1_memoriaDeMassa.style.backgroundColor = verde;
            m2_memoriaDeMassa.style.backgroundColor = verde;
            o_memoriaDeMassa.style.backgroundColor = verde;
            r_memoriaDeMassa.style.backgroundColor = verde;
            i7_memoriaDeMassa.style.backgroundColor = verde;
            a1_memoriaDeMassa.style.backgroundColor = verde;
            d_memoriaDeMassa.style.backgroundColor = verde;
            e2_memoriaDeMassa.style.backgroundColor = verde;
            m3_memoriaDeMassa.style.backgroundColor = verde;
            a_dtbus_memoriaDeMassa.style.backgroundColor = verde;
            s1_memoriaDeMassa.style.backgroundColor = verde;
            s2_memoriaDeMassa.style.backgroundColor = verde;
            a2_memoriaDeMassa.style.backgroundColor = verde;
            
            memoriaDeMassa = 1;
        } else {
            if (m1_memoriaDeMassa.value.toLowerCase() == 'm') {
                m1_memoriaDeMassa.style.backgroundColor = verde;
            } else if (m1_memoriaDeMassa.value == '') {
                m1_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                m1_memoriaDeMassa.style.backgroundColor = vermelho;
            }

            if (e1_memoriaDeMassa.value.toLowerCase() == 'e') {
                e1_memoriaDeMassa.style.backgroundColor = verde;
            } else if (e1_memoriaDeMassa.value == '') {
                e1_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                e1_memoriaDeMassa.style.backgroundColor = vermelho;
            }

            if (m2_memoriaDeMassa.value.toLowerCase() == 'm') {
                m2_memoriaDeMassa.style.backgroundColor = verde;
            } else if (m2_memoriaDeMassa.value == '') {
                m2_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                m2_memoriaDeMassa.style.backgroundColor = vermelho;
            }

            if (o_memoriaDeMassa.value.toLowerCase() == 'o' || o_memoriaDeMassa.value.toLowerCase() == 'ó') {
                o_memoriaDeMassa.style.backgroundColor = verde;
            } else if (o_memoriaDeMassa.value == '') {
                o_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                o_memoriaDeMassa.style.backgroundColor = vermelho;
            }

            if (r_memoriaDeMassa.value.toLowerCase() == 'r') {
                r_memoriaDeMassa.style.backgroundColor = verde;
            } else if (r_memoriaDeMassa.value == '') {
                r_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                r_memoriaDeMassa.style.backgroundColor = vermelho;
            }

            if (i7_memoriaDeMassa.value.toLowerCase() == 'i') {
                i7_memoriaDeMassa.style.backgroundColor = verde;
            } else if (i7_memoriaDeMassa.value == '') {
                i7_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                i7_memoriaDeMassa.style.backgroundColor = vermelho;
            }

            if (a1_memoriaDeMassa.value.toLowerCase() == 'a') {
                a1_memoriaDeMassa.style.backgroundColor = verde;
            } else if (a1_memoriaDeMassa.value == '') {
                a1_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                a1_memoriaDeMassa.style.backgroundColor = vermelho;
            }

            if (d_memoriaDeMassa.value.toLowerCase() == 'd') {
                d_memoriaDeMassa.style.backgroundColor = verde;
            } else if (d_memoriaDeMassa.value == '') {
                d_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                d_memoriaDeMassa.style.backgroundColor = vermelho;
            }

            if (e2_memoriaDeMassa.value.toLowerCase() == 'e') {
                e2_memoriaDeMassa.style.backgroundColor = verde;
            } else if (e2_memoriaDeMassa.value == '') {
                e2_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                e2_memoriaDeMassa.style.backgroundColor = vermelho;
            }

            if (m3_memoriaDeMassa.value.toLowerCase() == 'm') {
                m3_memoriaDeMassa.style.backgroundColor = verde;
            } else if (m3_memoriaDeMassa.value == '') {
                m3_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                m3_memoriaDeMassa.style.backgroundColor = vermelho;
            }

            if (a_dtbus_memoriaDeMassa.value.toLowerCase() == 'a') {
                a_dtbus_memoriaDeMassa.style.backgroundColor = verde;
            } else if (a_dtbus_memoriaDeMassa.value == '') {
                a_dtbus_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                a_dtbus_memoriaDeMassa.style.backgroundColor = vermelho;
            }

            if (s1_memoriaDeMassa.value.toLowerCase() == 's') {
                s1_memoriaDeMassa.style.backgroundColor = verde;
            } else if (s1_memoriaDeMassa.value == '') {
                s1_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                s1_memoriaDeMassa.style.backgroundColor = vermelho;
            }

            if (s2_memoriaDeMassa.value.toLowerCase() == 's') {
                s2_memoriaDeMassa.style.backgroundColor = verde;
            } else if (s2_memoriaDeMassa.value == '') {
                s2_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                s2_memoriaDeMassa.style.backgroundColor = vermelho;
            }
            
            if (a2_memoriaDeMassa.value.toLowerCase() == 'a') {
                a2_memoriaDeMassa.style.backgroundColor = verde;
            } else if (a2_memoriaDeMassa.value == '') {
                a2_memoriaDeMassa.style.backgroundColor = principal;
            } else {
                a2_memoriaDeMassa.style.backgroundColor = vermelho;
            }
        }

    // ------------------- dma --------------------------  
    } else if(palavra1 == 'dma' || palavra2 == 'dma'){
        var d_dma = document.getElementById('input_dualCore_dma_d');
        var m_dma = document.getElementById('input_dma_m');
        var a_dma = document.getElementById('input_dma_a');

        if (d_dma.value.toLowerCase() == 'd' && m_dma.value.toLowerCase() == 'm' && a_dma.value.toLowerCase() == 'a') {
            d_dma.style.backgroundColor = verde;
            m_dma.style.backgroundColor = verde;
            a_dma.style.backgroundColor = verde;
        } else {
            if (d_dma.value.toLowerCase() == 'd') {
                d_dma.style.backgroundColor = verde;
            } else if (d_dma.value == '') {
                d_dma.style.backgroundColor = principal;
            } else {
                d_dma.style.backgroundColor = vermelho;
            }

            if (m_dma.value.toLowerCase() == 'm') {
                m_dma.style.backgroundColor = verde;
            } else if (m_dma.value == '') {
                m_dma.style.backgroundColor = principal;
            } else {
                m_dma.style.backgroundColor = vermelho;
            }

            if (a_dma.value.toLowerCase() == 'a') {
                a_dma.style.backgroundColor = verde;
            } else if (a_dma.value == '') {
                a_dma.style.backgroundColor = principal;
            } else {
                a_dma.style.backgroundColor = vermelho;
            }
        }
    }
    // ------------------------- cs ----------------------------------
    else if (palavra1 == 'cs' || palavra2 == 'cs') {
        var c_cs = document.getElementById('input_cs_c');
        var s_cs = document.getElementById('input_registradores_cs_s');

        if (c_cs.value.toLowerCase() == 'c' && s_cs.value.toLowerCase() == 's') {
            c_cs.style.backgroundColor = verde;
        } else {
            if (c_cs.value.toLowerCase() == 'c') {
                c_cs.style.backgroundColor = verde;
            } else if (c_cs.value == '') {
                c_cs.style.backgroundColor = principal;
            } else {
                c_cs.style.backgroundColor = vermelho;
            }
        }
    // ------------------------- addressBus ----------------------------------
    } else if (palavra1 == 'addressBus' || palavra2 == 'addressBus') {
        var a_adressBus = document.getElementById('input_ram_address_a');
        var d1_adressBus = document.getElementById('input_addressBus_d1');
        var d2_adressBus = document.getElementById('input_addressBus_d2');
        var r_adressBus = document.getElementById('input_registradores_address_r');
        var e_adressBus = document.getElementById('input_cache_address_e');
        var s1_adressBus = document.getElementById('input_addressBus_s1');
        var s2_adressBus = document.getElementById('input_addressBus_s2');
        var b_adressBus = document.getElementById('input_addressBus_b');
        var u_adressBus = document.getElementById('input_addressBus_u');
        var s3_adressBus = document.getElementById('input_addressBus_s3');

        if (a_adressBus.value.toLowerCase() == 'a' && d1_adressBus.value.toLowerCase() == 'd' 
        && d2_adressBus.value.toLowerCase() == 'd' && r_adressBus.value.toLowerCase() == 'r'
        && e_adressBus.value.toLowerCase() == 'e' && s1_adressBus.value.toLowerCase() == 's'
        && s2_adressBus.value.toLowerCase() == 's' && b_adressBus.value.toLowerCase() == 'b'
        && u_adressBus.value.toLowerCase() == 'u' && s3_adressBus.value.toLowerCase() == 's') {
            a_adressBus.style.backgroundColor = verde;
            d1_adressBus.style.backgroundColor = verde;
            d2_adressBus.style.backgroundColor = verde;
            e_adressBus.style.backgroundColor = verde;
            s1_adressBus.style.backgroundColor = verde;
            s2_adressBus.style.backgroundColor = verde;
            b_adressBus.style.backgroundColor = verde;
            u_adressBus.style.backgroundColor = verde;
            s3_adressBus.style.backgroundColor = verde;
        } else {
            if (d1_adressBus.value.toLowerCase() == 'd') {
                d1_adressBus.style.backgroundColor = verde;
            } else if (d1_adressBus.value == '') {
                d1_adressBus.style.backgroundColor = principal;
            } else {
                d1_adressBus.style.backgroundColor = vermelho;
            }

            if (d2_adressBus.value.toLowerCase() == 'd') {
                d2_adressBus.style.backgroundColor = verde;
            } else if (d2_adressBus.value == '') {
                d2_adressBus.style.backgroundColor = principal;
            } else {
                d2_adressBus.style.backgroundColor = vermelho;
            }

            if (e_adressBus.value.toLowerCase() == 'e') {
                e_adressBus.style.backgroundColor = verde;
            } else if (e_adressBus.value == '') {
                e_adressBus.style.backgroundColor = principal;
            } else {
                e_adressBus.style.backgroundColor = vermelho;
            }
            
            if (s1_adressBus.value.toLowerCase() == 's') {
                s1_adressBus.style.backgroundColor = verde;
            } else if (s1_adressBus.value == '') {
                s1_adressBus.style.backgroundColor = principal;
            } else {
                s1_adressBus.style.backgroundColor = vermelho;
            }

            if (s2_adressBus.value.toLowerCase() == 's') {
                s2_adressBus.style.backgroundColor = verde;
            } else if (s2_adressBus.value == '') {
                s2_adressBus.style.backgroundColor = principal;
            } else {
                s2_adressBus.style.backgroundColor = vermelho;
            }

            if (b_adressBus.value.toLowerCase() == 'b') {
                b_adressBus.style.backgroundColor = verde;
            } else if (b_adressBus.value == '') {
                b_adressBus.style.backgroundColor = principal;
            } else {
                b_adressBus.style.backgroundColor = vermelho;
            }

            if (u_adressBus.value.toLowerCase() == 'u') {
                u_adressBus.style.backgroundColor = verde;
            } else if (u_adressBus.value == '') {
                u_adressBus.style.backgroundColor = principal;
            } else {
                u_adressBus.style.backgroundColor = vermelho;
            }

            if (s3_adressBus.value.toLowerCase() == 's') {
                s3_adressBus.style.backgroundColor = verde;
            } else if (s3_adressBus.value == '') {
                s3_adressBus.style.backgroundColor = principal;
            } else {
                s3_adressBus.style.backgroundColor = vermelho;
            }

            
        } 
        // ---------------------dataBus ------------------------------------------
    }else if (palavra1 == 'dataBus' || palavra2 == 'dataBus' || palavra3 == 'dataBus') {
        var d_dataBus = document.getElementById('input_dataBus_d');
        var a1_dataBus = document.getElementById('input_memoriaDeMassa_dataBus_a');
        var t_dataBus = document.getElementById('input_dataBus_t');
        var a2_dataBus = document.getElementById('input_dualCore_dataBus_a');
        var b_dataBus = document.getElementById('input_dataBus_b');
        var u_dataBus = document.getElementById('input_quadCore_dataBus_u');
        var s_dataBus = document.getElementById('input_dataBus_s');

        if (d_dataBus.value.toLowerCase() == 'd' && a1_dataBus.value.toLowerCase() == 'a' 
        && t_dataBus.value.toLowerCase() == 't' && a2_dataBus.value.toLowerCase() == 'a'
         && b_dataBus.value.toLowerCase() == 'b'&& u_dataBus.value.toLowerCase() == 'u' 
         && s_dataBus.value.toLowerCase() == 's') {
            d_dataBus.style.backgroundColor = verde;
            a1_dataBus.style.backgroundColor = verde;
            t_dataBus.style.backgroundColor = verde;
            a2_dataBus.style.backgroundColor = verde;
            b_dataBus.style.backgroundColor = verde;
            u_dataBus.style.backgroundColor = verde;
            s_dataBus.style.backgroundColor = verde;
        } else {
            if (d_dataBus.value.toLowerCase() == 'd') {
                d_dataBus.style.backgroundColor = verde;
            } else if (d_dataBus.value == '') {
                d_dataBus.style.backgroundColor = principal;
            } else {
                d_dataBus.style.backgroundColor = vermelho;
            }

            if (a1_dataBus.value.toLowerCase() == 'a') {
                a1_dataBus.style.backgroundColor = verde;
            } else if (a1_dataBus.value == '') {
                a1_dataBus.style.backgroundColor = principal;
            } else {
                a1_dataBus.style.backgroundColor = vermelho;
            }

            if (t_dataBus.value.toLowerCase() == 't') {
                t_dataBus.style.backgroundColor = verde;
            } else if (t_dataBus.value == '') {
                t_dataBus.style.backgroundColor = principal;
            } else {
                t_dataBus.style.backgroundColor = vermelho;
            }
            
            if (a2_dataBus.value.toLowerCase() == 'a') {
                a2_dataBus.style.backgroundColor = verde;
            } else if (a2_dataBus.value == '') {
                a2_dataBus.style.backgroundColor = principal;
            } else {
                a2_dataBus.style.backgroundColor = vermelho;
            }

            if (b_dataBus.value.toLowerCase() == 'b') {
                b_dataBus.style.backgroundColor = verde;
            } else if (b_dataBus.value == '') {
                b_dataBus.style.backgroundColor = principal;
            } else {
                b_dataBus.style.backgroundColor = vermelho;
            }

            if (u_dataBus.value.toLowerCase() == 'u') {
                u_dataBus.style.backgroundColor = verde;
            } else if (u_dataBus.value == '') {
                u_dataBus.style.backgroundColor = principal;
            } else {
                u_dataBus.style.backgroundColor = vermelho;
            }

            if (s_dataBus.value.toLowerCase() == 's') {
                s_dataBus.style.backgroundColor = verde;
            } else if (s_dataBus.value == '') {
                s_dataBus.style.backgroundColor = principal;
            } else {
                s_dataBus.style.backgroundColor = vermelho;
            }
        }  
        
    // ------------------------- i5 ----------------------------------
    } else if (palavra1 == 'i5' || palavra2 == 'i5') {
        var i_i5 = document.getElementById('input_registradores_i5_i');
        var i5_5 = document.getElementById('input_i5_5');

        if (i_i5.value.toLowerCase() == 'i' && i5_5.value.toLowerCase() == '5') {
            i5_5.style.backgroundColor = verde;
        } else {
            if (i5_5.value.toLowerCase() == '5') {
                i5_5.style.backgroundColor = verde;
            } else if (i5_5.value == '') {
                i5_5.style.backgroundColor = principal;
            } else {
                i5_5.style.backgroundColor = vermelho;
            }
        }

    // ------------------------- i7 ----------------------------------
    } else if (palavra1 == 'i7' || palavra2 == 'i7') {
        var i_i7 = document.getElementById('input_memoriaDeMassa_i7_i');
        var i7_7 = document.getElementById('input_i7_7');

        if (i_i7.value.toLowerCase() == 'i' && Number(i7_7.value) == 7) {
            i7_7.style.backgroundColor = verde;
        } else {
            if (i7_7.value.toLowerCase() == '7') {
                i7_7.style.backgroundColor = verde;
            } else if (i7_7.value == '') {
                i7_7.style.backgroundColor = principal;
            } else {
                i7_7.style.backgroundColor = vermelho;
            }
        }
    // ---------------- dualCore ----------------------------------------
    } else if(palavra1 == 'dualCore' || palavra2 == 'dualCore'){
        var d_dualCore = document.getElementById('input_dualCore_dma_d');
        var u_dualCore = document.getElementById('input_dualCore_u');
        var a_dualCore = document.getElementById('input_dualCore_dataBus_a');
        var l_dualCore = document.getElementById('input_dualCore_l');
        var c_dualCore = document.getElementById('input_dualCore_c');
        var o_dualCore = document.getElementById('input_dualCore_o');
        var r_dualCore = document.getElementById('input_dualCore_r');
        var e_dualCore = document.getElementById('input_dualCore_e');  

       if (d_dualCore.value.toLowerCase() == 'd' && u_dualCore.value.toLowerCase() == 'u' 
        && a_dualCore.value.toLowerCase() == 'a' && l_dualCore.value.toLowerCase() == 'l'
         && c_dualCore.value.toLowerCase() == 'c'&& o_dualCore.value.toLowerCase() == 'o' 
         && r_dualCore.value.toLowerCase() == 'r' && e_dualCore.value.toLowerCase() == 'e') {
            d_dualCore.style.backgroundColor = verde;
            u_dualCore.style.backgroundColor = verde;
            a_dualCore.style.backgroundColor = verde;
            l_dualCore.style.backgroundColor = verde;
            c_dualCore.style.backgroundColor = verde;
            o_dualCore.style.backgroundColor = verde;
            r_dualCore.style.backgroundColor = verde;
            e_dualCore.style.backgroundColor = verde;

        } else {
            if (d_dualCore.value.toLowerCase() == 'd') {
                d_dualCore.style.backgroundColor = verde;
            } else if (d_dualCore.value == '') {
                d_dualCore.style.backgroundColor = principal;
            } else {
                d_dualCore.style.backgroundColor = vermelho;
            }

            if (u_dualCore.value.toLowerCase() == 'u') {
                u_dualCore.style.backgroundColor = verde;
            } else if (u_dualCore.value == '') {
                u_dualCore.style.backgroundColor = principal;
            } else {
                u_dualCore.style.backgroundColor = vermelho;
            }

            if (a_dualCore.value.toLowerCase() == 'a') {
                a_dualCore.style.backgroundColor = verde;
            } else if (a_dualCore.value == '') {
                a_dualCore.style.backgroundColor = principal;
            } else {
                a_dualCore.style.backgroundColor = vermelho;
            }
            
            if (l_dualCore.value.toLowerCase() == 'l') {
                l_dualCore.style.backgroundColor = verde;
            } else if (l_dualCore.value == '') {
                l_dualCore.style.backgroundColor = principal;
            } else {
                l_dualCore.style.backgroundColor = vermelho;
            }

            if (c_dualCore.value.toLowerCase() == 'c') {
                c_dualCore.style.backgroundColor = verde;
            } else if (c_dualCore.value == '') {
                c_dualCore.style.backgroundColor = principal;
            } else {
                c_dualCore.style.backgroundColor = vermelho;
            }

            if (o_dualCore.value.toLowerCase() == 'o') {
                o_dualCore.style.backgroundColor = verde;
            } else if (o_dualCore.value == '') {
                o_dualCore.style.backgroundColor = principal;
            } else {
                o_dualCore.style.backgroundColor = vermelho;
            }

            if (r_dualCore.value.toLowerCase() == 'r') {
                r_dualCore.style.backgroundColor = verde;
            } else if (r_dualCore.value == '') {
                r_dualCore.style.backgroundColor = principal;
            } else {
                r_dualCore.style.backgroundColor = vermelho;
            }

            if (e_dualCore.value.toLowerCase() == 'e') {
                e_dualCore.style.backgroundColor = verde;
            } else if (e_dualCore.value == '') {
                e_dualCore.style.backgroundColor = principal;
            } else {
                e_dualCore.style.backgroundColor = vermelho;
            }
        }   


        // ---------------- quadCore ----------------------------------------
        } else if(palavra1 == 'quadCore' || palavra2 == 'quadCore'){
            var q_quadCore = document.getElementById('input_quadCore_q');
            var u_qualCore = document.getElementById('input_quadCore_dataBus_u');
            var a_quadCore = document.getElementById('input_quadCore_a');
            var d_quadCore = document.getElementById('input_quadCore_d');
            var c_quadCore = document.getElementById('input_quadCore_cpu_c');
            var o_quadCore = document.getElementById('input_quadCore_o');
            var r_quadCore = document.getElementById('input_quadCore_r');
            var e_quadCore = document.getElementById('input_quadCore_e');  

            if (q_quadCore.value.toLowerCase() == 'q' && u_qualCore.value.toLowerCase() == 'u' 
            && a_quadCore.value.toLowerCase() == 'a' && d_quadCore.value.toLowerCase() == 'd'
            && c_quadCore.value.toLowerCase() == 'c'&& o_quadCore.value.toLowerCase() == 'o' 
            && r_quadCore.value.toLowerCase() == 'r' && e_quadCore.value.toLowerCase() == 'e') {
                q_quadCore.style.backgroundColor = verde;
                a_quadCore.style.backgroundColor = verde;
                o_quadCore.style.backgroundColor = verde;
                r_quadCore.style.backgroundColor = verde;
                e_quadCore.style.backgroundColor = verde;

            } else {
                if (q_quadCore.value.toLowerCase() == 'q') {
                    q_quadCore.style.backgroundColor = verde;
                } else if (q_quadCore.value == '') {
                    q_quadCore.style.backgroundColor = principal;
                } else {
                    q_quadCore.style.backgroundColor = vermelho;
                }

                if (a_quadCore.value.toLowerCase() == 'a') {
                    a_quadCore.style.backgroundColor = verde;
                } else if (a_quadCore.value == '') {
                    a_quadCore.style.backgroundColor = principal;
                } else {
                    a_quadCore.style.backgroundColor = vermelho;
                }
            
                if (d_quadCore.value.toLowerCase() == 'd') {
                    d_quadCore.style.backgroundColor = verde;
                } else if (d_quadCore.value == '') {
                    d_quadCore.style.backgroundColor = principal;
                } else {
                    d_quadCore.style.backgroundColor = vermelho;
                }

                if (o_quadCore.value.toLowerCase() == 'o') {
                    o_quadCore.style.backgroundColor = verde;
                } else if (o_quadCore.value == '') {
                    o_quadCore.style.backgroundColor = principal;
                } else {
                    o_quadCore.style.backgroundColor = vermelho;
                }

                if (r_quadCore.value.toLowerCase() == 'r') {
                    r_quadCore.style.backgroundColor = verde;
                } else if (r_quadCore.value == '') {
                    r_quadCore.style.backgroundColor = principal;
                } else {
                    r_quadCore.style.backgroundColor = vermelho;
                }

                if (e_quadCore.value.toLowerCase() == 'e') {
                    e_quadCore.style.backgroundColor = verde;
                } else if (e_quadCore.value == '') {
                    e_quadCore.style.backgroundColor = principal;
                } else {
                    e_quadCore.style.backgroundColor = vermelho;
                }
            } 
    // ------------------- thread --------------------------
    } else if (palavra1 == 'thread' || palavra2 == 'thread') {
        var t_thread = document.getElementById('input_thread_t');
        var h_thread = document.getElementById('input_thread_h');
        var r_thread = document.getElementById('input_thread_r');
        var e_thread = document.getElementById('input_thread_e');
        var a_thread = document.getElementById('input_cache_thread_a'); 
        var d_thread = document.getElementById('input_thread_d'); 

        if (t_thread.value.toLowerCase() == 't' && h_thread.value.toLowerCase() == 'h' 
        && r_thread.value.toLowerCase() == 'r' && e_thread.value.toLowerCase() == 'e' 
        && a_thread.value.toLowerCase() == 'a' && d_thread.value.toLowerCase() == 'd'){
            t_thread.style.backgroundColor = verde
            h_thread.style.backgroundColor = verde
            r_thread.style.backgroundColor = verde
            e_thread.style.backgroundColor = verde
            a_thread.style.backgroundColor = verde
            d_thread.style.backgroundColor = verde

        } else {
            if (t_thread.value.toLowerCase() == 't') {
                t_thread.style.backgroundColor = verde;
            } else if (t_thread.value == '') {
                t_thread.style.backgroundColor = principal;
            } else {
                t_thread.style.backgroundColor = vermelho;
            }

            if (h_thread.value.toLowerCase() == 'h') {
                h_thread.style.backgroundColor = verde;
            } else if (h_thread.value == '') {
                h_thread.style.backgroundColor = principal;
            } else {
                h_thread.style.backgroundColor = vermelho;
            }

            if (r_thread.value.toLowerCase() == 'r') {
                r_thread.style.backgroundColor = verde;
            } else if (r_thread.value == '') {
                r_thread.style.backgroundColor = principal;
            } else {
                r_thread.style.backgroundColor = vermelho;
            }

            if (e_thread.value.toLowerCase() == 'e') {
                e_thread.style.backgroundColor = verde;
            } else if (e_thread.value == '') {
                e_thread.style.backgroundColor = principal;
            } else {
                e_thread.style.backgroundColor = vermelho;
            }

            if (a_thread.value.toLowerCase() == 'a') {
                a_thread.style.backgroundColor = verde;
            } else if (a_thread.value == '') {
                a_thread.style.backgroundColor = principal;
            } else {
                a_thread.style.backgroundColor = vermelho;
            }

            if (d_thread.value.toLowerCase() == 'd') {
                d_thread.style.backgroundColor = verde;
            } else if (d_thread.value == '') {
                d_thread.style.backgroundColor = principal;
            } else {
                d_thread.style.backgroundColor = vermelho;
            }
        } 
        
    // ------------------- cache --------------------------
    } else if (palavra1 == 'cache' || palavra2 == 'cache') {
        var c1_cache = document.getElementById('input_cache_c1');
        var a_cache = document.getElementById('input_cache_thread_a'); 
        var c2_cache = document.getElementById('input_cache_c2');
        var h_cache= document.getElementById('input_cache_h');
        var e_cache = document.getElementById('input_cache_address_e');

        if (c1_cache.value.toLowerCase() == 'c' && a_cache.value.toLowerCase() == 'a' 
        && c2_cache.value.toLowerCase() == 'c' && h_cache.value.toLowerCase() == 'h' 
        && e_cache.value.toLowerCase() == 'e'){
            c1_cache.style.backgroundColor = verde
            c2_cache.style.backgroundColor = verde
            h_cache.style.backgroundColor = verde
            e_cache.style.backgroundColor = verde
        } else {
            if (c1_cache.value.toLowerCase() == 'c') {
                c1_cache.style.backgroundColor = verde;
            } else if (c1_cache.value == '') {
                c1_cache.style.backgroundColor = principal;
            } else {
                c1_cache.style.backgroundColor = vermelho;
            }
            
            if (c2_cache.value.toLowerCase() == 'c') {
                c2_cache.style.backgroundColor = verde;
            } else if (c2_cache.value == '') {
                c2_cache.style.backgroundColor = principal;
            } else {
                c2_cache.style.backgroundColor = vermelho;
            }

            if (h_cache.value.toLowerCase() == 'h') {
                h_cache.style.backgroundColor = verde;
            } else if (h_cache.value == '') {
                h_cache.style.backgroundColor = principal;
            } else {
                h_cache.style.backgroundColor = vermelho;
            }
        }
    }

    checarPontos();
}

function checarPontos() {
    var pontuacao = 0;
    if (pontuacao == 18) {
        alert('Parabéns, você completou todas as palavras!');
    }
}