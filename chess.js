var board = [
    ["a0", "b0", "c0", "d0", "e0", "f0", "g0", "h0"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"]
];

var rest = [
    ['fw1', 'fw2', 'fw3', 'fw4', 'fw5', 'fw6', 'fw7', 'fw8', 'sw1', 'sw2', 'sw3', 'sw4', 'sw5', 'sw6', 'sw7', 'sw8'],
    ['fb1', 'fb2', 'fb3', 'fb4', 'fb5', 'fb6', 'fb7', 'fb8', 'sb1', 'sb2', 'sb3', 'sb4', 'sb5', 'sb6', 'sb7', 'sb8']
];

var player = 'w';
var white_left = true;
var white_right = true;
var black_left = true;
var black_right = true;

class Piece_detail {
    constructor(name, unicode, position, player) {
        this.name = name;
        this.unicode = unicode;
        this.position = position;
        this.player = player;
    }
};

var pawn_Ba = new Piece_detail('pawn', '&#9823', 'a1', 'b');
var pawn_Bb = new Piece_detail('pawn', '&#9823', 'b1', 'b');
var pawn_Bc = new Piece_detail('pawn', '&#9823', 'c1', 'b');
var pawn_Bd = new Piece_detail('pawn', '&#9823', 'd1', 'b');
var pawn_Be = new Piece_detail('pawn', '&#9823', 'e1', 'b');
var pawn_Bf = new Piece_detail('pawn', '&#9823', 'f1', 'b');
var pawn_Bg = new Piece_detail('pawn', '&#9823', 'g1', 'b');
var pawn_Bh = new Piece_detail('pawn', '&#9823', 'h1', 'b');
var pawn_Wa = new Piece_detail('pawn', '&#9817', 'a6', 'w');
var pawn_Wb = new Piece_detail('pawn', '&#9817', 'b6', 'w');
var pawn_Wc = new Piece_detail('pawn', '&#9817', 'c6', 'w');
var pawn_Wd = new Piece_detail('pawn', '&#9817', 'd6', 'w');
var pawn_We = new Piece_detail('pawn', '&#9817', 'e6', 'w');
var pawn_Wf = new Piece_detail('pawn', '&#9817', 'f6', 'w');
var pawn_Wg = new Piece_detail('pawn', '&#9817', 'g6', 'w');
var pawn_Wh = new Piece_detail('pawn', '&#9817', 'h6', 'w');

var rock_Ba = new Piece_detail('rock', '&#9820', 'a0', 'b');
var knight_Bb = new Piece_detail('knight', '&#9822', 'b0', 'b');
var bishop_Bc = new Piece_detail('bishop', '&#9821', 'c0', 'b');
var queen_Bd = new Piece_detail('queen', '&#9819', 'd0', 'b');
var king_Be = new Piece_detail('king', '&#9818', 'e0', 'b');
var bishop_Bf = new Piece_detail('bishop', '&#9821', 'f0', 'b');
var knight_Bg = new Piece_detail('knight', '&#9822', 'g0', 'b');
var rock_Bh = new Piece_detail('rock', '&#9820', 'h0', 'b');
var rock_Wa = new Piece_detail('rock', '&#9814', 'a7', 'w');
var knight_Wb = new Piece_detail('knight', '&#9816', 'b7', 'w');
var bishop_Wc = new Piece_detail('bishop', '&#9815', 'c7', 'w');
var queen_Wd = new Piece_detail('queen', '&#9813', 'd7', 'w');
var king_We = new Piece_detail('king', '&#9812', 'e7', 'w');
var bishop_Wf = new Piece_detail('bishop', '&#9815', 'f7', 'w');
var knight_Wg = new Piece_detail('knight', '&#9816', 'g7', 'w');
var rock_Wh = new Piece_detail('rock', '&#9814', 'h7', 'w');

piece_place(pawn_Ba);
piece_place(pawn_Bb);
piece_place(pawn_Bc);
piece_place(pawn_Bd);
piece_place(pawn_Be);
piece_place(pawn_Bf);
piece_place(pawn_Bg);
piece_place(pawn_Bh);
piece_place(pawn_Wa);
piece_place(pawn_Wb);
piece_place(pawn_Wc);
piece_place(pawn_Wd);
piece_place(pawn_We);
piece_place(pawn_Wf);
piece_place(pawn_Wg);
piece_place(pawn_Wh);

piece_place(rock_Ba);
piece_place(knight_Bb);
piece_place(bishop_Bc);
piece_place(queen_Bd);
piece_place(king_Be);
piece_place(bishop_Bf);
piece_place(knight_Bg);
piece_place(rock_Bh);
piece_place(rock_Wa);
piece_place(knight_Wb);
piece_place(bishop_Wc);
piece_place(queen_Wd);
piece_place(king_We);
piece_place(bishop_Wf);
piece_place(knight_Wg);
piece_place(rock_Wh);

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************

var odd = 'white';
var even = 'black';
var color1 = '#ffaf6a';
var color2 = '#ffc999';
var color3 = '#ffaf6a';
var color4 = '#ffaf6a';
var cplayer1 = 'white';
var cplayer2 = 'black';
var check_color = '#F32013';
var black_shadow = "2px 2px 1px black";
var white_shadow = "2px 2px 1px white";
var restb = 0;
var restw = 0;
//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************

jQuery(document).ready(function () {
    $(".square").click(function () {
        $(".odd").css("background-color", odd);
        $(".even").css("background-color", even);

        let black_move = black_king_check()[0];
        let white_move = white_king_check()[0];
        if (black_move) { $('#' + king_Be.position).css("backgroundColor", check_color); }
        if (white_move) { $('#' + king_We.position).css("backgroundColor", check_color); }

        if (this.id == pawn_Ba.position && player == pawn_Ba.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Ba.name == 'queen') { queen_move_place(pawn_Ba, queen_king_safemove(pawn_Ba)); }
            else if (pawn_Ba.name == 'rock') { rock_bishop_move_place(pawn_Ba, rock_king_safemove(pawn_Ba)); }
            else if (pawn_Ba.name == 'bishop') { bishop_move_place(pawn_Ba, bishop_king_safemove(pawn_Ba)); }
            else if (pawn_Ba.name == 'knight') { knight_move_place(pawn_Ba, knight_king_safemove(pawn_Ba)); }
            else if (pawn_Ba.name == 'pawn') { pawn_move_place(pawn_Ba, pawn_king_safemove(pawn_Ba)); }
            console.log('pba');
        }
        else if (this.id == pawn_Bb.position && player == pawn_Bb.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Bb.name == 'queen') { queen_move_place(pawn_Bb, queen_king_safemove(pawn_Bb)); }
            else if (pawn_Bb.name == 'rock') { rock_bishop_move_place(pawn_Bb, rock_king_safemove(pawn_Bb)); }
            else if (pawn_Bb.name == 'bishop') { bishop_move_place(pawn_Bb, bishop_king_safemove(pawn_Ba)); }
            else if (pawn_Bb.name == 'knight') { knight_move_place(pawn_Bb, knight_king_safemove(pawn_Bb)); }
            else if (pawn_Bb.name == 'pawn') { pawn_move_place(pawn_Bb, pawn_king_safemove(pawn_Bb)); }
            console.log('pbb');
        }
        else if (this.id == pawn_Bc.position && player == pawn_Bc.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Bc.name == 'queen') { queen_move_place(pawn_Bc, queen_king_safemove(pawn_Bc)); }
            else if (pawn_Bc.name == 'rock') { rock_bishop_move_place(pawn_Bc, rock_king_safemove(pawn_Bc)); }
            else if (pawn_Bc.name == 'bishop') { bishop_move_place(pawn_Bc, bishop_king_safemove(pawn_Bc)); }
            else if (pawn_Bc.name == 'knight') { knight_move_place(pawn_Bc, knight_king_safemove(pawn_Bc)); }
            else if (pawn_Bc.name == 'pawn') { pawn_move_place(pawn_Bc, pawn_king_safemove(pawn_Bc)); }
            console.log('pbc');
        }
        else if (this.id == pawn_Bd.position && player == pawn_Bd.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Bd.name == 'queen') { queen_move_place(pawn_Bd, queen_king_safemove(pawn_Bd)); }
            else if (pawn_Bd.name == 'rock') { rock_bishop_move_place(pawn_Bd, rock_king_safemove(pawn_Bd)); }
            else if (pawn_Bd.name == 'bishop') { bishop_move_place(pawn_Bd, bishop_king_safemove(pawn_Bd)); }
            else if (pawn_Bd.name == 'knight') { knight_move_place(pawn_Bd, knight_king_safemove(pawn_Bd)); }
            else if (pawn_Bd.name == 'pawn') { pawn_move_place(pawn_Bd, pawn_king_safemove(pawn_Bd)); }
            console.log('pbd');
        }
        else if (this.id == pawn_Be.position && player == pawn_Be.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Be.name == 'queen') { queen_move_place(pawn_Be, queen_king_safemove(pawn_Be)); }
            else if (pawn_Be.name == 'rock') { rock_bishop_move_place(pawn_Be, rock_king_safemove(pawn_Be)); }
            else if (pawn_Be.name == 'bishop') { bishop_move_place(pawn_Be, bishop_king_safemove(pawn_Be)); }
            else if (pawn_Be.name == 'knight') { knight_move_place(pawn_Be, knight_king_safemove(pawn_Be)); }
            else if (pawn_Be.name == 'pawn') { pawn_move_place(pawn_Be, pawn_king_safemove(pawn_Be)); }
            console.log('pbe');
        }
        else if (this.id == pawn_Bf.position && player == pawn_Bf.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Bf.name == 'queen') { queen_move_place(pawn_Bf, queen_king_safemove(pawn_Bf)); }
            else if (pawn_Bf.name == 'rock') { rock_bishop_move_place(pawn_Bf, rock_king_safemove(pawn_Bf)); }
            else if (pawn_Bf.name == 'bishop') { bishop_move_place(pawn_Bf, bishop_king_safemove(pawn_Bf)); }
            else if (pawn_Bf.name == 'knight') { knight_move_place(pawn_Bf, knight_king_safemove(pawn_Bf)); }
            else if (pawn_Bf.name == 'pawn') { pawn_move_place(pawn_Bf, pawn_king_safemove(pawn_Bf)); }
            console.log('pbf');
        }
        else if (this.id == pawn_Bg.position && player == pawn_Bg.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Bg.name == 'queen') { queen_move_place(pawn_Bg, queen_king_safemove(pawn_Bg)); }
            else if (pawn_Bg.name == 'rock') { rock_bishop_move_place(pawn_Bg, rock_king_safemove(pawn_Bg)); }
            else if (pawn_Bg.name == 'bishop') { bishop_move_place(pawn_Bg, bishop_king_safemove(pawn_Bg)); }
            else if (pawn_Bg.name == 'knight') { knight_move_place(pawn_Bg, knight_king_safemove(pawn_Bg)); }
            else if (pawn_Bg.name == 'pawn') { pawn_move_place(pawn_Bg, pawn_king_safemove(pawn_Bg)); }
            console.log('pbg');
        }
        else if (this.id == pawn_Bh.position && player == pawn_Bh.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Bh.name == 'queen') { queen_move_place(pawn_Bh, queen_king_safemove(pawn_Bh)); }
            else if (pawn_Bh.name == 'rock') { rock_bishop_move_place(pawn_Bh, rock_king_safemove(pawn_Bh)); }
            else if (pawn_Bh.name == 'bishop') { bishop_move_place(pawn_Bh, bishop_king_safemove(pawn_Bh)); }
            else if (pawn_Bh.name == 'knight') { knight_move_place(pawn_Bh, knight_king_safemove(pawn_Bh)); }
            else if (pawn_Bh.name == 'pawn') { pawn_move_place(pawn_Bh, pawn_king_safemove(pawn_Bh)); }
            console.log('pbh');
        }


        else if (this.id == pawn_Wa.position && player == pawn_Wa.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Wa.name == 'queen') { queen_move_place(pawn_Wa, queen_king_safemove(pawn_Wa)); }
            else if (pawn_Wa.name == 'rock') { rock_bishop_move_place(pawn_Wa, rock_king_safemove(pawn_Wa)); }
            else if (pawn_Wa.name == 'bishop') { bishop_move_place(pawn_Wa, bishop_king_safemove(pawn_Wa)); }
            else if (pawn_Wa.name == 'knight') { knight_move_place(pawn_Wa, knight_king_safemove(pawn_Wa)); }
            else if (pawn_Wa.name == 'pawn') { pawn_move_place(pawn_Wa, pawn_king_safemove(pawn_Wa)); }
            console.log('pWa');
        }
        else if (this.id == pawn_Wb.position && player == pawn_Wb.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Wb.name == 'queen') { queen_move_place(pawn_Wb, queen_king_safemove(pawn_Wb)); }
            else if (pawn_Wb.name == 'rock') { rock_bishop_move_place(pawn_Wb, rock_king_safemove(pawn_Wb)); }
            else if (pawn_Wb.name == 'bishop') { bishop_move_place(pawn_Wb, bishop_king_safemove(pawn_Wb)); }
            else if (pawn_Wb.name == 'knight') { knight_move_place(pawn_Wb, knight_king_safemove(pawn_Wb)); }
            else if (pawn_Wb.name == 'pawn') { pawn_move_place(pawn_Wb, pawn_king_safemove(pawn_Wb)); }
            console.log('pWb');
        }
        else if (this.id == pawn_Wc.position && player == pawn_Wc.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Wc.name == 'queen') { queen_move_place(pawn_Wc, queen_king_safemove(pawn_Wc)); }
            else if (pawn_Wc.name == 'rock') { rock_bishop_move_place(pawn_Wc, rock_king_safemove(pawn_Wc)); }
            else if (pawn_Wc.name == 'bishop') { bishop_move_place(pawn_Wc, bishop_king_safemove(pawn_Wc)); }
            else if (pawn_Wc.name == 'knight') { knight_move_place(pawn_Wc, knight_king_safemove(pawn_Wc)); }
            else if (pawn_Wc.name == 'pawn') { pawn_move_place(pawn_Wc, pawn_king_safemove(pawn_Wc)); }
            console.log('pWc');
        }
        else if (this.id == pawn_Wd.position && player == pawn_Wd.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Wd.name == 'queen') { queen_move_place(pawn_Wd, queen_king_safemove(pawn_Wd)); }
            else if (pawn_Wd.name == 'rock') { rock_bishop_move_place(pawn_Wd, rock_king_safemove(pawn_Wd)); }
            else if (pawn_Wd.name == 'bishop') { bishop_move_place(pawn_Wd, bishop_king_safemove(pawn_Wd)); }
            else if (pawn_Wd.name == 'knight') { knight_move_place(pawn_Wd, knight_king_safemove(pawn_Wd)); }
            else if (pawn_Wd.name == 'pawn') { pawn_move_place(pawn_Wd, pawn_king_safemove(pawn_Wd)); }
            console.log('pWd');
        }
        else if (this.id == pawn_We.position && player == pawn_We.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_We.name == 'queen') { queen_move_place(pawn_We, queen_king_safemove(pawn_We)); }
            else if (pawn_We.name == 'rock') { rock_bishop_move_place(pawn_We, rock_king_safemove(pawn_We)); }
            else if (pawn_We.name == 'bishop') { bishop_move_place(pawn_We, bishop_king_safemove(pawn_We)); }
            else if (pawn_We.name == 'knight') { knight_move_place(pawn_We, knight_king_safemove(pawn_We)); }
            else if (pawn_We.name == 'pawn') { pawn_move_place(pawn_We, pawn_king_safemove(pawn_We)); }
            console.log('pWe');
        }
        else if (this.id == pawn_Wf.position && player == pawn_Wf.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Wf.name == 'queen') { queen_move_place(pawn_Wf, queen_king_safemove(pawn_Wf)); }
            else if (pawn_Wf.name == 'rock') { rock_bishop_move_place(pawn_Wf, rock_king_safemove(pawn_Wf)); }
            else if (pawn_Wf.name == 'bishop') { bishop_move_place(pawn_Wf, bishop_king_safemove(pawn_Wf)); }
            else if (pawn_Wf.name == 'knight') { knight_move_place(pawn_Wf, knight_king_safemove(pawn_Wf)); }
            else if (pawn_Wf.name == 'pawn') { pawn_move_place(pawn_Wf, pawn_king_safemove(pawn_Wf)); }
            console.log('pWf');
        }
        else if (this.id == pawn_Wg.position && player == pawn_Wg.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Wg.name == 'queen') { queen_move_place(pawn_Wg, queen_king_safemove(pawn_Wg)); }
            else if (pawn_Wg.name == 'rock') { rock_bishop_move_place(pawn_Wg, rock_king_safemove(pawn_Wg)); }
            else if (pawn_Wg.name == 'bishop') { bishop_move_place(pawn_Wg, bishop_king_safemove(pawn_Wg)); }
            else if (pawn_Wg.name == 'knight') { knight_move_place(pawn_Wg, knight_king_safemove(pawn_Wg)); }
            else if (pawn_Wg.name == 'pawn') { pawn_move_place(pawn_Wg, pawn_king_safemove(pawn_Wg)); }
            console.log('pWg');
        }
        else if (this.id == pawn_Wh.position && player == pawn_Wh.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            if (pawn_Wh.name == 'queen') { queen_move_place(pawn_Wh, queen_king_safemove(pawn_Wh)); }
            else if (pawn_Wh.name == 'rock') { rock_bishop_move_place(pawn_Wh, rock_king_safemove(pawn_Wh)); }
            else if (pawn_Wh.name == 'bishop') { bishop_move_place(pawn_Wh, bishop_king_safemove(pawn_Wh)); }
            else if (pawn_Wh.name == 'knight') { knight_move_place(pawn_Wh, knight_king_safemove(pawn_Wh)); }
            else if (pawn_Wh.name == 'pawn') { pawn_move_place(pawn_Wh, pawn_king_safemove(pawn_Wh)); }
            console.log('pWh');
        }

        else if (this.id == rock_Ba.position && player == rock_Ba.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            rock_bishop_move_place(rock_Ba, rock_king_safemove(rock_Ba));
            console.log('rba');
        }
        else if (this.id == knight_Bb.position && player == knight_Bb.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            knight_move_place(knight_Bb, knight_king_safemove(knight_Bb));
            console.log('kbb');
        }
        else if (this.id == bishop_Bc.position && player == bishop_Bc.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            rock_bishop_move_place(bishop_Bc, bishop_king_safemove(bishop_Bc));
            console.log('bbc');
        }
        else if (this.id == queen_Bd.position && player == queen_Bd.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            queen_move_place(queen_Bd, queen_king_safemove(queen_Bd));
            console.log('qbd');
        }
        else if (this.id == king_Be.position && player == king_Be.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            black_special_move();
            king_move_place(king_Be, black_king_checkmove());
            console.log('kbe');
        }
        else if (this.id == bishop_Bf.position && player == bishop_Bf.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            rock_bishop_move_place(bishop_Bf, bishop_king_safemove(bishop_Bf));
            console.log('bbf');
        }
        else if (this.id == knight_Bg.position && player == knight_Bg.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            knight_move_place(knight_Bg, knight_king_safemove(knight_Bg));
            console.log('kbg');
        }
        else if (this.id == rock_Bh.position && player == rock_Bh.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            rock_bishop_move_place(rock_Bh, (rock_king_safemove(rock_Bh)));
            console.log('rbh');
        }


        else if (this.id == rock_Wa.position && player == rock_Wa.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            rock_bishop_move_place(rock_Wa, (rock_king_safemove(rock_Wa)));
            console.log('rwa');
        }
        else if (this.id == knight_Wb.position && player == knight_Wb.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            knight_move_place(knight_Wb, knight_king_safemove(knight_Wb));
            console.log('kWb');
        }
        else if (this.id == bishop_Wc.position && player == bishop_Wc.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            rock_bishop_move_place(bishop_Wc, bishop_king_safemove(bishop_Wc));
            console.log('bWc');
        }
        else if (this.id == queen_Wd.position && player == queen_Wd.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            queen_move_place(queen_Wd, queen_king_safemove(queen_Wd));
            console.log('qWd');
        }
        else if (this.id == king_We.position && player == king_We.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            white_special_move();
            king_move_place(king_We, White_king_checkmove());
            console.log('kWe');
        }
        else if (this.id == bishop_Wf.position && player == bishop_Wf.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            rock_bishop_move_place(bishop_Wf, bishop_king_safemove(bishop_Wf));
            console.log('bWf');
        }
        else if (this.id == knight_Wg.position && player == knight_Wg.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            knight_move_place(knight_Wg, knight_king_safemove(knight_Wg));
            console.log('kWg');
        }
        else if (this.id == rock_Wh.position && player == rock_Wh.player) {
            let id = '#' + this.id;
            $(id).css("background-color", color1);
            rock_bishop_move_place(rock_Wh, (rock_king_safemove(rock_Wh)));
            console.log('rWh');
        }
    });
});

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************

