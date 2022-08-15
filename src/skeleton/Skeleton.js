import { React } from "react";
import "./skeleton.css";
import SkeletonElement from "./SkeletonElement";

function Skeleton() {

    return (
        <div className={`skeleton-wrapper light`}>
            <div className="skeleton-article">
                <SkeletonElement type="title" />
                <SkeletonElement type="image" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
            <div className="shimmer-wrapper">
                <div className="shimmer"></div>
            </div>
        </div>
    );
}

export default Skeleton;