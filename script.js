//co 4 nhom so

//nhom1 :nhom so
//nhom2 : phep tinh
//nhom3 : xoa
//nhom4: = , phim dac biet % vaf =


/*
QUY ƯỚC PHÉP TÍNH
bấm + ngay sau đó bấm - thì tính là -
khi bấm % thì phía trước phải là phép chia
quy tắc ưu tiên : 1 nhân chia- 2 cộng chia
ưu tiên từ trái sang phải


//
Nhập : 1 + 15 * 2 + 6 / 3 + 2 * 2 
mảng số : 0 = 1 
          1 =15
          ...
mảng phép tính 0 = + ...

bước 1: tính các giá trị của nhân hoặc chia có trong biểu
thức sau đó lưu lại trong mảng
*/

//so phep tinh uu tien tim thay
var uu_tien=0;
var doi_dau = false;
//mang ghi cac so hang
var mang_so_index = 0;
var mang_so = new Array();

//mang ghi nho phep tinh
var mang_pt_index = 0;
var mang_pt = new Array();
//vua bam phep tinh
var doi_phep_tinh = false;
//Object ket qua
var ketqua = document.getElementById('ketqua');
//phim moi
var phim_moi = '';

//noi dung dang co
var str_ketqua = '';
//CAI DAT SU KIEN

function clickButton(obj){
    //chuoi ket qua hien tai
    if(str_ketqua=='' && phim_moi == ''){
		str_ketqua = ketqua.value;
	}
	if(str_ketqua=='0'){
		str_ketqua = '';
	}

    //HTML cua phim bam
    var type = obj.innerHTML;
    //nhom so
    if( type=='0' ||
        type=='1' ||
        type=='2' ||
        type=='3' ||
        type=='4' ||
        type=='5' ||
        type=='6' ||
        type=='7' ||
        type=='8' ||
        type=='9' ||
        type=='+/-' ||
        type=='.')

    {
        doi_phep_tinh = false;
       // doi dau
        if(type=='+/-'){
            //doi tu tru thanh cong
            if(doi_dau){
                doi_dau = false;
                phim_moi = phim_moi.substring(1);
            }
            //doi tu cong thanh tru
            else{
                doi_dau = true;
                phim_moi = '-' + phim_moi;
            }
        }
        else{
            phim_moi = phim_moi + type;
            
        }
        //thay doi hien thi
        ketqua.value = str_ketqua + phim_moi;
    }

    //nhom phep tinh
    else if (
        type=='+'||
        type=='-'||
        type=='x'||
        type=='/'
    ) {
        //truoc do co bam 1 phep tinh
        if(doi_phep_tinh){
            mang_pt[mang_pt_index-1] = type;
            //xu ly hien thi
            ketqua.value = ketqua.value.substring(0,ketqua.value.length -1) +type;
        }
        //chua co bam phep tinh
        else{
            mang_so[mang_so_index] = parseFloat(phim_moi);
            mang_so_index++;
    
            mang_pt[mang_pt_index] = type;
            mang_pt_index++;

            //xu ly hien thi
            ketqua.value = ketqua.value + type;
        }
        // ghi nho da bam phep tinh
        doi_phep_tinh = true;
        // doi gia tri hai chuoi co ban ve rong
        str_ketqua = '';
        phim_moi = '';
      
    }

    else if( type=='='|| type=='%'){
        if(phim_moi != ''){
            mang_so[mang_so_index] = parseFloat(phim_moi);
        }
        //dau =
        if(type=='='){
            
            // **********
            //goi ham tinh
        }
        //dau %
        else{
            //goi ham tinh %
        }
    }
    else if(type=='CE'){
        phim_moi = '';
        //thay doi hien thi
        ketqua.value = str_ketqua + phim_moi;
    }

    else{
        if(phim_moi.length > 1){
            phim_moi = phim_moi.substring(0, phim_moi.length-1);
        }else{
            phim_moi = '';

        }
        ketqua.value = str_ketqua + phim_moi;
    }
    console.log(mang_so);
    console.log(mang_pt);
}