function black_special_move() {
    if (black_left && !check_pieces('b0')[0] && !check_pieces('c0')[0] && !check_pieces('d0')[0]) {
        $('#c0').css("backgroundColor", color3);
        $("#c0").click(function () {
            if (black_left) {
                $('#' + king_Be.position).css('textShadow', '');
                $('#' + rock_Ba.position).css('textShadow', '');
                document.getElementById(king_Be.position).style.color = '';
                document.getElementById(rock_Ba.position).style.color = '';
                changeplace(king_Be, 'c0');
                changeplace(rock_Ba, 'd0');
                if (document.getElementById(king_Be.position).className[7] == 'e') { $('#' + king_Be.position).css('textShadow', white_shadow); }
                if (document.getElementById(rock_Ba.position).className[7] == 'e') { $('#' + rock_Ba.position).css('textShadow', white_shadow); }
                document.getElementById(king_Be.position).style.color = cplayer2;
                document.getElementById(rock_Ba.position).style.color = cplayer2;
                player = 'w';
            }
            if (player == 'w') {
                document.getElementById("board").style.transform = "rotate(0deg)";
                document.getElementById("board").style.transitionTimingFunction = "ease-in-out";
                document.getElementById("board").style.transitionDuration = "1s";
            }
            if (player == 'b') { $('#tp').text('Player-2'); }
            if (player == 'w') { $('#tp').text('Player-1'); }
        });
    }

    if (black_right && !check_pieces('f0')[0] && !check_pieces('g0')[0]) {
        $('#g0').css("backgroundColor", color3);
        $("#g0").click(function () {
            if (black_right) {
                $('#' + king_Be.position).css('textShadow', '');
                $('#' + rock_Ba.position).css('textShadow', '');
                document.getElementById(king_Be.position).style.color = '';
                document.getElementById(rock_Bh.position).style.color = '';
                changeplace(king_Be, 'g0');
                changeplace(rock_Bh, 'f0');
                if (document.getElementById(king_Be.position).className[7] == 'e') { $('#' + king_Be.position).css('textShadow', white_shadow); }
                if (document.getElementById(rock_Bh.position).className[7] == 'e') { $('#' + rock_Bh.position).css('textShadow', white_shadow); }
                document.getElementById(king_Be.position).style.color = cplayer2;
                document.getElementById(rock_Bh.position).style.color = cplayer2;
                player = 'w';
            }
            if (player == 'w') {
                document.getElementById("board").style.transform = "rotate(0deg)";
                document.getElementById("board").style.transitionTimingFunction = "ease-in-out";
                document.getElementById("board").style.transitionDuration = "1s";
            }
            if (player == 'b') { $('#tp').text('Player-2'); }
            if (player == 'w') { $('#tp').text('Player-1'); }
        });
    }
}

function white_special_move() {
    if (white_left && !check_pieces('b7')[0] && !check_pieces('c7')[0] && !check_pieces('d7')[0]) {
        $('#c7').css("backgroundColor", color3);
        $("#c7").click(function () {
            if (white_left) {
                $('#' + king_We.position).css('textShadow', '');
                $('#' + rock_Wh.position).css('textShadow', '');
                document.getElementById(king_We.position).style.color = '';
                document.getElementById(rock_Wa.position).style.color = '';
                changeplace(king_We, 'c7');
                changeplace(rock_Wa, 'd7');
                if (document.getElementById(king_We.position).className[7] == 'o') { $('#' + king_We.position).css('textShadow', black_shadow); }
                if (document.getElementById(rock_Wh.position).className[7] == 'o') { $('#' + rock_Wh.position).css('textShadow', black_shadow); }
                document.getElementById(king_We.position).style.color = cplayer1;
                document.getElementById(rock_Wa.position).style.color = cplayer1;
                player = 'b';
            }
            if (player == 'b') {
                document.getElementById("board").style.transform = "rotate(180deg)";
                document.getElementById("board").style.transitionTimingFunction = "ease-in-out";
                document.getElementById("board").style.transitionDuration = "1s";
            }
            if (player == 'b') { $('#tp').text('Player-2'); }
            if (player == 'w') { $('#tp').text('Player-1'); }
        });
    }

    if (white_right && !check_pieces('f7')[0] && !check_pieces('g7')[0]) {
        $('#g7').css("backgroundColor", color3);
        $("#g7").click(function () {
            if (white_right) {
                $('#' + king_We.position).css('textShadow', '');
                $('#' + rock_Wh.position).css('textShadow', '');
                document.getElementById(king_We.position).style.color = '';
                document.getElementById(rock_Wh.position).style.color = '';
                changeplace(king_We, 'g7');
                changeplace(rock_Wh, 'f7');
                if (document.getElementById(king_We.position).className[7] == 'o') { $('#' + king_We.position).css('textShadow', black_shadow); }
                if (document.getElementById(rock_Wh.position).className[7] == 'o') { $('#' + rock_Wh.position).css('textShadow', black_shadow); }
                document.getElementById(king_We.position).style.color = cplayer1;
                document.getElementById(rock_Wh.position).style.color = cplayer1;
                player = 'b';
            }
            if (player == 'b') {
                document.getElementById("board").style.transform = "rotate(180deg)";
                document.getElementById("board").style.transitionTimingFunction = "ease-in-out";
                document.getElementById("board").style.transitionDuration = "1s";
            }
            if (player == 'b') { $('#tp').text('Player-2'); }
            if (player == 'w') { $('#tp').text('Player-1'); }
        });
    }
}

function king_rook_intial() {
    if (king_We.position != 'e7') {
        white_left = false;
        white_right = false;
    }
    if (king_Be.position != 'e0') {
        black_left = false;
        black_right = false;
    }
    if (rock_Ba.position != 'a0') {
        black_left = false;
    }
    if (rock_Bh.position != 'h0') {
        black_right = false;
    }
    if (rock_Wa.position != 'a7') {
        white_left = false;
    }
    if (rock_Wh.position != 'h7') {
        white_right = false;
    }
}

function king_move_place(piece, move) {
    move.forEach(element => {
        if (element != null) {
            if (!check_pieces(element)[0]) { document.getElementById(element).style.backgroundColor = color2; }
            else if (check_pieces(element)[0]) { document.getElementById(element).style.backgroundColor = color4; }
        }
    });

    if (move.length == 8) {
        $('.square').click(function () {
            for (let i = 0; i < move.length; i++) {
                if (move[i] == this.id) {
                    if (check_pieces(this.id)[0]) {
                        let piece1 = check_pieces(this.id)[2];
                        $('#' + piece.position).css('color', '');
                        $('#' + piece1.position).css('textShadow', '');
                        if (piece1.player == 'w' && restw < 17) { document.getElementById(rest[0][restw]).innerHTML = piece1.unicode; restw++; }
                        if (piece1.player == 'b' && restb < 17) { document.getElementById(rest[1][restb]).innerHTML = piece1.unicode; restb++; }
                        position_clear(this.id);
                    }
                    $('#' + piece.position).css('color', cplayer2);
                    $('#' + piece.position).css('textShadow', '');
                    position_replace(piece, this.id);
                    if (player == 'b') {
                        $('#' + piece.position).css('color', cplayer1);
                        if (document.getElementById(piece.position).className[7] == 'o') { $('#' + piece.position).css('textShadow', black_shadow); }
                    }
                    if (player == 'w') {
                        $('#' + piece.position).css('color', cplayer2);
                        if (document.getElementById(piece.position).className[7] == 'e') { $('#' + piece.position).css('textShadow', white_shadow); }
                    }
                    break;
                }
            }
            if (player == 'b') { $('#tp').text('Player-2'); }
            if (player == 'w') { $('#tp').text('Player-1'); }
            move = []
        });
    }
}

function king_possible_move(piece) {
    let j = 0;
    let k = Number(piece.position[1]);
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == piece.position[0]) {
            break;
        }
        j++;
    }

    let array1 = [null, null, null, null, null, null, null, null];
    if (j - 1 >= 0 && k + 1 <= 7 && check_pieces(board[k + 1][j - 1])[1] != piece.player) { array1[0] = board[k + 1][j - 1] };
    if (j - 1 >= 0 && check_pieces(board[k][j - 1])[1] != piece.player) { array1[1] = board[k][j - 1] };
    if (j - 1 >= 0 && k - 1 >= 0 && check_pieces(board[k - 1][j - 1])[1] != piece.player) { array1[2] = board[k - 1][j - 1] };
    if (k - 1 >= 0 && check_pieces(board[k - 1][j])[1] != piece.player) { array1[3] = board[k - 1][j] };
    if (j + 1 <= 7 && k - 1 >= 0 && check_pieces(board[k - 1][j + 1])[1] != piece.player) { array1[4] = board[k - 1][j + 1] };
    if (j + 1 <= 7 && check_pieces(board[k][j + 1])[1] != piece.player) { array1[5] = board[k][j + 1] };
    if (j + 1 <= 7 && k + 1 <= 7 && check_pieces(board[k + 1][j + 1])[1] != piece.player) { array1[6] = board[k + 1][j + 1] };
    if (k + 1 <= 7 && check_pieces(board[k + 1][j])[1] != piece.player) { array1[7] = board[k + 1][j] };

    return array1;
}

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************


function queen_move_place(piece, move) {
    for (let i = 0; i < move.length; i++) {
        for (let j = 0; j < move[i].length; j++) {
            if (move[i][j] == null) {
                break;
            }
            else if (i == 8) {
                document.getElementById(move[i][j]).style.backgroundColor = color4;
            }
            else {
                document.getElementById(move[i][j]).style.backgroundColor = color2;
            }
        }
    }

    if (move.length == 9) {
        $('.square').click(function () {
            for (let i = 0; i < move.length; i++) {
                let t = false;
                for (let j = 0; j < move[i].length; j++) {
                    if (move[i][j] == null) {
                        break;
                    }
                    if (i == 8 && this.id == move[i][j]) {
                        let piece1 = check_pieces(this.id)[2];
                        $('#' + piece.position).css('color', '');
                        $('#' + piece1.position).css('textShadow', '');
                        if (piece1.player == 'w' && restw < 17) { document.getElementById(rest[0][restw]).innerHTML = piece1.unicode; restw++; }
                        if (piece1.player == 'b' && restb < 17) { document.getElementById(rest[1][restb]).innerHTML = piece1.unicode; restb++; }
                        position_clear(this.id);
                        t = true;
                        $('#' + piece.position).css('color', cplayer2);
                        $('#' + piece.position).css('textShadow', '');
                        position_replace(piece, this.id);
                        if (player == 'b') {
                            $('#' + piece.position).css('color', cplayer1);
                            if (document.getElementById(piece.position).className[7] == 'o') { $('#' + piece.position).css('textShadow', black_shadow); }
                        }
                        if (player == 'w') {
                            $('#' + piece.position).css('color', cplayer2);
                            if (document.getElementById(piece.position).className[7] == 'e') { $('#' + piece.position).css('textShadow', white_shadow); }
                        }
                        break;
                    }
                    if (this.id == move[i][j]) {
                        t = true;
                        $('#' + piece.position).css('color', cplayer2);
                        $('#' + piece.position).css('textShadow', '');
                        position_replace(piece, this.id);
                        if (player == 'b') {
                            $('#' + piece.position).css('color', cplayer1);
                            if (document.getElementById(piece.position).className[7] == 'o') { $('#' + piece.position).css('textShadow', black_shadow); }
                        }
                        if (player == 'w') {
                            $('#' + piece.position).css('color', cplayer2);
                            if (document.getElementById(piece.position).className[7] == 'e') { $('#' + piece.position).css('textShadow', white_shadow); }
                        }
                        break;
                    }
                }
                if (t) { break; }
            }
            if (player == 'b') { $('#tp').text('Player-2'); }
            if (player == 'w') { $('#tp').text('Player-1'); }
            move = [];
        });
    }
}

function queen_possible_move(piece) {
    let player2 = piece.player;
    if (piece.player == 'w') {
        player2 = 'b';
    }
    else if (piece.player == 'b') {
        player2 = 'w';
    }

    let j = 0;
    let k = Number(piece.position[1]);
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == piece.position[0]) {
            break;
        }
        j++;
    }
    let array1 = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
    ];

    let x = k;
    let y = 0;
    let z = 0;
    for (let i = j - 1; i >= 0; i--) {
        if (++x <= 7) {
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] == player2) { array1[8][z] = board[x][i]; z++; break; }
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] != player2) { break; }
            array1[0][y] = board[x][i];
            y++;
        }
    }

    y = 0;
    for (let i = j - 1; i >= 0; i--) {
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] == player2) { array1[8][z] = board[k][i]; z++; break; }
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] != player2) { break; }
        array1[1][y] = board[k][i];
        y++;
    }

    x = k;
    y = 0;
    for (let i = j - 1; i >= 0; i--) {
        if (--x >= 0) {
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] == player2) { array1[8][z] = board[x][i]; z++; break; }
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] != player2) { break; }
            array1[2][y] = board[x][i];
            y++;
        }
    }

    y = 0;
    for (let i = k - 1; i >= 0; i--) {
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] == player2) { array1[8][z] = board[i][j]; z++; break; }
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] != player2) { break; }
        array1[3][y] = board[i][j];
        y++;
    }

    x = k;
    y = 0;
    for (let i = j + 1; i <= 7; i++) {
        if (--x >= 0) {
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] == player2) { array1[8][z] = board[x][i]; z++; break; }
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] != player2) { break; }
            array1[4][y] = board[x][i];
            y++;
        }
    }

    y = 0;
    for (let i = j + 1; i <= 7; i++) {
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] == player2) { array1[8][z] = board[k][i]; z++; break; }
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] != player2) { break; }
        array1[5][y] = board[k][i];
        y++;
    }

    x = k;
    y = 0;
    for (let i = j + 1; i <= 7; i++) {
        if (++x <= 7) {
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] == player2) { array1[8][z] = board[x][i]; z++; break; }
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] != player2) { break; }
            array1[6][y] = board[x][i];
            y++;
        }
    }

    y = 0;
    for (let i = k + 1; i <= 7; i++) {
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] == player2) { array1[8][z] = board[i][j]; z++; break; }
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] != player2) { break; }
        array1[7][y] = board[i][j];
        y++;
    }
    return array1;


}

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************


function knight_move_place(piece, move) {
    move.forEach(element => {
        if (element != null) {
            if (!check_pieces(element)[0]) { document.getElementById(element).style.backgroundColor = color2; }
            else if (check_pieces(element)[0] && check_pieces(element)[1] != piece.player) { document.getElementById(element).style.backgroundColor = color4; }
        }
    });

    if (move.length == 8) {
        $('.square').click(function () {
            for (let i = 0; i < move.length; i++) {
                if (move[i] == this.id && check_pieces(this.id)[1] != piece.player) {
                    $('#' + piece.position).css('color', cplayer2);
                    $('#' + piece.position).css('textShadow', '');
                    if (check_pieces(this.id)[0]) {
                        let piece1 = check_pieces(this.id)[2];
                        $('#' + piece.position).css('color', '');
                        $('#' + piece1.position).css('textShadow', '');
                        if (piece1.player == 'w' && restw < 17) { document.getElementById(rest[0][restw]).innerHTML = piece1.unicode; restw++; }
                        if (piece1.player == 'b' && restb < 17) { document.getElementById(rest[1][restb]).innerHTML = piece1.unicode; restb++; }
                        position_clear(this.id);
                    }
                    position_replace(piece, this.id);
                    if (player == 'b') {
                        $('#' + piece.position).css('color', cplayer1);
                        if (document.getElementById(piece.position).className[7] == 'o') { $('#' + piece.position).css('textShadow', black_shadow); }
                    }
                    if (player == 'w') {
                        $('#' + piece.position).css('color', cplayer2);
                        if (document.getElementById(piece.position).className[7] == 'e') { $('#' + piece.position).css('textShadow', white_shadow); }
                    }
                    break;
                }
            }
            if (player == 'b') { $('#tp').text('Player-2'); }
            if (player == 'w') { $('#tp').text('Player-1'); }
            move = []
        });
    }
}

function knight_possible_move(piece) {
    let j = 0;
    let k = Number(piece.position[1]);
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == piece.position[0]) {
            break;
        }
        j++;
    }

    let array1 = [null, null, null, null, null, null, null, null];
    if (j - 2 >= 0 && k + 1 <= 7) { array1[0] = board[k + 1][j - 2]; }
    if (j - 2 >= 0 && k - 1 >= 0) { array1[1] = board[k - 1][j - 2]; }
    if (j - 1 >= 0 && k - 2 >= 0) { array1[2] = board[k - 2][j - 1]; }
    if (j + 1 <= 7 && k - 2 >= 0) { array1[3] = board[k - 2][j + 1]; }
    if (j + 2 <= 7 && k - 1 >= 0) { array1[4] = board[k - 1][j + 2]; }
    if (j + 2 <= 7 && k + 1 <= 7) { array1[5] = board[k + 1][j + 2]; }
    if (j + 1 <= 7 && k + 2 <= 7) { array1[6] = board[k + 2][j + 1]; }
    if (j - 1 >= 0 && k + 2 <= 7) { array1[7] = board[k + 2][j - 1]; }
    return array1;
}

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************

function rock_bishop_move_place(piece, move) {
    for (let i = 0; i < move.length; i++) {
        for (let j = 0; j < move[i].length; j++) {
            if (move[i][j] == null) {
                break;
            }
            else if (i == 4) {
                document.getElementById(move[i][j]).style.backgroundColor = color4;
            }
            else {
                document.getElementById(move[i][j]).style.backgroundColor = color2;
            }
        }
    }
    if (move.length == 5) {
        $('.square').click(function () {
            for (let i = 0; i < move.length; i++) {
                let t = false;
                for (let j = 0; j < move[i].length; j++) {
                    if (move[i][j] == null) {
                        break;
                    }
                    if (this.id == move[4][0] || this.id == move[4][1] || this.id == move[4][2] || this.id == move[4][3]) {
                        $('#' + piece.position).css('color', cplayer2);
                        $('#' + piece.position).css('textShadow', '');
                        let piece1 = check_pieces(this.id)[2];
                        $('#' + piece.position).css('color', '');
                        $('#' + piece1.position).css('textShadow', '');
                        if (piece1.player == 'w' && restw < 17) { document.getElementById(rest[0][restw]).innerHTML = piece1.unicode; restw++; }
                        if (piece1.player == 'b' && restb < 17) { document.getElementById(rest[1][restb]).innerHTML = piece1.unicode; restb++; }
                        position_clear(this.id);
                        t = true;
                        position_replace(piece, this.id);
                        if (player == 'b') {
                            $('#' + piece.position).css('color', cplayer1);
                            if (document.getElementById(piece.position).className[7] == 'o') { $('#' + piece.position).css('textShadow', black_shadow); }
                        }
                        if (player == 'w') {
                            $('#' + piece.position).css('color', cplayer2);
                            if (document.getElementById(piece.position).className[7] == 'e') { $('#' + piece.position).css('textShadow', white_shadow); }
                        }
                        break;
                    }
                    if (this.id == move[i][j]) {
                        t = true;
                        $('#' + piece.position).css('color', cplayer2);
                        $('#' + piece.position).css('textShadow', '');
                        position_replace(piece, this.id);
                        if (player == 'b') {
                            $('#' + piece.position).css('color', cplayer1);
                            if (document.getElementById(piece.position).className[7] == 'o') { $('#' + piece.position).css('textShadow', black_shadow); }
                        }
                        if (player == 'w') {
                            $('#' + piece.position).css('color', cplayer2);
                            if (document.getElementById(piece.position).className[7] == 'e') { $('#' + piece.position).css('textShadow', white_shadow); }
                        }
                        break;
                    }
                }
                if (t) { break; }
            }
            if (player == 'b') { $('#tp').text('Player-2'); }
            if (player == 'w') { $('#tp').text('Player-1'); }
            move = [];
        });
    }
}

function bishop_possible_move(piece) {
    let player2 = piece.player;
    if (piece.player == 'w') {
        player2 = 'b';
    }
    else if (piece.player == 'b') {
        player2 = 'w';
    }

    let j = 0;
    let k = Number(piece.position[1]);
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == piece.position[0]) {
            break;
        }
        j++;
    }

    let array2 = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null]
    ]

    let l = k;
    let m = 0;
    let n = 0;

    for (let i = j - 1; i >= 0; i--) {
        if (++l <= 7) {
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] == player2) { array2[4][n] = board[l][i]; n++; break; }
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] != player2) { break; }
            array2[0][m] = board[l][i];
            m++;
        }
    }
    l = k;
    m = 0;
    for (let i = j - 1; i >= 0; i--) {
        if (--l >= 0) {
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] == player2) { array2[4][n] = board[l][i]; n++; break; }
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] != player2) { break; }
            array2[1][m] = board[l][i];
            m++;
        }
    }
    l = k;
    m = 0;
    for (let i = j + 1; i <= 7; i++) {
        if (--l >= 0) {
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] == player2) { array2[4][n] = board[l][i]; n++; break; }
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] != player2) { break; }
            array2[2][m] = board[l][i];
            m++;
        }
    }
    l = k;
    m = 0;
    for (let i = j + 1; i <= 7; i++) {
        if (++l <= 7) {
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] == player2) { array2[4][n] = board[l][i]; n++; break; }
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] != player2) { break; }
            array2[3][m] = board[l][i];
            m++;
        }
    }
    return array2;
}

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************

function rock_possible_move(piece) {
    let player2 = piece.player;
    if (piece.player == 'w') {
        player2 = 'b';
    }
    else if (piece.player == 'b') {
        player2 = 'w';
    }

    let j = 0;
    let k = Number(piece.position[1]);
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == piece.position[0]) {
            break;
        }
        j++;
    }
    let array1 = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null]
    ];
    let l = 0;
    let m = 0;
    for (let i = j - 1; i >= 0; i--) {
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] == player2) { array1[4][m] = board[k][i]; m++; break; }
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] != player2) { break; }
        array1[0][l] = board[k][i];
        l++;
    }
    l = 0;
    for (let i = k - 1; i >= 0; i--) {
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] == player2) { array1[4][m] = board[i][j]; m++; break; }
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] != player2) { break; }
        array1[1][l] = board[i][j];
        l++;
    }
    l = 0;
    for (let i = j + 1; i <= 7; i++) {
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] == player2) { array1[4][m] = board[k][i]; m++; break; }
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] != player2) { break; }
        array1[2][l] = board[k][i];
        l++;
    }
    l = 0;
    for (let i = k + 1; i <= 7; i++) {
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] == player2) { array1[4][m] = board[i][j]; m++; break; }
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] != player2) { break; }
        array1[3][l] = board[i][j];
        l++;
    }
    return array1;
}

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************

function pawn_move_place(piece, move) {
    let array1 = [0];
    let array2 = [0];
    let player1 = piece.player;
    if (player1 == 'w') { player1 = 'b' }
    else if (player1 == 'b') { player1 = 'w' }
    if (move[0] != null && check_pieces(move[0])[0] && check_pieces(move[0])[1] == player1) {
        document.getElementById(move[0]).style.backgroundColor = color4;
        array1[array1.length] = move[0];
        array2[array2.length] = move[0];
    }

    if (move[1] != null && !check_pieces(move[1])[0]) {
        document.getElementById(move[1]).style.backgroundColor = color2;
        array1[array1.length] = move[1];

        if (move[2] != null && !check_pieces(move[2])[0]) {
            document.getElementById(move[2]).style.backgroundColor = color2;
            array1[array1.length] = move[2];
        }
    }

    if (move[3] != null && check_pieces(move[3])[0] && check_pieces(move[3])[1] == player1) {
        document.getElementById(move[3]).style.backgroundColor = color4;
        array1[array1.length] = move[3];
        array2[array2.length] = move[3];
    }

    if (move[1] == null && move[2] != null && player == 'b' && black_king_check()[0]) {
        document.getElementById(move[2]).style.backgroundColor = color2;
        array1[array1.length] = move[2];
    }

    if (move[1] == null && move[2] != null && player == 'w' && white_king_check()[0]) {
        document.getElementById(move[2]).style.backgroundColor = color2;
        array1[array1.length] = move[2];
    }

    if (move.length == 4) {
        $('.square').click(function () {
            for (let i = 1; i < array1.length; i++) {
                if (array1[i] == this.id) {
                    $('#' + piece.position).css('color', cplayer2)
                    $('#' + piece.position).css('textShadow', '');
                    if (this.id == array2[1] || this.id == array2[2]) {
                        let piece1 = check_pieces(this.id)[2];
                        $('#' + piece.position).css('color', '');
                        $('#' + piece1.position).css('textShadow', '');
                        if (piece1.player == 'w' && restw < 17) { document.getElementById(rest[0][restw]).innerHTML = piece1.unicode; restw++; }
                        if (piece1.player == 'b' && restb < 17) { document.getElementById(rest[1][restb]).innerHTML = piece1.unicode; restb++; }
                        position_clear(this.id);
                    }
                    position_replace(piece, this.id);
                    if (player == 'b') {
                        $('#' + piece.position).css('color', cplayer1);
                        if (document.getElementById(piece.position).className[7] == 'o') { $('#' + piece.position).css('textShadow', black_shadow); }
                    }
                    if (player == 'w') {
                        $('#' + piece.position).css('color', cplayer2);
                        if (document.getElementById(piece.position).className[7] == 'e') { $('#' + piece.position).css('textShadow', white_shadow); }
                    }
                    break;
                }
            };
            if (player == 'b') { $('#tp').text('Player-2'); }
            if (player == 'w') { $('#tp').text('Player-1'); }
            array1 = [];
            array2 = [];
            move = [];
            if (piece.position != null && piece.name == 'pawn' && piece.player == 'b' && piece.position[1] == '7') {
                piece.name = 'queen';
                piece.unicode = '&#9819';
                piece_place(piece);
                let black_move = black_king_check()[0];
                let white_move = white_king_check()[0];
                if (black_move) { $('#' + king_Be.position).css("backgroundColor", check_color); }
                if (white_move) { $('#' + king_We.position).css("backgroundColor", check_color); }        
            }

            if (piece.position != null && piece.name == 'pawn' && piece.player == 'w' && piece.position[1] == '0') {
                piece.name = 'queen';
                piece.unicode = '&#9813';
                piece_place(piece);
                let black_move = black_king_check()[0];
                let white_move = white_king_check()[0];
                if (black_move) { $('#' + king_Be.position).css("backgroundColor", check_color); }
                if (white_move) { $('#' + king_We.position).css("backgroundColor", check_color); }        
            }
        });
    }
}

function black_pawn_possible_move(piece) {
    let j = 0;
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == piece.position[0]) {
            break;
        }
        j++;
    }
    if (piece.position[1] == '7') {
        return [null, null, null, null];
    }

    if (piece.position[1] == '1') {
        if (j == 0) {
            return [null, board[Number(piece.position[1]) + 1][j], board[Number(piece.position[1]) + 2][j], board[Number(piece.position[1]) + 1][j + 1]];
        }
        else if (j == 7) {
            return [board[Number(piece.position[1]) + 1][j - 1], board[Number(piece.position[1]) + 1][j], board[Number(piece.position[1]) + 2][j], null];
        }
        else {
            return [board[Number(piece.position[1]) + 1][j - 1], board[Number(piece.position[1]) + 1][j], board[Number(piece.position[1]) + 2][j], board[Number(piece.position[1]) + 1][j + 1]];
        }
    }

    if (j == 0) {
        return [null, board[Number(piece.position[1]) + 1][j], null, board[Number(piece.position[1]) + 1][j + 1]];
    }
    else if (j == 7) {
        return [board[Number(piece.position[1]) + 1][j - 1], board[Number(piece.position[1]) + 1][j], null, null];
    }
    else {
        return [board[Number(piece.position[1]) + 1][j - 1], board[Number(piece.position[1]) + 1][j], null, board[Number(piece.position[1]) + 1][j + 1]];
    }
}

function white_pawn_possible_move(piece) {
    let j = 0;
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == piece.position[0]) {
            break;
        }
        j++;
    }
    if (piece.position[1] == '0') {
        return [null, null, null, null];
    }

    if (piece.position[1] == '6') {
        if (j == 0) {
            return [null, board[Number(piece.position[1]) - 1][j], board[Number(piece.position[1]) - 2][j], board[Number(piece.position[1]) - 1][j + 1]];
        }
        else if (j == 7) {
            return [board[Number(piece.position[1]) - 1][j - 1], board[Number(piece.position[1]) - 1][j], board[Number(piece.position[1]) - 2][j], null];
        }
        else {
            return [board[Number(piece.position[1]) - 1][j - 1], board[Number(piece.position[1]) - 1][j], board[Number(piece.position[1]) - 2][j], board[Number(piece.position[1]) - 1][j + 1]];
        }
    }

    if (j == 0) {
        return [null, board[Number(piece.position[1]) - 1][j], null, board[Number(piece.position[1]) - 1][j + 1]];
    }
    else if (j == 7) {
        return [board[Number(piece.position[1]) - 1][j - 1], board[Number(piece.position[1]) - 1][j], null, null];
    }
    else {
        return [board[Number(piece.position[1]) - 1][j - 1], board[Number(piece.position[1]) - 1][j], null, board[Number(piece.position[1]) - 1][j + 1]];
    }
}

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************

function king_king_move(piece) {
    let j = 0;
    let k = Number(piece.position[1]);
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == piece.position[0]) {
            break;
        }
        j++;
    }

    let array1 = [null, null, null, null, null, null, null, null];
    if (j - 1 >= 0 && k + 1 <= 7) { array1[0] = board[k + 1][j - 1] };
    if (j - 1 >= 0) { array1[1] = board[k][j - 1] };
    if (j - 1 >= 0 && k - 1 >= 0) { array1[2] = board[k - 1][j - 1] };
    if (k - 1 >= 0) { array1[3] = board[k - 1][j] };
    if (j + 1 <= 7 && k - 1 >= 0) { array1[4] = board[k - 1][j + 1] };
    if (j + 1 <= 7) { array1[5] = board[k][j + 1] };
    if (j + 1 <= 7 && k + 1 <= 7) { array1[6] = board[k + 1][j + 1] };
    if (k + 1 <= 7) { array1[7] = board[k + 1][j] };
    return array1;
}

function queen_king_move(piece) {
    let player3 = piece.player;
    if (piece.player == 'w') {
        player3 = 'b';
    }
    else if (piece.player == 'b') {
        player3 = 'w';
    }

    let j = 0;
    let k = Number(piece.position[1]);
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == piece.position[0]) {
            break;
        }
        j++;
    }
    let array1 = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ];

    let x = k;
    let y = 0;
    let z = 0;
    for (let i = j - 1; i >= 0; i--) {
        if (++x <= 7) {
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] == player3 && check_pieces(board[x][i])[2].name == 'king') { continue; }
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] == player3) { break; }
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] != player3) { array1[0][y] = board[x][i]; y++; break; }
            array1[0][y] = board[x][i];
            y++;
        }
    }

    y = 0;
    for (let i = j - 1; i >= 0; i--) {
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] == player3 && check_pieces(board[k][i])[2].name == 'king') { continue; }
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] == player3) { break; }
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] != player3) { array1[1][y] = board[k][i]; y++; break; }
        array1[1][y] = board[k][i];
        y++;
    }

    x = k;
    y = 0;
    for (let i = j - 1; i >= 0; i--) {
        if (--x >= 0) {
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] == player3 && check_pieces(board[x][i])[2].name == 'king') { continue; }
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] == player3) { break; }
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] != player3) { array1[2][y] = board[x][i]; y++; break; }
            array1[2][y] = board[x][i];
            y++;
        }
    }

    y = 0;
    for (let i = k - 1; i >= 0; i--) {
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] == player3 && check_pieces(board[i][j])[2].name == 'king') { continue; }
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] == player3) { break; }
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] != player3) { array1[3][y] = board[i][j]; y++; break; }
        array1[3][y] = board[i][j];
        y++;
    }

    x = k;
    y = 0;
    for (let i = j + 1; i <= 7; i++) {
        if (--x >= 0) {
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] == player3 && check_pieces(board[x][i])[2].name == 'king') { continue; }
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] == player3) { break; }
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] != player3) { array1[4][y] = board[x][i]; y++; break; }
            array1[4][y] = board[x][i];
            y++;
        }
    }

    y = 0;
    for (let i = j + 1; i <= 7; i++) {
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] == player3 && check_pieces(board[k][i])[2].name == 'king') { continue; }
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] == player3) { break; }
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] != player3) { array1[5][y] = board[k][i]; y++; break; }
        array1[5][y] = board[k][i];
        y++;
    }

    x = k;
    y = 0;
    for (let i = j + 1; i <= 7; i++) {
        if (++x <= 7) {
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] == player3 && check_pieces(board[x][i])[2].name == 'king') { continue; }
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] == player3) { break; }
            if (check_pieces(board[x][i])[0] && check_pieces(board[x][i])[1] != player3) { array1[6][y] = board[x][i]; y++; break; }
            array1[6][y] = board[x][i];
            y++;
        }
    }

    y = 0;
    for (let i = k + 1; i <= 7; i++) {
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] == player3 && check_pieces(board[i][j])[2].name == 'king') { continue; }
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] == player3) { break; }
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] != player3) { array1[7][y] = board[i][j]; y++; break; }
        array1[7][y] = board[i][j];
        y++;
    }
    return array1;
}

function bishop_king_move(piece) {
    let player2 = piece.player;
    if (piece.player == 'w') {
        player2 = 'b';
    }
    else if (piece.player == 'b') {
        player2 = 'w';
    }

    let j = 0;
    let k = Number(piece.position[1]);
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == piece.position[0]) {
            break;
        }
        j++;
    }

    let array2 = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ]

    let l = k;
    let m = 0;
    let n = 0;

    for (let i = j - 1; i >= 0; i--) {
        if (++l <= 7) {
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] == player2 && check_pieces(board[l][i])[2].name == 'king') { continue; }
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] == player2) { break; }
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] != player2) { array2[0][m] = board[l][i]; m++; break; }
            array2[0][m] = board[l][i];
            m++;
        }
    }
    l = k;
    m = 0;
    for (let i = j - 1; i >= 0; i--) {
        if (--l >= 0) {
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] == player2 && check_pieces(board[l][i])[2].name == 'king') { continue; }
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] == player2) { break; }
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] != player2) { array2[1][m] = board[l][i]; m++; break; }
            array2[1][m] = board[l][i];
            m++;
        }
    }
    l = k;
    m = 0;
    for (let i = j + 1; i <= 7; i++) {
        if (--l >= 0) {
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] == player2 && check_pieces(board[l][i])[2].name == 'king') { continue; }
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] == player2) { break; }
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] != player2) { array2[2][m] = board[l][i]; m++; break; }
            array2[2][m] = board[l][i];
            m++;
        }
    }
    l = k;
    m = 0;
    for (let i = j + 1; i <= 7; i++) {
        if (++l <= 7) {
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] == player2 && check_pieces(board[l][i])[2].name == 'king') { continue; }
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] == player2) { break; }
            if (check_pieces(board[l][i])[0] && check_pieces(board[l][i])[1] != player2) { array2[3][m] = board[l][i]; m++; break; }
            array2[3][m] = board[l][i];
            m++;
        }
    }
    return array2;
}

function rock_king_move(piece) {
    let player2 = piece.player;
    if (piece.player == 'w') {
        player2 = 'b';
    }
    else if (piece.player == 'b') {
        player2 = 'w';
    }

    let j = 0;
    let k = Number(piece.position[1]);
    let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == piece.position[0]) {
            break;
        }
        j++;
    }
    let array1 = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ];
    let l = 0;
    let m = 0;
    for (let i = j - 1; i >= 0; i--) {
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] == player2 && check_pieces(board[k][i])[2].name == 'king') { continue; }
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] == player2) { break; }
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] != player2) { array1[0][l] = board[k][i]; i++; break; }
        array1[0][l] = board[k][i];
        l++;
    }
    l = 0;
    for (let i = k - 1; i >= 0; i--) {
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] == player2 && check_pieces(board[i][j])[2].name == 'king') { continue; }
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] == player2) { break; }
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] != player2) { array1[1][l] = board[i][j]; l++; break; }
        array1[1][l] = board[i][j];
        l++;
    }
    l = 0;
    for (let i = j + 1; i <= 7; i++) {
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] == player2 && check_pieces(board[k][i])[2].name == 'king') { continue; }
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] == player2) { break; }
        if (check_pieces(board[k][i])[0] && check_pieces(board[k][i])[1] != player2) { array1[2][l] = board[k][i]; l++; break; }
        array1[2][l] = board[k][i];
        l++;
    }
    l = 0;
    for (let i = k + 1; i <= 7; i++) {
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] == player2 && check_pieces(board[i][j])[2].name == 'king') { continue; }
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] == player2) { break; }
        if (check_pieces(board[i][j])[0] && check_pieces(board[i][j])[1] != player2) { array1[3][l] = board[i][j]; l++; break; }
        array1[3][l] = board[i][j];
        l++;
    }
    return array1;
}

function White_king_checkmove() {
    let king_move = [null, null, null, null, null, null, null, null];

    let pawn_Ba_move = [null, null, null, null];
    let pawn_Bb_move = [null, null, null, null];
    let pawn_Bc_move = [null, null, null, null];
    let pawn_Bd_move = [null, null, null, null];
    let pawn_Be_move = [null, null, null, null];
    let pawn_Bf_move = [null, null, null, null];
    let pawn_Bg_move = [null, null, null, null];
    let pawn_Bh_move = [null, null, null, null];

    if (pawn_Ba.name == 'pawn') { pawn_Ba_move = black_pawn_possible_move(pawn_Ba); }
    if (pawn_Bb.name == 'pawn') { pawn_Bb_move = black_pawn_possible_move(pawn_Bb); }
    if (pawn_Bc.name == 'pawn') { pawn_Bc_move = black_pawn_possible_move(pawn_Bc); }
    if (pawn_Bd.name == 'pawn') { pawn_Bd_move = black_pawn_possible_move(pawn_Bd); }
    if (pawn_Be.name == 'pawn') { pawn_Be_move = black_pawn_possible_move(pawn_Be); }
    if (pawn_Bf.name == 'pawn') { pawn_Bf_move = black_pawn_possible_move(pawn_Bf); }
    if (pawn_Bg.name == 'pawn') { pawn_Bg_move = black_pawn_possible_move(pawn_Bg); }
    if (pawn_Bh.name == 'pawn') { pawn_Bh_move = black_pawn_possible_move(pawn_Bh); }

    let rock_Ba_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let knight_Bb_move = [null, null, null, null, null, null, null, null];
    let bishop_Bc_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let queen_Bd_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let king_Be_move = [null, null, null, null, null, null, null, null];
    let bishop_Bf_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let knight_Bg_move = [null, null, null, null, null, null, null, null];
    let rock_Bh_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];

    if (rock_Ba.name == 'rock') { rock_Ba_move = rock_king_move(rock_Ba); }
    if (knight_Bb.name == 'knight') { knight_Bb_move = knight_possible_move(knight_Bb); }
    if (bishop_Bc.name == 'bishop') { bishop_Bc_move = bishop_king_move(bishop_Bc); }
    if (queen_Bd.name == 'queen') { queen_Bd_move = queen_king_move(queen_Bd); }
    if (king_Be.name == 'king') { king_Be_move = king_king_move(king_Be); }
    if (bishop_Bf.name == 'bishop') { bishop_Bf_move = bishop_king_move(bishop_Bf); }
    if (knight_Bg.name == 'knight') { knight_Bg_move = knight_possible_move(knight_Bg); }
    if (rock_Bh.name == 'rock') { rock_Bh_move = rock_king_move(rock_Bh); }

    let pawn_queen_Ba_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Bb_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Bc_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Bd_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Be_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Bf_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Bg_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Bh_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    
    if (pawn_Ba.name == 'queen') { pawn_queen_Ba_move = queen_king_move(pawn_Ba); }
    if (pawn_Bb.name == 'queen') { pawn_queen_Bb_move = queen_king_move(pawn_Bb); }
    if (pawn_Bc.name == 'queen') { pawn_queen_Bc_move = queen_king_move(pawn_Bc); }
    if (pawn_Bd.name == 'queen') { pawn_queen_Bd_move = queen_king_move(pawn_Bd); }
    if (pawn_Be.name == 'queen') { pawn_queen_Be_move = queen_king_move(pawn_Be); }
    if (pawn_Bf.name == 'queen') { pawn_queen_Bf_move = queen_king_move(pawn_Bf); }
    if (pawn_Bg.name == 'queen') { pawn_queen_Bg_move = queen_king_move(pawn_Bg); }
    if (pawn_Bh.name == 'queen') { pawn_queen_Bh_move = queen_king_move(pawn_Bh); }


    let king_We_move = king_possible_move(king_We);

    for (let x = 0; x <= 7; x++) {
        element = king_We_move[x];
        let k = 0;
        if (element != null) {
            if (pawn_Ba_move[0] == element || pawn_Ba_move[3] == element) { k = 1; }
            if (pawn_Bb_move[0] == element || pawn_Bb_move[3] == element) { k = 1; }
            if (pawn_Bc_move[0] == element || pawn_Bc_move[3] == element) { k = 1; }
            if (pawn_Bd_move[0] == element || pawn_Bd_move[3] == element) { k = 1; }
            if (pawn_Be_move[0] == element || pawn_Be_move[3] == element) { k = 1; }
            if (pawn_Bf_move[0] == element || pawn_Bf_move[3] == element) { k = 1; }
            if (pawn_Bg_move[0] == element || pawn_Bg_move[3] == element) { k = 1; }
            if (pawn_Bh_move[0] == element || pawn_Bh_move[3] == element) { k = 1; }

            for (let i = 0; i <= 3; i++) {
                for (let j = 0; j < rock_Ba_move[i].length; j++) {
                    if (rock_Ba_move[i][j] == null) { break; }
                    if (rock_Ba_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }
                for (let j = 0; j < rock_Bh_move[i].length; j++) {
                    if (rock_Bh_move[i][j] == null) { break; }
                    if (rock_Bh_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }
                for (let j = 0; j < bishop_Bc_move[i].length; j++) {
                    if (bishop_Bc_move[i][j] == null) { break; }
                    if (bishop_Bc_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }
                for (let j = 0; j < bishop_Bf_move[i].length; j++) {
                    if (bishop_Bf_move[i][j] == null) { break; }
                    if (bishop_Bf_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }
            }

            for (let j = 0; j < knight_Bb_move.length; j++) {
                if (element == knight_Bb_move[j]) { k = 1; break; }
            }

            for (let j = 0; j < knight_Bg_move.length; j++) {
                if (element == knight_Bg_move[j]) { k = 1; break; }
            }

            for (let j = 0; j < king_Be_move.length; j++) {
                if (element == king_Be_move[j]) { k = 1; break; }
            }

            for (let i = 0; i <= 7; i++) {
                for (let j = 0; j < queen_Bd_move[i].length; j++) {
                    if (queen_Bd_move[i][j] == null) { break; }
                    if (queen_Bd_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Ba_move[i].length; j++) {
                    if (pawn_queen_Ba_move[i][j] == null) { break; }
                    if (pawn_queen_Ba_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Bb_move[i].length; j++) {
                    if (pawn_queen_Bb_move[i][j] == null) { break; }
                    if (pawn_queen_Bb_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Bc_move[i].length; j++) {
                    if (pawn_queen_Bc_move[i][j] == null) { break; }
                    if (pawn_queen_Bc_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Bd_move[i].length; j++) {
                    if (pawn_queen_Bd_move[i][j] == null) { break; }
                    if (pawn_queen_Bd_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Be_move[i].length; j++) {
                    if (pawn_queen_Be_move[i][j] == null) { break; }
                    if (pawn_queen_Be_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Bf_move[i].length; j++) {
                    if (pawn_queen_Bf_move[i][j] == null) { break; }
                    if (pawn_queen_Bf_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Bg_move[i].length; j++) {
                    if (pawn_queen_Bg_move[i][j] == null) { break; }
                    if (pawn_queen_Bg_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Bh_move[i].length; j++) {
                    if (pawn_queen_Bh_move[i][j] == null) { break; }
                    if (pawn_queen_Bh_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

            }
        }
        if (k == 0) { king_move[x] = element; }
    };

    return king_move;
}

function black_king_checkmove() {
    let king_move = [null, null, null, null, null, null, null, null];

    let pawn_Wa_move = [null, null, null, null];
    let pawn_Wb_move = [null, null, null, null];
    let pawn_Wc_move = [null, null, null, null];
    let pawn_Wd_move = [null, null, null, null];
    let pawn_We_move = [null, null, null, null];
    let pawn_Wf_move = [null, null, null, null];
    let pawn_Wg_move = [null, null, null, null];
    let pawn_Wh_move = [null, null, null, null];

    if (pawn_Wa.name == 'pawn') { pawn_Wa_move = white_pawn_possible_move(pawn_Wa); }
    if (pawn_Wb.name == 'pawn') { pawn_Wb_move = white_pawn_possible_move(pawn_Wb); }
    if (pawn_Wc.name == 'pawn') { pawn_Wc_move = white_pawn_possible_move(pawn_Wc); }
    if (pawn_Wd.name == 'pawn') { pawn_Wd_move = white_pawn_possible_move(pawn_Wd); }
    if (pawn_We.name == 'pawn') { pawn_We_move = white_pawn_possible_move(pawn_We); }
    if (pawn_Wf.name == 'pawn') { pawn_Wf_move = white_pawn_possible_move(pawn_Wf); }
    if (pawn_Wg.name == 'pawn') { pawn_Wg_move = white_pawn_possible_move(pawn_Wg); }
    if (pawn_Wh.name == 'pawn') { pawn_Wh_move = white_pawn_possible_move(pawn_Wh); }

    let rock_Wa_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let knight_Wb_move = [null, null, null, null, null, null, null, null];
    let bishop_Wc_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let queen_Wd_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let king_We_move = [null, null, null, null, null, null, null, null];
    let bishop_Wf_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let knight_Wg_move = [null, null, null, null, null, null, null, null];
    let rock_Wh_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];

    if (rock_Wa.name == 'rock') { rock_Wa_move = rock_king_move(rock_Wa); }
    if (knight_Wb.name == 'knight') { knight_Wb_move = knight_possible_move(knight_Wb); }
    if (bishop_Wc.name == 'bishop') { bishop_Wc_move = bishop_king_move(bishop_Wc); }
    if (queen_Wd.name == 'queen') { queen_Wd_move = queen_king_move(queen_Wd); }
    if (king_We.name == 'king') { king_We_move = king_king_move(king_We); }
    if (bishop_Wf.name == 'bishop') { bishop_Wf_move = bishop_king_move(bishop_Wf); }
    if (knight_Wg.name == 'knight') { knight_Wg_move = knight_possible_move(knight_Wg); }
    if (rock_Wh.name == 'rock') { rock_Wh_move = rock_king_move(rock_Wh); }

    let pawn_queen_Wa_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Wb_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Wc_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Wd_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_We_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Wf_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Wg_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    let pawn_queen_Wh_move = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
    
    if (pawn_Wa.name == 'queen') { pawn_queen_Wa_move = queen_king_move(pawn_Wa); }
    if (pawn_Wb.name == 'queen') { pawn_queen_Wb_move = queen_king_move(pawn_Wb); }
    if (pawn_Wc.name == 'queen') { pawn_queen_Wc_move = queen_king_move(pawn_Wc); }
    if (pawn_Wd.name == 'queen') { pawn_queen_Wd_move = queen_king_move(pawn_Wd); }
    if (pawn_We.name == 'queen') { pawn_queen_We_move = queen_king_move(pawn_We); }
    if (pawn_Wf.name == 'queen') { pawn_queen_Wf_move = queen_king_move(pawn_Wf); }
    if (pawn_Wg.name == 'queen') { pawn_queen_Wg_move = queen_king_move(pawn_Wg); }
    if (pawn_Wh.name == 'queen') { pawn_queen_Wh_move = queen_king_move(pawn_Wh); }

    let king_Be_move = king_possible_move(king_Be);

    for (let x = 0; x <= 7; x++) {
        element = king_Be_move[x];
        let k = 0;
        if (element != null) {
            if (pawn_Wa_move[0] == element || pawn_Wa_move[3] == element) { k = 1; }
            if (pawn_Wb_move[0] == element || pawn_Wb_move[3] == element) { k = 1; }
            if (pawn_Wc_move[0] == element || pawn_Wc_move[3] == element) { k = 1; }
            if (pawn_Wd_move[0] == element || pawn_Wd_move[3] == element) { k = 1; }
            if (pawn_We_move[0] == element || pawn_We_move[3] == element) { k = 1; }
            if (pawn_Wf_move[0] == element || pawn_Wf_move[3] == element) { k = 1; }
            if (pawn_Wg_move[0] == element || pawn_Wg_move[3] == element) { k = 1; }
            if (pawn_Wh_move[0] == element || pawn_Wh_move[3] == element) { k = 1; }

            for (let i = 0; i <= 3; i++) {
                for (let j = 0; j < rock_Wa_move[i].length; j++) {
                    if (rock_Wa_move[i][j] == null) { break; }
                    if (rock_Wa_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }
                for (let j = 0; j < rock_Wh_move[i].length; j++) {
                    if (rock_Wh_move[i][j] == null) { break; }
                    if (rock_Wh_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }
                for (let j = 0; j < bishop_Wc_move[i].length; j++) {
                    if (bishop_Wc_move[i][j] == null) { break; }
                    if (bishop_Wc_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }
                for (let j = 0; j < bishop_Wf_move[i].length; j++) {
                    if (bishop_Wf_move[i][j] == null) { break; }
                    if (bishop_Wf_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }
            }

            for (let j = 0; j < knight_Wb_move.length; j++) {
                if (element == knight_Wb_move[j]) { k = 1; break; }
            }

            for (let j = 0; j < knight_Wg_move.length; j++) {
                if (element == knight_Wg_move[j]) { k = 1; break; }
            }

            for (let j = 0; j < king_We_move.length; j++) {
                if (element == king_We_move[j]) { k = 1; break; }
            }

            for (let i = 0; i <= 7; i++) {
                for (let j = 0; j < queen_Wd_move[i].length; j++) {
                    if (queen_Wd_move[i][j] == null) { break; }
                    if (queen_Wd_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Wa_move[i].length; j++) {
                    if (pawn_queen_Wa_move[i][j] == null) { break; }
                    if (pawn_queen_Wa_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Wb_move[i].length; j++) {
                    if (pawn_queen_Wb_move[i][j] == null) { break; }
                    if (pawn_queen_Wb_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Wc_move[i].length; j++) {
                    if (pawn_queen_Wc_move[i][j] == null) { break; }
                    if (pawn_queen_Wc_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Wd_move[i].length; j++) {
                    if (pawn_queen_Wd_move[i][j] == null) { break; }
                    if (pawn_queen_Wd_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_We_move[i].length; j++) {
                    if (pawn_queen_We_move[i][j] == null) { break; }
                    if (pawn_queen_We_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Wf_move[i].length; j++) {
                    if (pawn_queen_Wf_move[i][j] == null) { break; }
                    if (pawn_queen_Wf_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Wg_move[i].length; j++) {
                    if (pawn_queen_Wg_move[i][j] == null) { break; }
                    if (pawn_queen_Wg_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

                for (let j = 0; j < pawn_queen_Wh_move[i].length; j++) {
                    if (pawn_queen_Wh_move[i][j] == null) { break; }
                    if (pawn_queen_Wh_move[i][j] == element) { k = 1; break; }
                }
                if (k == 1) { break; }

            }
        }
        if (k == 0) { king_move[x] = element; }
    };

    return king_move;
}

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************

function black_king_check() {
    let king_check = [null, null, null, null, null, null, null, null];
    let pawn_Wa_move = [null, null, null, null];
    let pawn_Wb_move = [null, null, null, null];
    let pawn_Wc_move = [null, null, null, null];
    let pawn_Wd_move = [null, null, null, null];
    let pawn_We_move = [null, null, null, null];
    let pawn_Wf_move = [null, null, null, null];
    let pawn_Wg_move = [null, null, null, null];
    let pawn_Wh_move = [null, null, null, null];

    if (pawn_Wa.name == 'pawn') { pawn_Wa_move = white_pawn_possible_move(pawn_Wa); }
    if (pawn_Wb.name == 'pawn') { pawn_Wb_move = white_pawn_possible_move(pawn_Wb); }
    if (pawn_Wc.name == 'pawn') { pawn_Wc_move = white_pawn_possible_move(pawn_Wc); }
    if (pawn_Wd.name == 'pawn') { pawn_Wd_move = white_pawn_possible_move(pawn_Wd); }
    if (pawn_We.name == 'pawn') { pawn_We_move = white_pawn_possible_move(pawn_We); }
    if (pawn_Wf.name == 'pawn') { pawn_Wf_move = white_pawn_possible_move(pawn_Wf); }
    if (pawn_Wg.name == 'pawn') { pawn_Wg_move = white_pawn_possible_move(pawn_Wg); }
    if (pawn_Wh.name == 'pawn') { pawn_Wh_move = white_pawn_possible_move(pawn_Wh); }

    let rock_Wa_move = [null, null, null, null];
    let knight_Wb_move = [null, null, null, null, null, null, null, null];
    let bishop_Wc_move = [null, null, null, null];
    let queen_Wd_move = [null, null, null, null, null, null, null, null];
    let bishop_Wf_move = [null, null, null, null];
    let knight_Wg_move = [null, null, null, null, null, null, null, null];
    let rock_Wh_move = [null, null, null, null];

    if (rock_Wa.name == 'rock') { rock_Wa_move = rock_possible_move(rock_Wa)[4]; }
    if (knight_Wb.name == 'knight') { knight_Wb_move = knight_possible_move(knight_Wb); }
    if (bishop_Wc.name == 'bishop') { bishop_Wc_move = bishop_possible_move(bishop_Wc)[4]; }
    if (queen_Wd.name == 'queen') { queen_Wd_move = queen_possible_move(queen_Wd)[8]; }
    if (bishop_Wf.name == 'bishop') { bishop_Wf_move = bishop_possible_move(bishop_Wf)[4]; }
    if (knight_Wg.name == 'knight') { knight_Wg_move = knight_possible_move(knight_Wg); }
    if (rock_Wh.name == 'rock') { rock_Wh_move = rock_possible_move(rock_Wh)[4]; }
    
    let pawn_queen_Wa_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Wb_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Wc_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Wd_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_We_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Wf_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Wg_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Wh_move = [null, null, null, null, null, null, null, null];
    
    if (pawn_Wa.name == 'queen') { pawn_queen_Wa_move = queen_possible_move(pawn_Wa)[8]; }
    if (pawn_Wb.name == 'queen') { pawn_queen_Wb_move = queen_possible_move(pawn_Wb)[8]; }
    if (pawn_Wc.name == 'queen') { pawn_queen_Wc_move = queen_possible_move(pawn_Wc)[8]; }
    if (pawn_Wd.name == 'queen') { pawn_queen_Wd_move = queen_possible_move(pawn_Wd)[8]; }
    if (pawn_We.name == 'queen') { pawn_queen_We_move = queen_possible_move(pawn_We)[8]; }
    if (pawn_Wf.name == 'queen') { pawn_queen_Wf_move = queen_possible_move(pawn_Wf)[8]; }
    if (pawn_Wg.name == 'queen') { pawn_queen_Wg_move = queen_possible_move(pawn_Wg)[8]; }
    if (pawn_Wh.name == 'queen') { pawn_queen_Wh_move = queen_possible_move(pawn_Wh)[8]; }

    if (pawn_Wa_move[0] == king_Be.position || pawn_Wa_move[3] == king_Be.position) { king_check[4] = pawn_Wa.position; }
    if (pawn_Wb_move[0] == king_Be.position || pawn_Wb_move[3] == king_Be.position) { king_check[4] = pawn_Wb.position; }
    if (pawn_Wc_move[0] == king_Be.position || pawn_Wc_move[3] == king_Be.position) { king_check[4] = pawn_Wc.position; }
    if (pawn_Wd_move[0] == king_Be.position || pawn_Wd_move[3] == king_Be.position) { king_check[4] = pawn_Wd.position; }
    if (pawn_We_move[0] == king_Be.position || pawn_We_move[3] == king_Be.position) { king_check[4] = pawn_We.position; }
    if (pawn_Wf_move[0] == king_Be.position || pawn_Wf_move[3] == king_Be.position) { king_check[4] = pawn_Wf.position; }
    if (pawn_Wg_move[0] == king_Be.position || pawn_Wg_move[3] == king_Be.position) { king_check[4] = pawn_Wg.position; }
    if (pawn_Wh_move[0] == king_Be.position || pawn_Wh_move[3] == king_Be.position) { king_check[4] = pawn_Wh.position; }

    for (let i = 0; i < 4; i++) {
        if (rock_Wa_move[i] == king_Be.position) { king_check[0] = rock_Wa.position; }
        if (rock_Wh_move[i] == king_Be.position) { king_check[7] = rock_Wh.position; }
        if (bishop_Wc_move[i] == king_Be.position) { king_check[2] = bishop_Wc.position; }
        if (bishop_Wf_move[i] == king_Be.position) { king_check[5] = bishop_Wf.position; }
    }

    for (let i = 0; i < 8; i++) {
        if (knight_Wb_move[i] == king_Be.position) { king_check[1] = knight_Wb.position; }
        if (knight_Wg_move[i] == king_Be.position) { king_check[6] = knight_Wg.position; }
        if (queen_Wd_move[i] == king_Be.position) { king_check[3] = queen_Wd.position; }
        
        if (pawn_queen_Wa_move[i] == king_Be.position) { king_check[3] = pawn_Wa.position; }
        if (pawn_queen_Wb_move[i] == king_Be.position) { king_check[3] = pawn_Wb.position; }
        if (pawn_queen_Wc_move[i] == king_Be.position) { king_check[3] = pawn_Wc.position; }
        if (pawn_queen_Wd_move[i] == king_Be.position) { king_check[3] = pawn_Wd.position; }
        if (pawn_queen_We_move[i] == king_Be.position) { king_check[3] = pawn_We.position; }
        if (pawn_queen_Wf_move[i] == king_Be.position) { king_check[3] = pawn_Wf.position; }
        if (pawn_queen_Wg_move[i] == king_Be.position) { king_check[3] = pawn_Wg.position; }
        if (pawn_queen_Wh_move[i] == king_Be.position) { king_check[3] = pawn_Wh.position; }
    }

    let t = false;

    for (let i = 0; i < 8; i++) {
        if (king_check[i] != null) {
            t = true;
        }
    }
    return [t, king_check];
}

function white_king_check() {
    let king_check = [null, null, null, null, null, null, null, null];
    let pawn_Ba_move = [null, null, null, null];
    let pawn_Bb_move = [null, null, null, null];
    let pawn_Bc_move = [null, null, null, null];
    let pawn_Bd_move = [null, null, null, null];
    let pawn_Be_move = [null, null, null, null];
    let pawn_Bf_move = [null, null, null, null];
    let pawn_Bg_move = [null, null, null, null];
    let pawn_Bh_move = [null, null, null, null];

    if (pawn_Ba.name == 'pawn') { pawn_Ba_move = black_pawn_possible_move(pawn_Ba); }
    if (pawn_Bb.name == 'pawn') { pawn_Bb_move = black_pawn_possible_move(pawn_Bb); }
    if (pawn_Bc.name == 'pawn') { pawn_Bc_move = black_pawn_possible_move(pawn_Bc); }
    if (pawn_Bd.name == 'pawn') { pawn_Bd_move = black_pawn_possible_move(pawn_Bd); }
    if (pawn_Be.name == 'pawn') { pawn_Be_move = black_pawn_possible_move(pawn_Be); }
    if (pawn_Bf.name == 'pawn') { pawn_Bf_move = black_pawn_possible_move(pawn_Bf); }
    if (pawn_Bg.name == 'pawn') { pawn_Bg_move = black_pawn_possible_move(pawn_Bg); }
    if (pawn_Bh.name == 'pawn') { pawn_Bh_move = black_pawn_possible_move(pawn_Bh); }

    let rock_Ba_move = [null, null, null, null];
    let knight_Bb_move = [null, null, null, null, null, null, null, null];
    let bishop_Bc_move = [null, null, null, null];
    let queen_Bd_move = [null, null, null, null, null, null, null, null];
    let bishop_Bf_move = [null, null, null, null];
    let knight_Bg_move = [null, null, null, null, null, null, null, null];
    let rock_Bh_move = [null, null, null, null];

    if (rock_Ba.name == 'rock') { rock_Ba_move = rock_possible_move(rock_Ba)[4]; }
    if (knight_Bb.name == 'knight') { knight_Bb_move = knight_possible_move(knight_Bb); }
    if (bishop_Bc.name == 'bishop') { bishop_Bc_move = bishop_possible_move(bishop_Bc)[4]; }
    if (queen_Bd.name == 'queen') { queen_Bd_move = queen_possible_move(queen_Bd)[8]; }
    if (bishop_Bf.name == 'bishop') { bishop_Bf_move = bishop_possible_move(bishop_Bf)[4]; }
    if (knight_Bg.name == 'knight') { knight_Bg_move = knight_possible_move(knight_Bg); }
    if (rock_Bh.name == 'rock') { rock_Bh_move = rock_possible_move(rock_Bh)[4]; }

    let pawn_queen_Ba_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Bb_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Bc_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Bd_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Be_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Bf_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Bg_move = [null, null, null, null, null, null, null, null];
    let pawn_queen_Bh_move = [null, null, null, null, null, null, null, null];
    
    if (pawn_Ba.name == 'queen') { pawn_queen_Ba_move = queen_possible_move(pawn_Ba)[8]; }
    if (pawn_Bb.name == 'queen') { pawn_queen_Bb_move = queen_possible_move(pawn_Bb)[8]; }
    if (pawn_Bc.name == 'queen') { pawn_queen_Bc_move = queen_possible_move(pawn_Bc)[8]; }
    if (pawn_Bd.name == 'queen') { pawn_queen_Bd_move = queen_possible_move(pawn_Bd)[8]; }
    if (pawn_Be.name == 'queen') { pawn_queen_Be_move = queen_possible_move(pawn_Be)[8]; }
    if (pawn_Bf.name == 'queen') { pawn_queen_Bf_move = queen_possible_move(pawn_Bf)[8]; }
    if (pawn_Bg.name == 'queen') { pawn_queen_Bg_move = queen_possible_move(pawn_Bg)[8]; }
    if (pawn_Bh.name == 'queen') { pawn_queen_Bh_move = queen_possible_move(pawn_Bh)[8]; }

    if (pawn_Ba_move[0] == king_We.position || pawn_Ba_move[3] == king_We.position) { king_check[4] = pawn_Ba.position; }
    if (pawn_Bb_move[0] == king_We.position || pawn_Bb_move[3] == king_We.position) { king_check[4] = pawn_Bb.position; }
    if (pawn_Bc_move[0] == king_We.position || pawn_Bc_move[3] == king_We.position) { king_check[4] = pawn_Bc.position; }
    if (pawn_Bd_move[0] == king_We.position || pawn_Bd_move[3] == king_We.position) { king_check[4] = pawn_Bd.position; }
    if (pawn_Be_move[0] == king_We.position || pawn_Be_move[3] == king_We.position) { king_check[4] = pawn_Be.position; }
    if (pawn_Bf_move[0] == king_We.position || pawn_Bf_move[3] == king_We.position) { king_check[4] = pawn_Bf.position; }
    if (pawn_Bg_move[0] == king_We.position || pawn_Bg_move[3] == king_We.position) { king_check[4] = pawn_Bg.position; }
    if (pawn_Bh_move[0] == king_We.position || pawn_Bh_move[3] == king_We.position) { king_check[4] = pawn_Bh.position; }

    for (let i = 0; i < 4; i++) {
        if (rock_Ba_move[i] == king_We.position) { king_check[0] = rock_Ba.position; }
        if (rock_Bh_move[i] == king_We.position) { king_check[7] = rock_Bh.position; }
        if (bishop_Bc_move[i] == king_We.position) { king_check[2] = bishop_Bc.position; }
        if (bishop_Bf_move[i] == king_We.position) { king_check[5] = bishop_Bf.position; }
    }

    for (let i = 0; i < 8; i++) {
        if (knight_Bb_move[i] == king_We.position) { king_check[1] = knight_Bb.position; }
        if (knight_Bg_move[i] == king_We.position) { king_check[6] = knight_Bg.position; }
        if (queen_Bd_move[i] == king_We.position) { king_check[3] = queen_Bd.position; }

        if (pawn_queen_Ba_move[i] == king_We.position) { king_check[3] = pawn_Ba.position; }
        if (pawn_queen_Bb_move[i] == king_We.position) { king_check[3] = pawn_Bb.position; }
        if (pawn_queen_Bc_move[i] == king_We.position) { king_check[3] = pawn_Bc.position; }
        if (pawn_queen_Bd_move[i] == king_We.position) { king_check[3] = pawn_Bd.position; }
        if (pawn_queen_Be_move[i] == king_We.position) { king_check[3] = pawn_Be.position; }
        if (pawn_queen_Bf_move[i] == king_We.position) { king_check[3] = pawn_Bf.position; }
        if (pawn_queen_Bg_move[i] == king_We.position) { king_check[3] = pawn_Bg.position; }
        if (pawn_queen_Bh_move[i] == king_We.position) { king_check[3] = pawn_Bh.position; }

    }

    let t = false;

    for (let i = 0; i < 8; i++) {
        if (king_check[i] != null) {
            t = true;
        }
    }
    return [t, king_check];
}

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************

function changeplace(piece, id) {
    let a = document.getElementById(piece.position);
    a.innerHTML = null;
    piece.position = id;

    let b = document.getElementById(piece.position);
    b.innerHTML = piece.unicode;
}

function pawn_king_safemove(piece) {
    let plays = piece.player;
    let pawn_possible_move;
    if (plays == 'b') { pawn_possible_move = black_pawn_possible_move(piece); }
    if (plays == 'w') { pawn_possible_move = white_pawn_possible_move(piece); }
    let pawn_king_safemove = [null, null, null, null];
    let piece_position = piece.position;

    if (pawn_possible_move[0] != null && check_pieces(pawn_possible_move[0])[0]) {
        let piece2 = check_pieces(pawn_possible_move[0])[2];
        let piece2_copy = new Piece_detail(piece2.name, piece2.unicode, piece2.position, piece2.player);
        position_clear(piece2.position);
        changeplace(piece, pawn_possible_move[0]);
        let t;
        if (plays == 'b') { t = black_king_check()[0]; }
        if (plays == 'w') { t = white_king_check()[0]; }
        changeplace(piece, piece_position);
        piece_place(piece);
        piece2.name = piece2_copy.name;
        piece2.unicode = piece2_copy.unicode;
        piece2.position = piece2_copy.position;
        piece2.player = piece2_copy.player;
        piece_place(piece2);
        if (!t) {
            pawn_king_safemove[0] = pawn_possible_move[0];
        }
    }
    if (pawn_possible_move[1] != null && !check_pieces(pawn_possible_move[1])[0]) {
        changeplace(piece, pawn_possible_move[1]);
        let t;
        if (plays == 'b') { t = black_king_check()[0]; }
        if (plays == 'w') { t = white_king_check()[0]; }
        changeplace(piece, piece_position);
        piece_place(piece);
        if (!t) {
            pawn_king_safemove[1] = pawn_possible_move[1];
        }
    }
    if (pawn_possible_move[2] != null && !check_pieces(pawn_possible_move[2])[0]) {
        changeplace(piece, pawn_possible_move[2]);
        let t;
        if (plays == 'b') { t = black_king_check()[0]; }
        if (plays == 'w') { t = white_king_check()[0]; }
        changeplace(piece, piece_position);
        piece_place(piece);
        if (!t) {
            pawn_king_safemove[2] = pawn_possible_move[2];
        }
    }
    if (pawn_possible_move[3] != null && check_pieces(pawn_possible_move[3])[0]) {
        let piece2 = check_pieces(pawn_possible_move[3])[2];
        let piece2_copy = new Piece_detail(piece2.name, piece2.unicode, piece2.position, piece2.player);
        position_clear(piece2.position);
        changeplace(piece, pawn_possible_move[3]);
        let t;
        if (plays == 'b') { t = black_king_check()[0]; }
        if (plays == 'w') { t = white_king_check()[0]; }
        changeplace(piece, piece_position);
        piece_place(piece);
        piece2.name = piece2_copy.name;
        piece2.unicode = piece2_copy.unicode;
        piece2.position = piece2_copy.position;
        piece2.player = piece2_copy.player;
        piece_place(piece2);
        if (!t) {
            pawn_king_safemove[3] = pawn_possible_move[3];
        }
    }
    return pawn_king_safemove;
}

function rock_king_safemove(piece) {
    let plays = piece.player;
    let rock_move = rock_possible_move(piece);
    let rock_king_move = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null]
    ];
    let piece_position = piece.position;
    for (let i = 0; i < rock_move.length - 1; i++) {
        let k = 0;
        for (let j = 0; j < rock_move[i].length; j++) {
            if (rock_move[i][j] == null) { break; }
            changeplace(piece, rock_move[i][j]);
            let t;
            if (plays == 'b') { t = black_king_check()[0]; }
            if (plays == 'w') { t = white_king_check()[0]; }
            changeplace(piece, piece_position);
            piece_place(piece);
            if (!t) {
                rock_king_move[i][k] = rock_move[i][j];
                k++;
            }
        }
    }
    let k = 0;
    for (let i = 0; i < rock_move[4].length; i++) {
        if (rock_move[4][i] == null) { break; }
        let piece2 = check_pieces(rock_move[4][i])[2];
        let piece2_copy = new Piece_detail(piece2.name, piece2.unicode, piece2.position, piece2.player);

        position_clear(piece2.position);
        changeplace(piece, rock_move[4][i]);
        let t;
        if (plays == 'b') { t = black_king_check()[0]; }
        if (plays == 'w') { t = white_king_check()[0]; }
        changeplace(piece, piece_position);
        piece_place(piece);
        piece2.name = piece2_copy.name;
        piece2.unicode = piece2_copy.unicode;
        piece2.position = piece2_copy.position;
        piece2.player = piece2_copy.player;
        piece_place(piece2);
        if (!t) {
            rock_king_move[4][k] = rock_move[4][i];
            k++;
        }
    }
    return rock_king_move;
}

function bishop_king_safemove(piece) {
    let plays = piece.player;
    let bishop_move = bishop_possible_move(piece);
    let bishop_king_move = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null]
    ];
    let piece_position = piece.position;
    for (let i = 0; i < bishop_move.length - 1; i++) {
        let k = 0;
        for (let j = 0; j < bishop_move[i].length; j++) {
            if (bishop_move[i][j] == null) { break; }
            changeplace(piece, bishop_move[i][j]);
            let t;
            if (plays == 'b') { t = black_king_check()[0]; }
            if (plays == 'w') { t = white_king_check()[0]; }
            changeplace(piece, piece_position);
            piece_place(piece);
            if (!t) {
                bishop_king_move[i][k] = bishop_move[i][j];
                k++;
            }
        }
    }
    let k = 0;
    for (let i = 0; i < bishop_move[4].length; i++) {
        if (bishop_move[4][i] == null) { break; }
        let piece2 = check_pieces(bishop_move[4][i])[2];
        let piece2_copy = new Piece_detail(piece2.name, piece2.unicode, piece2.position, piece2.player);

        position_clear(piece2.position);
        changeplace(piece, bishop_move[4][i]);
        let t;
        if (plays == 'b') { t = black_king_check()[0]; }
        if (plays == 'w') { t = white_king_check()[0]; }
        changeplace(piece, piece_position);
        piece_place(piece);
        piece2.name = piece2_copy.name;
        piece2.unicode = piece2_copy.unicode;
        piece2.position = piece2_copy.position;
        piece2.player = piece2_copy.player;
        piece_place(piece2);
        if (!t) {
            bishop_king_move[4][k] = bishop_move[4][i];
            k++;
        }
    }

    return bishop_king_move;
}

function knight_king_safemove(piece) {
    let plays = piece.player;
    let knight_move = knight_possible_move(piece);
    let knight_king_move = [null, null, null, null, null, null, null, null];
    let piece_position = piece.position;

    for (let i = 0; i < 8; i++) {
        if (knight_move[i] == null) { continue; }
        if (!check_pieces(knight_move[i])[0]) {

            changeplace(piece, knight_move[i]);
            let t;
            if (plays == 'b') { t = black_king_check()[0]; }
            if (plays == 'w') { t = white_king_check()[0]; }
            changeplace(piece, piece_position);
            piece_place(piece);
            if (!t) {
                knight_king_move[i] = knight_move[i];
            }
        }

        else if (check_pieces(knight_move[i])[0]) {
            let piece2 = check_pieces(knight_move[i])[2];
            let piece2_copy = new Piece_detail(piece2.name, piece2.unicode, piece2.position, piece2.player);

            position_clear(piece2.position);
            changeplace(piece, knight_move[i]);
            let t;
            if (plays == 'b') { t = black_king_check()[0]; }
            if (plays == 'w') { t = white_king_check()[0]; }
            changeplace(piece, piece_position);
            piece_place(piece);
            piece2.name = piece2_copy.name;
            piece2.unicode = piece2_copy.unicode;
            piece2.position = piece2_copy.position;
            piece2.player = piece2_copy.player;
            piece_place(piece2);

            if (!t) {
                knight_king_move[i] = knight_move[i];
            }
        }
    }

    return knight_king_move;
}

function queen_king_safemove(piece) {
    let plays = piece.player;
    let queen_move = queen_possible_move(piece);
    let queen_king_move = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
    ];
    let piece_position = piece.position;
    for (let i = 0; i < queen_move.length - 1; i++) {
        let k = 0;
        for (let j = 0; j < queen_move[i].length; j++) {
            if (queen_move[i][j] == null) { break; }
            changeplace(piece, queen_move[i][j]);
            let t;
            if (plays == 'b') { t = black_king_check()[0]; }
            if (plays == 'w') { t = white_king_check()[0]; }
            changeplace(piece, piece_position);
            piece_place(piece);
            if (!t) {
                queen_king_move[i][k] = queen_move[i][j];
                k++;
            }
        }
    }
    let k = 0;
    for (let i = 0; i < queen_move[8].length; i++) {
        if (queen_move[8][i] == null) { break; }
        let piece2 = check_pieces(queen_move[8][i])[2];
        let piece2_copy = new Piece_detail(piece2.name, piece2.unicode, piece2.position, piece2.player);

        position_clear(piece2.position);
        changeplace(piece, queen_move[8][i]);
        let t;
        if (plays == 'b') { t = black_king_check()[0]; }
        if (plays == 'w') { t = white_king_check()[0]; }
        changeplace(piece, piece_position);
        piece_place(piece);
        piece2.name = piece2_copy.name;
        piece2.unicode = piece2_copy.unicode;
        piece2.position = piece2_copy.position;
        piece2.player = piece2_copy.player;
        piece_place(piece2);
        if (!t) {
            queen_king_move[8][k] = queen_move[8][i];
            k++;
        }
    }

    return queen_king_move;
}

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************

function piece_place(piece) {
    let a = document.getElementById(piece.position);
    if (piece.player == 'b') {
        a.style.transform = `rotate(180deg)`;
    }
    else {
        a.style.transform = `rotate(0deg)`;
        a.style.color = 'white';
    }
    a.innerHTML = piece.unicode;
}

function check_pieces(element) {
    if (element == pawn_Ba.position) { return [true, 'b', pawn_Ba]; }
    if (element == pawn_Bb.position) { return [true, 'b', pawn_Bb]; }
    if (element == pawn_Bc.position) { return [true, 'b', pawn_Bc]; }
    if (element == pawn_Bd.position) { return [true, 'b', pawn_Bd]; }
    if (element == pawn_Be.position) { return [true, 'b', pawn_Be]; }
    if (element == pawn_Bf.position) { return [true, 'b', pawn_Bf]; }
    if (element == pawn_Bg.position) { return [true, 'b', pawn_Bg]; }
    if (element == pawn_Bh.position) { return [true, 'b', pawn_Bh]; }
    if (element == pawn_Wa.position) { return [true, 'w', pawn_Wa]; }
    if (element == pawn_Wb.position) { return [true, 'w', pawn_Wb]; }
    if (element == pawn_Wc.position) { return [true, 'w', pawn_Wc]; }
    if (element == pawn_Wd.position) { return [true, 'w', pawn_Wd]; }
    if (element == pawn_We.position) { return [true, 'w', pawn_We]; }
    if (element == pawn_Wf.position) { return [true, 'w', pawn_Wf]; }
    if (element == pawn_Wg.position) { return [true, 'w', pawn_Wg]; }
    if (element == pawn_Wh.position) { return [true, 'w', pawn_Wh]; }

    if (element == rock_Ba.position) { return [true, 'b', rock_Ba]; }
    if (element == knight_Bb.position) { return [true, 'b', knight_Bb]; }
    if (element == bishop_Bc.position) { return [true, 'b', bishop_Bc]; }
    if (element == queen_Bd.position) { return [true, 'b', queen_Bd]; }
    if (element == king_Be.position) { return [true, 'b', king_Be]; }
    if (element == bishop_Bf.position) { return [true, 'b', bishop_Bf]; }
    if (element == knight_Bg.position) { return [true, 'b', knight_Bg]; }
    if (element == rock_Bh.position) { return [true, 'b', rock_Bh]; }
    if (element == rock_Wa.position) { return [true, 'w', rock_Wa]; }
    if (element == knight_Wb.position) { return [true, 'w', knight_Wb]; }
    if (element == bishop_Wc.position) { return [true, 'w', bishop_Wc]; }
    if (element == queen_Wd.position) { return [true, 'w', queen_Wd]; }
    if (element == king_We.position) { return [true, 'w', king_We]; }
    if (element == bishop_Wf.position) { return [true, 'w', bishop_Wf]; }
    if (element == knight_Wg.position) { return [true, 'w', knight_Wg]; }
    if (element == rock_Wh.position) { return [true, 'w', rock_Wh]; }
    var for_null = new Piece_detail(null, null, null, null);
    return false, null, for_null;
}

function position_clear(id) {
    let piece = check_pieces(id)[2];
    piece.name = null
    piece.unicode = null;
    piece.position = null;
    piece.player = null;
}

function position_replace(piece, id) {
    let a = document.getElementById(piece.position);
    a.innerHTML = null;
    piece.position = id;

    let b = document.getElementById(piece.position);
    b.innerHTML = piece.unicode;

    if (piece.player == 'b') {
        b.style.transform = `rotate(180deg)`;
    }
    else {
        b.style.transform = `rotate(0deg)`;
    }
    if (piece.player == 'b') {
        player = 'w';
    }
    else if (piece.player == 'w') {
        player = 'b';
    }
    let black_move = black_king_check()[0];
    if (black_move) { $('#' + king_Be.position).css("backgroundColor", check_color); }
    let white_move = white_king_check()[0];
    if (white_move) { $('#' + king_We.position).css("backgroundColor", check_color); }

    if (player == 'w' && !white_move) {
        $(".odd").css("background-color", odd);
        $(".even").css("background-color", even);
    }
    if (player == 'b' && !black_move) {
        $(".odd").css("background-color", odd);
        $(".even").css("background-color", even);
    }
    if (player == 'w') {
        document.getElementById("board").style.transform = "rotate(0deg)";
        document.getElementById("board").style.transitionTimingFunction = "ease-in-out";
        document.getElementById("board").style.transitionDuration = "1s";
    }

    if (player == 'b') {
        document.getElementById("board").style.transform = "rotate(180deg)";
        document.getElementById("board").style.transitionTimingFunction = "ease-in-out";
        document.getElementById("board").style.transitionDuration = "1s";
    }
    if (white_left == true || white_right == true || black_left == true || black_right == true) {
        king_rook_intial();
    }
}

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************

function new_clear(piece) {
    if (piece.position != null) { document.getElementById(piece.position).innerHTML = null; }
    piece.name = null;
    piece.unicode = null;
    piece.position = null;
    piece.player = null;
}

function new_player(piece, name, unicode, position, player) {
    piece.name = name;
    piece.unicode = unicode;
    piece.position = position;
    piece.player = player;
}


$("#new").click(function () {

    $(".odd").css("background-color", odd);
    $(".even").css("background-color", even);

    restb = 0;
    restw = 0;

    player = 'w';
    $('#tp').text('Player-1');

    $("#game").css("background-color", "black");
    $("#img3").attr('src', 'blackknightright.png');
    odd = 'white';
    even = 'black';
    color1 = '#ffaf6a';
    color2 = '#ffc999';
    color3 = '#ffaf6a';
    color4 = '#ffaf6a';
    black_shadow = "2px 2px 1px black";
    white_shadow = "2px 2px 1px white";
    $("#new").css("background-color", "white");
    $("#new").css("color", "black");
    $("#p1").css("color", "white");
    $("#p2").css("color", "white");
    $("#tp").css("color", "yellow");
    $("#turn").css("color", "white");

    $("#fw8").text(null);
    $("#fw7").text(null);
    $("#fw6").text(null);
    $("#fw5").text(null);
    $("#fw4").text(null);
    $("#fw3").text(null);
    $("#fw2").text(null);
    $("#fw1").text(null);

    $("#sw8").text(null);
    $("#sw7").text(null);
    $("#sw6").text(null);
    $("#sw5").text(null);
    $("#sw4").text(null);
    $("#sw3").text(null);
    $("#sw2").text(null);
    $("#sw1").text(null);

    $("#fb8").text(null);
    $("#fb7").text(null);
    $("#fb6").text(null);
    $("#fb5").text(null);
    $("#fb4").text(null);
    $("#fb3").text(null);
    $("#fb2").text(null);
    $("#fb1").text(null);

    $("#sb8").text(null);
    $("#sb7").text(null);
    $("#sb6").text(null);
    $("#sb5").text(null);
    $("#sb4").text(null);
    $("#sb3").text(null);
    $("#sb2").text(null);
    $("#sb1").text(null);

    new_clear(pawn_Ba);
    new_clear(pawn_Bb);
    new_clear(pawn_Bc);
    new_clear(pawn_Bd);
    new_clear(pawn_Be);
    new_clear(pawn_Bf);
    new_clear(pawn_Bg);
    new_clear(pawn_Bh);
    new_clear(pawn_Wa);
    new_clear(pawn_Wb);
    new_clear(pawn_Wc);
    new_clear(pawn_Wd);
    new_clear(pawn_We);
    new_clear(pawn_Wf);
    new_clear(pawn_Wg);
    new_clear(pawn_Wh);

    new_clear(rock_Ba);
    new_clear(knight_Bb);
    new_clear(bishop_Bc);
    new_clear(queen_Bd);
    new_clear(king_Be);
    new_clear(bishop_Bf);
    new_clear(knight_Bg);
    new_clear(rock_Bh);
    new_clear(rock_Wa);
    new_clear(knight_Wb);
    new_clear(bishop_Wc);
    new_clear(queen_Wd);
    new_clear(king_We);
    new_clear(bishop_Wf);
    new_clear(knight_Wg);
    new_clear(rock_Wh);

    new_player(pawn_Ba, 'pawn', '&#9823', 'a1', 'b');
    new_player(pawn_Bb, 'pawn', '&#9823', 'b1', 'b');
    new_player(pawn_Bc, 'pawn', '&#9823', 'c1', 'b');
    new_player(pawn_Bd, 'pawn', '&#9823', 'd1', 'b');
    new_player(pawn_Be, 'pawn', '&#9823', 'e1', 'b');
    new_player(pawn_Bf, 'pawn', '&#9823', 'f1', 'b');
    new_player(pawn_Bg, 'pawn', '&#9823', 'g1', 'b');
    new_player(pawn_Bh, 'pawn', '&#9823', 'h1', 'b');
    new_player(pawn_Wa, 'pawn', '&#9817', 'a6', 'w');
    new_player(pawn_Wb, 'pawn', '&#9817', 'b6', 'w');
    new_player(pawn_Wc, 'pawn', '&#9817', 'c6', 'w');
    new_player(pawn_Wd, 'pawn', '&#9817', 'd6', 'w');
    new_player(pawn_We, 'pawn', '&#9817', 'e6', 'w');
    new_player(pawn_Wf, 'pawn', '&#9817', 'f6', 'w');
    new_player(pawn_Wg, 'pawn', '&#9817', 'g6', 'w');
    new_player(pawn_Wh, 'pawn', '&#9817', 'h6', 'w');

    new_player(rock_Ba, 'rock', '&#9820', 'a0', 'b');
    new_player(knight_Bb, 'knight', '&#9822', 'b0', 'b');
    new_player(bishop_Bc, 'bishop', '&#9821', 'c0', 'b');
    new_player(queen_Bd, 'queen', '&#9819', 'd0', 'b');
    new_player(king_Be, 'king', '&#9818', 'e0', 'b');
    new_player(bishop_Bf, 'bishop', '&#9821', 'f0', 'b');
    new_player(knight_Bg, 'knight', '&#9822', 'g0', 'b');
    new_player(rock_Bh, 'rock', '&#9820', 'h0', 'b');
    new_player(rock_Wa, 'rock', '&#9814', 'a7', 'w');
    new_player(knight_Wb, 'knight', '&#9816', 'b7', 'w');
    new_player(bishop_Wc, 'bishop', '&#9815', 'c7', 'w');
    new_player(queen_Wd, 'queen', '&#9813', 'd7', 'w');
    new_player(king_We, 'king', '&#9812', 'e7', 'w');
    new_player(bishop_Wf, 'bishop', '&#9815', 'f7', 'w');
    new_player(knight_Wg, 'knight', '&#9816', 'g7', 'w');
    new_player(rock_Wh, 'rock', '&#9814', 'h7', 'w');

    piece_place(pawn_Ba);
    piece_place(pawn_Bb);
    piece_place(pawn_Bc);
    piece_place(pawn_Bd);
    piece_place(pawn_Be);
    piece_place(pawn_Bf);
    piece_place(pawn_Bg);
    piece_place(pawn_Bh);
    piece_place(pawn_Wa);
    piece_place(pawn_Wb);
    piece_place(pawn_Wc);
    piece_place(pawn_Wd);
    piece_place(pawn_We);
    piece_place(pawn_Wf);
    piece_place(pawn_Wg);
    piece_place(pawn_Wh);

    piece_place(rock_Ba);
    piece_place(knight_Bb);
    piece_place(bishop_Bc);
    piece_place(queen_Bd);
    piece_place(king_Be);
    piece_place(bishop_Bf);
    piece_place(knight_Bg);
    piece_place(rock_Bh);
    piece_place(rock_Wa);
    piece_place(knight_Wb);
    piece_place(bishop_Wc);
    piece_place(queen_Wd);
    piece_place(king_We);
    piece_place(bishop_Wf);
    piece_place(knight_Wg);
    piece_place(rock_Wh);

    $('.ws').css('textShadow', '2px 2px 1px white');
    $('.bs').css('textShadow', '2px 2px 1px black');
    $('#board').css('transform', "rotate(0deg)");
});

$("#img1").click(function () {
    location.reload();
});

$("#name").click(function () {
    location.reload();
});

$("#default").click(function () {
    $("#game").css("background-color", "black");
    $("#img3").attr('src', 'blackknightright.png');
    odd = 'white';
    even = 'black';
    color1 = '#ffaf6a';
    color2 = '#ffc999';
    color3 = '#ffaf6a';
    color4 = '#ffaf6a';
    black_shadow = "2px 2px 1px black";
    white_shadow = "2px 2px 1px white";
    $("#new").css("background-color", "white");
    $("#new").css("color", "black");
    $("#p1").css("color", "white");
    $("#p2").css("color", "white");
    $("#tp").css("color", "yellow");
    $("#turn").css("color", "white");
});

$("#theme1").click(function () {
    $("#game").css("background-color", "white");
    $("#img3").attr('src', 'whiteknightright.png');
    odd = 'white';
    even = 'black';
    color1 = 'yellowgreen';
    color2 = 'yellow';
    color3 = 'yellowgreen';
    color4 = 'yellowgreen';
    black_shadow = "2px 2px 1px black";
    white_shadow = "2px 2px 1px white";
    $("#new").css("background-color", "black");
    $("#new").css("color", "white");
    $("#p1").css("color", "black");
    $("#p2").css("color", "black");
    $("#tp").css("color", "blue");
    $("#turn").css("color", "blue");
});

$("#blackbg").click(function () {
    $("#game").css("background-color", "black");
});

$("#whitebg").click(function () {
    $("#game").css("background-color", "white");
});

$("#bluebg").click(function () {
    $("#game").css("background-color", "blue");
});

$("#bw").click(function () {
    odd = 'white';
    even = 'black';
});

$("#yg").click(function () {
    odd = 'yellow';
    even = 'yellowgreen';
});

$("#bs").click(function () {
    even = 'blue';
    odd = 'lightskyblue';
});

//******************************************************************************************************************************************************************************************************
//******************************************************************************************************************************************************************************************************
